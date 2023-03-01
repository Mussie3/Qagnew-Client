import { useEffect, useState } from 'react'

const useInput = (val) => {


    const [value, setValue] = useState();
    const [valueIsValid, setValueIsValid] = useState(false);
    const [valueWasTouched, setValueWasTouched] = useState(false);
    
    
    const handleValue = e => {
        if(e.target.value.trim().length !== 0 || e.target.value.includes('@')) {
            setValueIsValid(true);
        }else {setValueIsValid(false);}
        setValue(e.target.value);
    }

    const handleValueBlur = () =>{
        setValueWasTouched(true);
    }

    const reset = () => {
        setValue('');
    }

    return {
        value: value,
        valueIsValid: valueIsValid,
        valueWasTouched: valueWasTouched,
        reset,
        handleValue,
        handleValueBlur
    }
}

export default useInput;
