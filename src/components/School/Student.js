import classes from "./Student.module.css";

const Student = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.studenImage}>
        <img
          src={require("./default-user-image.jpeg")}
          alt="student profile pic"
          // width="60"
          // height="60"
        />
      </div>
      <div className={classes.studentDetails}>
        <h3>{props.studentDetails.name}</h3>
        <div className={classes.details}>
          <p>Email: {props.studentDetails.email}</p>
          <p>Company: {props.studentDetails.company}</p>
          <p>Phone: {props.studentDetails.phone}</p>
        </div>
        {/* <p>Geo: {props.studentDetails.phone}</p> */}
      </div>
    </li>
  );
};

export default Student;
