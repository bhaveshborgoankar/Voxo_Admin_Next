import React from "react";
import FormInput from "./FormInput";
const DivideInput = (props) => {

    const { inputtype } = props
    return (
        <>
            {inputtype === 'input' && <FormInput {...props} {...props.register} />}
        </>
    )
}
export default DivideInput;