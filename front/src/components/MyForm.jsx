import { useForm } from "react-hook-form";
import { useState } from "react";

import { Input, Label, Button } from "./MyFormComponents.jsx";

import { getInputParams } from "../utils/form.js";
import { myAxios } from "../utils/axiosConfig.js";

export function MyForm(props) {
    const {
        register,
        handleSubmit
    } = useForm();

    const [error, setError] = useState(null);

    const sendLogin = async (data) => {
        let res = await myAxios.post('/login', { ...data });

        if (res)
            setError(res.error);
    }

    const onSubmit = (data) => sendLogin(data);

    const username = getInputParams(register, 'username', 'Prisijungimo vardas', { required: true });
    const password = getInputParams(register, 'password', 'Slaptažodis', { required: true });

    const login = [username, password];

    return (
        <>
            {error && <p className="error" style={{color: "red"}}>{error}</p>}
            
            <form onSubmit={handleSubmit(onSubmit)}>
                {login &&
                    login.map((item, idx) =>
                        <div key={idx}>
                            <Label {...item.label} />
                            <Input {...item.register} />
                        </div>
                    )
                }

                <Button label="Siusti" />
            </form>
        </>
    )
} 
