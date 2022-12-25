import React from "react";
import { Btn } from "../../AbstractElements";
const SubmintButton = ({ title, isLoader }) => {
    return (
        <div className='button login'>
            <Btn attrBtn={{ type: 'submit' }}>
                <span>{title}</span>
                {
                    isLoader &&
                    <div className="loading"></div>
                }
            </Btn>
        </div>
    )
}
export default SubmintButton