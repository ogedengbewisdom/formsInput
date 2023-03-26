import { useEffect, useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState("")
  const [enteredNameValid, setEnteredNameValid] = useState(null)
  const [enteredNameTouch, setEnteredNameTouch] = useState(null)

  useEffect( () => {
    if (enteredNameValid) {
      console.log("name input is valid")
    }
  }, [enteredNameValid])

  const nameHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const validHandler = (event) => {
    setEnteredNameTouch(true)
    setEnteredNameValid(event.target.value.trim() !== "")
  }

  const submitHandler = (event) => {
    event.preventDefault()
    setEnteredNameTouch(true)

    if (enteredName.trim() === "") {
      setEnteredNameValid(false)
      return;
    }
    setEnteredNameValid(true)
    console.log(enteredName)
  }
  const nameIsinvalid = !enteredNameValid && enteredNameTouch
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
