import { useState } from "react"


const useInput = (checkValue) => {
    const [enteredValue, setEnteredValue] = useState("")
    const [isTouch, setIsTouch] = useState(null)

    const enteredValueIsValid = checkValue(enteredValue)
    const enteredValueIsInvalid = !enteredValueIsValid && isTouch

    const changeValueHandler = (event) => {
        setEnteredValue(event.target.value)
    } 

    const changeBlurHandler = (event) => {
        setIsTouch(true)
    } 

    const reset = () => {
        setIsTouch(false)
    }

    return {
        enteredValueIsInvalid,
        enteredValue,
        isTouch,
        changeValueHandler,
        changeBlurHandler,
        reset,
    }
}