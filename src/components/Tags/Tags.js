import { useState } from "react";
import { useDispatch } from "react-redux";
import { schoolActions } from "../../store/school-slice";

import classes from "./Tags.module.css";

const Tags = (props) => {
  const [tag, setTag] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const tagValueChangeHandler = (e) => {
    setTag(e.target.value);
    if (e.target.value) {
      setError(false);
    }
  };

  const addTagHandler = (e) => {
    e.preventDefault();
    if (tag.trim() === "") {
      setError(true);
      setTag("");
      return;
    }
    dispatch(
      schoolActions.updateStudentsDataWithTag({ tag, id: props.studentId })
    );
    setTag("");
  };

  return (
    <form onSubmit={addTagHandler}>
      <input
        type="text"
        placeholder="Add a tag"
        onChange={tagValueChangeHandler}
        value={tag}
      />
      {error && (
        <p className={classes.errorText}>
          Please enter a valid {props.stateVariable} value.
        </p>
      )}
    </form>
  );
};

export default Tags;
