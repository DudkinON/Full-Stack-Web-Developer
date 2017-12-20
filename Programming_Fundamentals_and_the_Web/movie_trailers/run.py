from main.core import open_movies_page
from main.media import get_movies
import os

BASE_DIR = os.path.dirname(os.path.realpath(__file__))
path = ''.join([BASE_DIR, '/data/movies.csv'])

open_movies_page(get_movies(path))
