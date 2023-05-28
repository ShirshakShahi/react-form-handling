import useForm from '../hooks/use-form';

const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    valueChangeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    isValid: firstNameIsValid,
    HasError: firstNameInputHasError,
    reset: resetFirstName } = useForm((value) => value.trim() !== '');


  const {
    enteredValue: enteredLastName,
    valueChangeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    isValid: lastNameIsValid,
    HasError: lastNameInputHasError,
    reset: resetLastName } = useForm((value) => value.trim() !== '');

  const {
    enteredValue: enteredEmail,
    valueChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    isValid: emailIsValid,
    HasError: emailHasError,
    reset: resetEmail } = useForm((value) => value.includes('@'));

  let canSumbit = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    canSumbit = true;
  }

  const submitHandler = event => {
    event.preventDefault();
    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();

  }

  const firstNameClasses = firstNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const lastNameClasses = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text'
            id='name'
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            autoComplete="OFF" />
          {firstNameInputHasError && <p className='error-text'>Can you please enter a valid first name for God's sake?</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            autoComplete="OFF" />
          {lastNameInputHasError && <p className='error-text'>I am telling you to enter a valid last name !!</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text'
          id='name'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          autoComplete="OFF" />
        {emailHasError && <p className='error-text'>How can someone be so dumb that they don't know their own email ID?</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!canSumbit}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
