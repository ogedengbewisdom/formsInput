import { useState } from "react";

const BasicForm = (props) => {

  const [firstName, setFirstName] = useState("")
  const [firstNameTouched, setFirstNameTouched] = useState(null)

  const firstNameIsValid = firstName.trim() !== ""
  const firstNameIsInValid = !firstNameIsValid && firstNameTouched


  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value)
  }

  const firstNameBlurHandler = () => {
    setFirstNameTouched(true)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(firstName)
    setFirstName("")
    setFirstNameTouched(false)
  }

  const firstNameValidClass = firstNameIsInValid ? "form-control invalid" : "form-control"

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
           {firstNameIsInValid && <p className="error-text">Please enter your first name</p>}
        </div>
        
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
