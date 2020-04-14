import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.mercadolibre.com/sites/MLA/search?q='
})

export default instance;