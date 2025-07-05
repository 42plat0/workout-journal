import { useState, useEffect } from "react";

import { Workout } from "../components/Workout";
import { readWorkouts } from "../services/workoutService";
import { Heading3 } from "../components/BaseComponents";

export function Workouts(){
    const [workouts, setWorkouts] = useState(null);
    
    const getWorkouts = async () => await readWorkouts().then((data) => setWorkouts(data));

    useEffect(() => {
        getWorkouts();
    }, [])

    return(
        <>
        <Heading3>My workouts</Heading3>
        
        <div className="flex flex-wrap gap-3">
            {workouts &&
                workouts.map((workout, idx) => {
                    return( 
                        <Workout key={idx}>{workout}</Workout>
                    )
                })
            } 
        </div>
        </>
    );

}

