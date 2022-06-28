import React from "react";
import { useDispatch } from "react-redux";
import { schoolActions } from "../../store/school-slice";

const Filter = (props) => {
  const dispatch = useDispatch();

  const filterChangeHandler = (event) => {
    props.placeholder.includes("name")
      ? dispatch(schoolActions.setNameFilter(event.target.value))
      : dispatch(schoolActions.setTagFilter(event.target.value));
  };

  return (
    <input
      type="text"
      placeholder={props.placeholder}
      onChange={filterChangeHandler}
    />
  );
};

export default Filter;
