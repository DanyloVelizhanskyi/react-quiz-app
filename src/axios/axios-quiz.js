import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-app-80961.firebaseio.com/'
});