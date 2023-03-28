
import { useState } from "react"

const useBasicInput = (checkError) => {

    const [value, setValue] = useState("")
    const [isTouched, setIsTouched] = useState(null)
  
    const valueIsValid = checkError(value)
    const valueIsInValid = !valueIsValid && isTouched
  
  
    const valueChangeHandler = (event) => {
      setValue(event.target.value)
    }
  
    const valueBlurHandler = () => {
      setIsTouched(true)
    }

    const reset = () => {
        setValue("")
        setIsTouched(false)
    }

    return {
        value,
        valueIsInValid,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }
}

export default useBasicInput