import { useNavigate } from "react-router";
import { deleteWorkout } from "../services/workoutService";
import { Card, Heading3, Para, Button } from "./BaseComponents";

const deleteWorkoutHandler = (id) => {
    deleteWorkout(id);

    // TODO Hack for time being
    setTimeout(() => {
        window.location.reload();
    }, 500)
}

export function Workout({ children }) {
    const { id, name } = children;
    // Default styling for workout card
    
    return (
        <Card className="card">
            <div>
                <Heading3 className="card-heading">{name}</Heading3>
                <Para className="card-content"> some text is here</Para>
            </div>
            <div className="flex gap-3">
                <Button>Edit</Button>
                <Button onClick={() => deleteWorkoutHandler(id)}>Delete</Button>
            </div>
        </Card>
    )
}


