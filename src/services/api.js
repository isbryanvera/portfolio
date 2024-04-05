const username = '@diego.coder';
const API_BASE_URL = `https://mediumpostsapi.vercel.app/api/${username}`;
const options = { method: 'GET' };

export default async function getPost() {
    try {
        const response = await fetch(API_BASE_URL, options);
        const data = await response.json();
        return data.dataMedium.slice(0, 3);
    } catch (error) {
        console.error(error);
    }
}
getPost()