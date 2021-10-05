// const endpoint = 'https://randomuser.me/api/';
const url = 'https://randomuser.me/api/?results=50';
//funcion con promesa
function getUsersPromise(){
    return fetch(url)
    .then(res => res.json())
    .then(res => res.results)
    .catch(err => console.log(err));
}
//peticion asincrona
const getUsersAsync = async ()=>{
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.results;
        
    } catch (err){
        console.log(err);
    }
  }



export default {
    getUsersPromise,
    getUsersAsync

}