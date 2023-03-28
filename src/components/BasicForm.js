// import { useState } from "react";
import useBasicInput from "../hooks/useBasicInput";

const BasicForm = (props) => {

  const {
    value: firstName,
    valueIsValid: firstNameIsValid,
    valueIsInValid: firstNameIsInValid,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
} = useBasicInput(value => value.trim() !== "") 

const {
  value: lastName,
  valueIsValid: lastNameIsValid,
  valueIsInValid: lastNameIsInValid,
  valueChangeHandler: lastNameChangeHandler,
  valueBlurHandler: lastNameBlurHandler,
  reset: resetlastName
} = useBasicInput(value => value.trim() !== "") 

const {
  value: email,
  valueIsValid: emailIsValid,
  valueIsInValid: emailIsInValid,
  valueChangeHandler: emailChangeHandler,
  valueBlurHandler: emailBlurHandler,
  reset: resetemail
} = useBasicInput(value => value.trim().includes("@")) 

let formIsValid = false

if (firstNameIsValid && lastNameIsValid && emailIsValid) {
  formIsValid = true
}

  const submitHandler = (event) => {
    event.preventDefault()

    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    } else {
      const data = {
        "First Name": firstName,
        "Last Name": lastName,
        "Email": email
      }
      console.log(data)
      resetFirstName()
      resetlastName()
      resetemail()
    }
    
  }

  const firstNameValidClass = firstNameIsInValid ? "form-control invalid" : "form-control"
  const lastNameValidClass = lastNameIsInValid ? "form-control invalid" : "form-control"
  const emailValidClass = emailIsInValid ? "form-control invalid" : "form-control"

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameValidClass}>
          <label htmlFor='name'>First Name</label>
          <input
           type='text' 
           id='name' 
           onChange={firstNameChangeHandler}
           onBlur={firstNameBlurHandler}
           value={firstName} 
           />
           {firstNameIsInValid && <p className="error-text">Please enter your first name!</p>}
        </div>
        
        <div className={lastNameValidClass}>
          <label htmlFor='name'>Last Name</label>
          <input
           type='text' 
           id='name'
           value={lastName}
           onChange={lastNameChangeHandler}
           onBlur={lastNameBlurHandler}
            />
            {lastNameIsInValid && <p className="error-text">Please enter your last name!</p>}
        </div>
      </div>
      <div className={emailValidClass }>
        <label htmlFor='email'>E-Mail Address</label>
        <input
         type='email' 
         id='email' 
         onChange={emailChangeHandler}
         onBlur={emailBlurHandler}
         value={email}
         />
         {emailIsInValid && <p className="error-text">Please enter a valid E-mail!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
