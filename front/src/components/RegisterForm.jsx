import { MyForm } from "./MyForm";

export function RegisterForm(){
    // Field name, field label, react-form validators
    const username = ['username', 'Prisijungimo vardas', {required: 'Prisijungimo vardas yra privalomas'}];
    const password = ['password', 'Slaptažodis', {required: 'Slaptažodis yra privalomas'}];
    const repassword = ['repassword', 'Pakartokite Slaptažodį', {required: 'Slaptažodis yra privalomas'}];
    const email = ['email', 'Elektroninis paštas', {required: 'Elektroninis paštas yra privalomas'}];

    const formData = {
        fields: [username, email, password, repassword],
        endpoint: 'register',
        btnCont : 'Registruotis',
        otherAction: {nav: 'login', label: 'Prisijungti'}
    };

    return <MyForm {...formData}/>
}
