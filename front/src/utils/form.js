export function getInputParams(registerFunc, inpName, label, reqOpts){
    return {
        label: { inputName:  inpName, labelContent:  label},
        register: registerFunc(inpName, reqOpts)
    };
}
