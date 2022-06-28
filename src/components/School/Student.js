import { useState } from "react";
import classes from "./Student.module.css";
import Tags from "./../Tags/Tags";

const Student = (props) => {
  const [isActive, setIsActive] = useState(false);

  const accordionButtonClickHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <li>
      <div className={classes.item}>
        <div className={classes.studenImage}>
          <img
            src={require("./default-user-image.jpeg")}
            alt="student profile pic"
          />
        </div>
        <div className={classes.studentDetails}>
          <h3>{props.studentDetails.name}</h3>
          <div className={classes.details}>
            <p>Email: {props.studentDetails.email}</p>
            <p>Company: {props.studentDetails.company}</p>
            <p>Phone: {props.studentDetails.phone}</p>
            {isActive && (
              <div className={classes.geoDetails}>
                <p>{props.studentDetails.geo.lat}</p>
                <p>{props.studentDetails.geo.lng}</p>
              </div>
            )}
            {/* Display tags */}
            <p className={classes.studentTags}>
              {props.studentDetails.tags.map((tag) => (
                <span className={classes.tagSpan} key={tag}>
                  {tag}
                </span>
              ))}
            </p>
            <Tags studentId={props.studentDetails.id} />
          </div>
        </div>
        <div className={classes.accordionButton}>
          <button onClick={accordionButtonClickHandler}>
            {isActive ? "-" : "+"}
          </button>
        </div>
      </div>
    </li>
  );
};

export default Student;
