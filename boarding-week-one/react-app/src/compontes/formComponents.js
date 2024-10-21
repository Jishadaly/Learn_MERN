import React from 'react'
import useFormInput from '../hooks/useFormInput'

export default function FormComponents(props) {
    const nameInput = useFormInput('');
    const emailInput = useFormInput('');
    const { name } = props.match.params;

    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log(nameInput.value);
        console.log(emailInput.value);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' {...nameInput.value} placeholder='name' />
                <input type='text' {...emailInput.value} placeholder='email' />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
