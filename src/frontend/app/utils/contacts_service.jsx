export function getContactsList(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(err => console.log(err));
}