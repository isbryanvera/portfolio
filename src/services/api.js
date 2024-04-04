// import { API_BASE_URL , API_KEY } from '../config/apiConfig';

const API_BASE_URL = 'https://api.medium.com/v1';
const API_KEY = '255bfb01f6f45bcdcbdd4de14d533458a123984a93a453dfe466d83626996b47b';

// Primera solicitud para obtener el userId
fetch(`${API_BASE_URL}/me`, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
    }
})
.then(response => response.json())
.then(({data}) => {
    console.log(data);
    const userId = data.id;

    // Segunda solicitud para obtener las publicaciones del usuario
    fetch(`${API_BASE_URL}/users/${userId}/publications`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
})
.catch(error => console.error(error));
