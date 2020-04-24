import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nodemercadolibre.herokuapp.com/categories/'
})

export default instance;