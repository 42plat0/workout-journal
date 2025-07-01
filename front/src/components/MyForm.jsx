import { useForm } from "react-hook-form";
import { useState } from "react";

import { Input, Label, Button, Para } from "./MyFormComponents.jsx";

import { getInputParams } from "../utils/form.js";
import { myAxios } from "../utils/axiosConfig.js";

export function MyForm(props) {
    const {
        register,
        handleSubmit,
        formState: {errors},
        clearErrors
    } = useForm();

    const [error, setError] = useState(null);

    const sendForm = async (data) => {
        let res = await myAxios.post('login', { ...data });

        if (res)
            setError(res.error);
    }  

    // Clears all errors whenever any input changes
    const handleAnyChange = () => {
        clearErrors();
        setError(null);
    };

    const onSubmit = (data) => sendForm(data);

    let formData = null;
    if (Object.keys(props).length){
        const fields = props.fields.map((field) => {
            const modField = getInputParams(register, ...field);
            modField.register.onChange = handleAnyChange
            return modField;
        })
        formData = [...fields];
    }

    return (
        <>
            {error && 
                <Para className="error" style={{color: "red"}}>
                    {error}
                </Para>
            }
            {Object.keys(errors).length > 0 &&  // Show first error message
                    <Para className="error" style={{color: "red"}}>
                        {Object.values(errors)[0].message}
                    </Para>
            }
            
            <form onSubmit={handleSubmit(onSubmit)}>
                {formData &&
                    formData.map((item, idx) =>
                        <div key={idx}>
                            <Label {...item.label} />
                            <Input {...item.register} />
                        </div>
                    )
                }

                <Button> "Siusti" </Button>
            </form>
        </>
    )
} 
