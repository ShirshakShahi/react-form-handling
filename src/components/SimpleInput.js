import { useEffect, useState, useRef } from 'react';


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const nameInputRef = useRef();
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("Hiiiiiiiiiiiiiiiiiiiiiiiiiii");
    }
  }, []);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    // const enteredValue = nameInputRef.current.value;
    setEnteredNameTouched(true);
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    // console.log(enteredValue);
    // nameInputRef.current.value = ""; => this is not recommended as it directly manipulates the DOM.

    setEnteredName('');
  }

  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' value={enteredName} ref={nameInputRef} onChange={nameInputChangeHandler} id='name' />
        {nameInputIsValid && <p className='error-text'>Please enter a valid name!!!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
