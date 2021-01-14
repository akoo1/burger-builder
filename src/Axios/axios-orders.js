
import axios from 'axios';

// Creating instances of axios is a better approach than setting global default config for axios 
// if you are using more than one URLs in your app.

const instance = axios.create({
  baseURL: 'https://burger-builder-react-83dbd-default-rtdb.firebaseio.com'
})


export default instance;