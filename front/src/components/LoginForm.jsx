import { MyForm } from "./MyForm";

import { useForm } from "react-hook-form";

import { Input, Label, Button } from "./MyFormComponents.jsx";


export function LoginForm(){
    const onSubmit = (data) => console.log(data);

    const username = ['username', 'Prisijungimo vardas', {required: true}];
    const password = ['password', 'Slaptažodis', {required: true}];

    const login = [username, password];

    return <MyForm {...login}/>
}
