import webbrowser
import os
import re


def def_template(template_name):
    with open(os.path.abspath('html/{}.html'.format(template_name)), 'r') as h:
        return h.read()


# Styles and scripting for the page
main_page_head = def_template('head')

# The main page layout and title bar
main_page_content = def_template('base')

# A single movie entry html template
movie_tile_content = def_template('content')


def create_movie_tiles_content(movies):
    # The HTML content for this section of the page
    full_content = ''
    for movie in movies:
        # Extract the youtube ID from the url
        youtube_id_match = re.search(r'(?<=v=)[^&#]+',
                                     movie.trailer_youtube_url)
        youtube_id_match = youtube_id_match or re.search(
            r'(?<=be/)[^&#]+', movie.trailer_youtube_url)
        trailer_youtube_id = youtube_id_match.group(0) if youtube_id_match \
            else None

        # Append the tile for the movie with its content filled in
        full_content += movie_tile_content.format(
            movie_title=movie.title,
            movie_year=movie.year,
            poster_image_url=movie.poster_image_url,
            description=movie.storyline,
            trailer_youtube_id=trailer_youtube_id
        )
    return full_content


def open_movies_page(movies):
    # Create or overwrite the output file
    output_file = open('html/index.html', 'w')

    # Replace the placeholder for the movie tiles with the actual dynamically
    # generated content
    rendered_content = main_page_content.format(
        movie_tiles=create_movie_tiles_content(movies),
        main_page_head=main_page_head)

    # Output the file
    output_file.write(rendered_content)
    output_file.close()

    # open the output file in the browser
    url = os.path.abspath(output_file.name)
    webbrowser.open('file://' + url, new=2)  # open in a new tab, if possible
