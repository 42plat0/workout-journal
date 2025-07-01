import { MyForm } from "./MyForm";
import { Input, Label, Button } from "./MyFormComponents.jsx";


export function LoginForm(){
    const onSubmit = (data) => console.log(data);

    const validationOpts = {required: true};

    const username = ['username', 'Prisijungimo vardas', validationOpts];
    const email = ['email', 'Elektroninis paštas', validationOpts];
    const password = ['password', 'Slaptažodis', validationOpts];

    const register = [username, email, password];

    return <MyForm {...register}/>
}
