import { insertExercise } from "../models/exerciseModel.js"

export const addWorkoutExercise = async (req, res, next) => {
    try {
        const { wId } = req.params;
        
        
        const exercise = req.body;
        exercise.workout_id = +wId;
        
        const newExercise = await insertExercise(exercise);
        
        res.redirect(`http://localhost:5000/api/v1/workouts/${wId}`);
        
        return; 
    } catch (error) {
        next(error);
    }
}
