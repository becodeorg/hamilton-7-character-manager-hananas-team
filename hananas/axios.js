import axios from 'axios';

const APIurl = "https://character-database.becode.xyz/characters/";

export const fetchAllData = async () =>{
    const res = await axios.get(APIurl)
    return res.data;
}

export const fetchSingleData = async (id) =>{
    const res = await axios.get(APIurl+id)
    return res.data;
}

export const deleteSingleData = async (id) =>{
    const res =await axios.get(APIurl+id);
    return axios.delete(APIurl+id);
}