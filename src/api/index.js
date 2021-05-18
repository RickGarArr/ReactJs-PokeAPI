export default async function apiCall({ url, method, body, headers }) {
    try {
        const response = await fetch(url, {
            method: "GET",
            body,
            headers
        });
        return response.json();
    } catch (error) {
        Promise.reject(error);
    }

}