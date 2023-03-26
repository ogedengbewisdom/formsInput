import {  useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState("")
  const [enteredNameTouch, setEnteredNameTouch] = useState(null)

   const enteredNameValid = enteredName.trim() !== ""
   const nameIsinvalid = !enteredNameValid && enteredNameTouch

  const nameHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const validHandler = (event) => {
    setEnteredNameTouch(true)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    setEnteredNameTouch(true)

    if (!enteredNameValid) {
      return;
    }
    
    console.log(enteredName)
    setEnteredName("")
    setEnteredNameTouch(false)
  }
  
  const namevalidclasses = nameIsinvalid ? "form-control invalid" : "form-control"
  return (
    <form onSubmit={submitHandler}>
      <div className={namevalidclasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameHandler} value={enteredName} onBlur={validHandler} />
        {nameIsinvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
