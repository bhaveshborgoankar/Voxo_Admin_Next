import React from "react";
import { FormGroup, Label } from "reactstrap";
const FloatingInput = (props) => {
    const { title } = props
    return (
        <>
            <FormGroup floating>
                {props.children}
                <Label for='exampleEmail'>{title}</Label>
            </FormGroup>
        </>
    )
}
export default FloatingInput