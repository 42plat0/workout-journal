export function Input(props){
    return <input {...props} />
}

export function Label({inputName, labelContent, ...rest}){
    return <label htmlFor={inputName} {...rest}>{labelContent}</label>;
}

export function Button({label}, props){
    return <button {...props}>{label}</button>; 
}
