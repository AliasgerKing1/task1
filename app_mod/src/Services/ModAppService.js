import axios from 'axios'

// let apiUrl = 'https://one001-ai-app-mod.onrender.com/api/mod/app/'
let apiUrl = 'http://localhost:4011/api/mod/app/'

let addModApp = async (data) => {
    return await axios.post(apiUrl, data);
}
let getModApp = async () => {
    return await axios.get(apiUrl);
}
let getModAppById = async (id) => {
    return await axios.get(`${apiUrl}${id}`);
}
let updateModApp = async (id, data) => {
    return await axios.put(`${apiUrl}${id}`, data);
}
let deleteModApp = async (id) => {
    return await axios.delete(`${apiUrl}${id}`);
}

export {addModApp, getModApp,getModAppById, deleteModApp, updateModApp}