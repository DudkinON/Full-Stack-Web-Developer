from main.core import open_movies_page
from main.media import get_movies

open_movies_page(get_movies('data/movies.csv'))
