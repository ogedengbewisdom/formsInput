import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState("")
  const [enteredNameTouch, setEnteredNameTouch] = useState(null)
  const [enteredEmail, setEnteredEmail] = useState("")
  const [enteredEmailTouch, setEnteredEmailTouch] = useState(null)


   const enteredNameValid = enteredName.trim() !== ""
   const nameIsinvalid = !enteredNameValid && enteredNameTouch

   const enteredEmailValid = enteredEmail.trim().includes("@")
   const emailIsInValid = !enteredEmailValid && enteredEmailTouch

   let formIsValid = false

   if (enteredName && enteredEmail) {
    formIsValid = true
   }

  const nameHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const validNameHandler = (event) => {
    setEnteredNameTouch(true)
  }

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value)
  }

  const validEmailHandler = () => {
    setEnteredEmailTouch(true)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    setEnteredNameTouch(true)
    setEnteredEmailTouch(true)

    if (!enteredNameValid || !enteredEmailValid) {
      return;
    }

    const data = {
      Name: enteredName,
      Email: enteredEmail
    }
    
    console.log(data)
    setEnteredName("")
    setEnteredEmail("")
    setEnteredNameTouch(false)
    setEnteredEmailTouch(false)
    
  }
  
  const namevalidclasses = nameIsinvalid ? "form-control invalid" : "form-control"
  const emailvalidclasses = emailIsInValid ? "form-control invalid" : "form-control"
  return (
    <form onSubmit={submitHandler}>
      <div className={namevalidclasses}>
        <label htmlFor='name'>Name</label>
          <input
            type='text' 
            id='name' 
            onChange={nameHandler} 
            value={enteredName} 
            onBlur={validNameHandler} 
          />
        {nameIsinvalid && <p className="error-text">Name must not be empty</p>}
      </div>

      <div className={emailvalidclasses}>
        <label htmlFor='email'>Email</label>
          <input
            type='email' 
            id='email' 
            onChange={emailHandler} 
            value={enteredEmail} 
            onBlur={validEmailHandler} 
          />
        {emailIsInValid && <p className="error-text">Email must be valid and not empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
