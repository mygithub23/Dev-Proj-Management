import axios from 'axios';

const url = "http://localhost:5000/Developers";



export const fetchDevelopers = () => axios.get(url)
    .then(res => res.json())
    .then(data => console.log(data));
    // .catch(err = console.error(err));

export const updateDeveloper = (id, updatedDeveloper) =>  axios.patch(`${url}/${id}`, updatedDeveloper);


export const createDeveloper = (newDeveloper) => axios.Developer(url, newDeveloper);
export const deleteDeveloper = (id) => axios.delete(`${url}/${id}`);