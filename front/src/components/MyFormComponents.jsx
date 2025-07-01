export function Input(props){
    return <input {...props} />
}

export function Label({inputName, labelContent, ...rest}){
    return <label htmlFor={inputName} {...rest}>{labelContent}</label>;
}

export function Button({children, ...attributes}){
    return <button {...attributes}>{children}</button>;
}

export function Para({children, ...attributes}){
    return <p {...attributes}>{children}</p>;
}
