import { useState } from "react";
import { useDispatch } from "react-redux";
import { schoolActions } from "../../store/school-slice";

const Tags = (props) => {
  const [tag, setTag] = useState("");
  const dispatch = useDispatch();

  const tagValueChangeHandler = (e) => {
    setTag(e.target.value);
  };

  const addTagHandler = (e) => {
    e.preventDefault();
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
    </form>
  );
};

export default Tags;
