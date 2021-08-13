const API_KEY = '35ae0ab849a7893db02cf33f003e017f';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = () => {
    return fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`)
        .then((response) => response.json())
            }

export const getUpcomingMovies = () => {
    return fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`)
        .then((response) => response.json())
    }

export const getNowPlayingMovies = () => {
    return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
            .then((response) => response.json())
        }

