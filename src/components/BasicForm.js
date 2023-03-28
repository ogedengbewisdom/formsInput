// import { useState } from "react";
import useBasicInput from "../hooks/useBasicInput";

const BasicForm = (props) => {

  const {
    value: firstName,
    valueIsInValid: firstNameIsInValid,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
} = useBasicInput(value => value.trim() !== "") 

const {
  value: lastName,
  valueIsInValid: lastNameIsInValid,
  valueChangeHandler: lastNameChangeHandler,
  valueBlurHandler: lastNameBlurHandler,
  reset: resetlastName
} = useBasicInput(value => value.trim() !== "") 

  // const [firstName, setFirstName] = useState("")
  // const [firstNameTouched, setFirstNameTouched] = useState(null)

  // const firstNameIsValid = firstName.trim() !== ""
  // const firstNameIsInValid = !firstNameIsValid && firstNameTouched


  // const firstNameChangeHandler = (event) => {
  //   setFirstName(event.target.value)
  // }

  // const firstNameBlurHandler = () => {
  //   setFirstNameTouched(true)
  // }

  const submitHandler = (event) => {
    event.preventDefault()

    if (!firstName || !lastName) {
      return;
    } else {
      const data = {
        "First Name": firstName,
        "Last Name": lastName
      }
      console.log(data)
      resetFirstName()
      resetlastName()
    }
    
  }

  const firstNameValidClass = firstNameIsInValid ? "form-control invalid" : "form-control"
  const lastNameValidClass = lastNameIsInValid ? "form-control invalid" : "form-control"

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
