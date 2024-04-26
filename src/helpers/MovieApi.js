import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '';

export const fetchMovies = async() =>{
    try {
        const response = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}`)
        return response.data.results;
    } catch (error) {
        console.error('Error de busqueda:',error);
        return [];
    }
};