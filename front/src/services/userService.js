import { myAxios } from "../utils/axiosConfig.js";

export async function readUsers(){
    let res = await myAxios.get('/users').then((res) => res.data);

    return res;
}
