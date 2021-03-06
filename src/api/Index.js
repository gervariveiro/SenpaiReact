const API_KEY = '76cb9956a2915c574207bdfb67307034';
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

