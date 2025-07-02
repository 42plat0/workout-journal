import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router";

import { Input, Label, Button, Para } from "./MyFormComponents.jsx";

import { getInputParams } from "../utils/form.js";
import { myAxios } from "../utils/axiosConfig.js";
import { getUrlParts } from "../utils/utils.js";

export function MyForm(props) {
    const [error, setError] = useState(null);
    const [msg, setMsg]     = useState(null);
    const {
        register,
        handleSubmit,
        formState: {errors},
        clearErrors,
        reset
    } = useForm();

    const nav = useNavigate(), loc = useLocation();

    const buttonContent = props?.btnCont ? props?.btnCont : "Siusti";
    const onSubmit = (data) => sendForm(data);

    const sendForm = async (data) => {
        let res = await myAxios.post(props.endpoint, { ...data });

        if (res){
            if (res.error)
                setError(res.error);
            else if (res.status === 'success'){
                setMsg(res.message);
                reset();
            }
        }
    }  

    // Clears all errors whenever any input changes
    const handleAnyChange = () => {
        clearErrors();
        setError(null);
        setMsg(null);
    };

    const onOtherAction = () => {
        const baseEP = getUrlParts(loc.pathname)[0];
        const fullUrlToOtherAction = `${baseEP}/${props.otherAction.nav}`;
        nav(fullUrlToOtherAction);
    }

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
                ||
             msg && // Shows success msg
                <Para className="success" style={{color: "green"}}>
                    {msg}
                </Para>
            }

            {Object.keys(errors).length > 0 &&  // Show first error message
                <Para className="error" style={{color: "red"}}>
                    {Object.values(errors)[0].message}
                </Para>
            }
            
            <form onSubmit={handleSubmit(onSubmit)} >
                {formData &&
                    formData.map((item, idx) =>
                        <div key={idx}>
                            <Label {...item.label} />
                            <Input {...item.register} />
                        </div>
                    )
                }

                <div className="flex justify-center gap-5">
                    <Button>{buttonContent}</Button>
                    {props.otherAction && 
                        <Button onClick={onOtherAction}>{props.otherAction.label}</Button>
                    }
                </div>
            </form>
        </>
    )
} 
