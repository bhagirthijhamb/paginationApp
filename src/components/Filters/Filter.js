import React from "react";
import { useDispatch } from "react-redux";
import classes from "./Filter.module.css";
import { schoolActions } from "../../store/school-slice";

const Filter = (props) => {
  const dispatch = useDispatch();

  const filterChangeHandler = (event) => {
    dispatch(schoolActions.setNameFilter(event.target.value));
  };

  return (
    <input placeholder={props.placeholder} onChange={filterChangeHandler} />
  );
};

export default Filter;
