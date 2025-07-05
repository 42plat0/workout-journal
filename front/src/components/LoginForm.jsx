import { MyForm } from "./MyForm";
import { goHomeHandler } from "../utils/webUtils";
import { getUserContext } from "../services/userService";

export function LoginForm(){
    const username = ['username', 'Prisijungimo vardas', {required: 'Prisijungimo vardas yra privalomas'}];
    const password = ['password', 'Slaptažodis', {required: 'Slaptažodis yra privalomas'}];
    
    const {user} = getUserContext();

    if (user){
       goHomeHandler(); 
    }
    const formData = {
        fields: [username, password],
        endpoint: 'login',
        btnCont : 'Prisijungti',
        otherAction: {nav: 'register', label: 'Registruotis'},
        redirectTo: '/'
    };

    return <MyForm {...formData}/>
}
