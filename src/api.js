// const endpoint = 'https://randomuser.me/api/';
const url = 'https://randomuser.me/api/?results=50';

function getUsersPromise(){
    return fetch(url)
    .then(res => res.json())
    .then(res => res.results)
    .catch(err => console.log(err));
}



export default {
    getUsersPromise
}