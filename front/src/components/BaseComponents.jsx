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

export function Card({ children, ...attributes }){
    return <div {...attributes}>{children}</div>;
}

export function Heading3({ children, ...attributes }){
    return <h3 className="heading3"{...attributes}>{children}</h3>;
}

export function TextContent({ children, ...attributes }){
    return <p {...attributes}>{children}</p>;
}
