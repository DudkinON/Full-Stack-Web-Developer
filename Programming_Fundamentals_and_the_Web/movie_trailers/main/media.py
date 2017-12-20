import csv
import os
import webbrowser


def get_movies(movies_file):
    """
    This function get path of csv file return list of dictionaries
    :param movies_file: path of csv file
    :return list: return list of dictionaries
    """
    with open(os.path.abspath(movies_file), 'r') as objects:
        movies = list()
        movies_list = csv.DictReader(objects)
        for movie in movies_list:
            movies.append(Movie(
                movie_title=movie['name'],
                movie_year=movie['year'],
                movie_storyline=movie['description'],
                poster_image=movie['image_url'],
                trailer_youtube=movie['youtube_url'],
            ))
    return movies


class Movie:
    """
    This constructor creates your movie objects.
    Attributes:
        movie_title (str): title of movie
        movie_year (int): movie year
        movie_storyline (str): movie description
        poster_image (str): URL of movie poster
        trailer_youtube (str): URL of youtube trailer
    """
    def __init__(self, movie_title, movie_year, movie_storyline, poster_image, trailer_youtube):
        self.title = movie_title
        self.year = movie_year
        self.storyline = movie_storyline
        self.poster_image_url = poster_image
        self.trailer_youtube_url = trailer_youtube

    def show_trailer(self):
        webbrowser.open(self.trailer_youtube_url)

