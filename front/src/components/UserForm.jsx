import { MyForm } from "./MyForm";
import { goHomeHandler } from "../utils/webUtils";
import { getUserContext } from "../services/userService";

export function UserForm() {
    // name, display label, validations
    const username = ['username', 'Username', { required: 'Username is required' }];
    const email = ['email', 'Email', { required: 'Email is required' }];
    const password = ['password', 'Password', { required: 'Password is required' }];
    const repassword = ['repassword', 'Confirm Password', { required: 'Slaptažodis yra privalomas' }];
    const role = ['role', 'Role', { required: 'Role is required' }];

    const { user } = getUserContext();

    if (user) {
        goHomeHandler();
    }
    const formData = {
        fields: [username, email, password, repassword, role],
        endpoint: 'user/create',
        btnCont: 'Sukurti',
        //otherAction: {nav: 'register', label: 'Registruotis'},
        //redirectTo: '/'
    };

    return <MyForm {...formData} />
}
