
import useInput from "../hooks/useInput";

const SimpleInput = (props) => {

  const checkNameFunct = (enteredName) => enteredName.trim() !== ""
  const checkEmailFunct = (enteredEmail) => enteredEmail.trim().includes("@")

  const {
    enteredValue: enteredName,
    enteredValueIsValid: enteredNameValid,
    enteredValueIsInvalid: enteredNameIsInvalid,
    changeValueHandler: nameChangeHandler,
    changeBlurHandler: validNameHandler,
    reset: resetNameInput

  } = useInput(checkNameFunct) 

  const {
    enteredValue: enteredEmail,
    enteredValueIsValid: enteredEmailValid,
    enteredValueIsInvalid: enteredEmailIsInvalid,
    changeValueHandler: emailChangeHandler,
    changeBlurHandler: validEmailHandler,
    reset: resetEmailInput

  } = useInput(checkEmailFunct)


   let formIsValid = false

   if (enteredName && enteredEmail) {
    formIsValid = true
   }


  const submitHandler = (event) => {
    event.preventDefault()

    if (!enteredNameValid || !enteredEmailValid) {
      return;
    }

    const data = {
      Name: enteredName,
      Email: enteredEmail
    }
    
    console.log(data)
    resetEmailInput()
    resetNameInput()
    
  }
  
  const emailvalidclasses = enteredEmailIsInvalid ? "form-control invalid" : "form-control"
  const namevalidclasses = enteredNameIsInvalid ? "form-control invalid" : "form-control"
  return (
    <form onSubmit={submitHandler}>
      <div className={namevalidclasses}>
        <label htmlFor='name'>Name</label>
          <input
            type='text' 
            id='name' 
            onChange={nameChangeHandler} 
            value={enteredName} 
            onBlur={validNameHandler} 
          />
        {enteredNameIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>

      <div className={emailvalidclasses}>
        <label htmlFor='email'>Email</label>
          <input
            type='email' 
            id='email' 
            onChange={emailChangeHandler} 
            value={enteredEmail} 
            onBlur={validEmailHandler} 
          />
        {enteredEmailIsInvalid && <p className="error-text">Email must be valid and not empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
