import { MyForm } from "./MyForm";
import { getUserContext } from "../services/userService.js";

export function WorkoutForm(){
    const workoutName = ['name', 'Workout name', {required: 'Workout name is required'}];

    const {user} = getUserContext();
    const formData = {
        fields: [workoutName ],
        endpoint: `user/${user.id}/workouts`,
        btnCont : 'Create',
    };

    return <MyForm {...formData}/>
}
