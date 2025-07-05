import { myAxios } from "../utils/axiosConfig.js";

export async function readWorkouts(){
    let res = await myAxios.get('/workouts').then((res) => res.data);
    return res;
}

export async function deleteWorkout(id){
    let res = await myAxios.delete(`/workouts/${id}`).then((res) => res.data);
    return res;
}
