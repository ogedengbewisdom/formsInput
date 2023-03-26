import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState("")

  const nameHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const submitHandler = (event) => {

    if (enteredName.trim() === "") {
      return;
    }
    event.preventDefault()
    console.log(enteredName)
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameHandler} value={enteredName} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
