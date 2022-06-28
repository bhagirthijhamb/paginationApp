import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { schoolActions } from "./../store/school-slice";

const useInput = (stateVariable, validateValue) => {
  const dispatch = useDispatch();
  const enteredValue = useSelector((state) => {
    return state.school[stateVariable].value;
  });
  const isTouched = useSelector(
    (state) => state.school[stateVariable].isTouched
  );

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    stateVariable === "nameFilter"
      ? dispatch(schoolActions.setNameFilterValue(event.target.value))
      : dispatch(schoolActions.setTagFilterValue(event.target.value));
  };

  const inputBlurHandler = (event) => {
    stateVariable === "nameFilter"
      ? dispatch(schoolActions.setNameFilterIsTouched())
      : dispatch(schoolActions.setTagFilterIsTouched());
  };

  const reset = () => {
    stateVariable === "nameFilter"
      ? dispatch(schoolActions.setNameFilterValue(""))
      : dispatch(schoolActions.setTagFilterValue(""));

    stateVariable === "nameFilter"
      ? dispatch(schoolActions.setNameFilterNotTouched())
      : dispatch(schoolActions.setTagFilterNotTouched());
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
