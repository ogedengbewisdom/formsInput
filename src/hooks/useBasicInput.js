
import { useReducer } from "react"

const initalState = {
    value: "",
    isTouched: null
}
const inputValueFunc = (state,action) => {
    if ( action.type === "INPUT" ) {
        return { value: action.value, isTouched: true}
    } else if ( action.type === "BLUR" ) {
        return { value: state.value, isTouched: true }
    } else if ( action.type === "RESET" ) {
        return { value: "", isTouched: null}
    } else {
        return initalState
    }
}

const useBasicInput = (checkError) => {

    const [valueState, dispatchValue] = useReducer(inputValueFunc, initalState)

    // const [value, setValue] = useState("")
    // const [isTouched, setIsTouched] = useState(null)
  
    const valueIsValid = checkError(valueState.value)
    const valueIsInValid = !valueIsValid && valueState.isTouched
  
  
    const valueChangeHandler = (event) => {
        dispatchValue({type: "INPUT", value: event.target.value})
    }
  
    const valueBlurHandler = () => {
        dispatchValue({type: "BLUR"})
    }

    const reset = () => {
        dispatchValue({type: "RESET"})
    }

    return {
        value: valueState.value,
        valueIsValid,
        valueIsInValid,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }
}

export default useBasicInput