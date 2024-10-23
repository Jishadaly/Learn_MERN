import { useState } from "react";

export default function useFormInput(initalValue) {

    const [value, setValue] = useState(initalValue);
    
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return {
        value,
        onchange: handleChange,
    }
}