import { MyForm } from "./MyForm";

export function RegisterForm(){
    const username = ['username', 'Prisijungimo vardas', {required: 'Prisijungimo vardas yra privalomas'}];
    const password = ['password', 'Slaptažodis', {required: 'Slaptažodis yra privalomas'}];
    const repassword = ['repassword', 'Pakartokite Slaptažodį', {required: 'Slaptažodis yra privalomas'}];

    const register = [username, password, repassword];

    const formData = {
        fields: register,
        endpoint: 'register'
    };

    return <MyForm {...formData}/>
}
