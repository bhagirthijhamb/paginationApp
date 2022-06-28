import React, { useEffect } from "react";
import classes from "./Filter.module.css";
import useInput from "../../Hooks/useInput";
import { getByDisplayValue } from "@testing-library/dom";

const Filter = (props) => {
  const { value, hasError, inputBlurHandler, valueChangeHandler, reset } =
    useInput(
      `${props.stateVariable}Filter`,
      (value) => value.trim().length !== 0
    );

  const formSubmitHandler = (event) => {
    event.preventDefault();
    reset();
  };

  const clickClearFilterBtnHandler = () => {
    reset();
  };

  return (
    <div className={classes.filterContainer}>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder={props.placeholder}
          onChange={valueChangeHandler}
          onBlur={inputBlurHandler}
          value={value}
        />
        {hasError && (
          <p className={classes.errorText}>
            Please enter a valid {props.stateVariable} value.
          </p>
        )}
      </form>
      <button onClick={clickClearFilterBtnHandler}>
        Clear {props.stateVariable} Filter
      </button>
    </div>
  );
};

export default Filter;
