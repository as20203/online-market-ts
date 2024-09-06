import React from 'react';
import './InputFormGroup.scss'

// interface Remaining{
//     regex:string
// }

interface Props {
    labelName: string,
    name: string,
    type: string,
    placeholder: string,
    value: string,
    onChange: any,
    regex?: string
}
const InputFormGroup: React.FC<Props> = ({ labelName, name, type, placeholder, value, onChange, regex }) => {

    return (
        <div className='generic-input-form-group'>
            <label> {labelName}</label>
            <input pattern={regex} onChange={onChange} value={value} placeholder={placeholder} autoComplete='off' required type={type} name={name}></input>
        </div>
    )
}
export default InputFormGroup;