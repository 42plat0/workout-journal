import { MyForm } from "./MyForm";

export function LoginForm(){
    const username = ['username', 'Prisijungimo vardas', {required: 'Prisijungimo vardas yra privalomas'}];
    const password = ['password', 'Slaptažodis', {required: 'Slaptažodis yra privalomas'}];

    const formData = {
        fields: [username, password],
        endpoint: 'login',
        btnCont : 'Prisijungti',
        successMsg : 'Sėkmingai prisijungėte'
    };

    return <MyForm {...formData}/>
}
