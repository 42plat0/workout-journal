import { MyForm } from "./MyForm";

export function LoginForm(){
    const username = ['username', 'Prisijungimo vardas', {required: 'Prisijungimo vardas yra privalomas'}];
    const password = ['password', 'Slaptažodis', {required: 'Slaptažodis yra privalomas'}];

    const login = [username, password];

    const formData = {
        fields: login,
        endpoint: 'login'
    };

    return <MyForm {...formData}/>
}
