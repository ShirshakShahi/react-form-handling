import { useState } from "react";
const useForm = (validate) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    let isValid = validate(enteredValue)
    let HasError = !isValid && isTouched;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    }

    const blurHandler = () => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }
    return {
        enteredValue,
        valueChangeHandler,
        blurHandler,
        isValid,
        HasError,
        reset
    }


}


export default useForm;
