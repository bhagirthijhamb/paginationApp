import classes from "./Student.module.css";

const Student = (props) => {
  return (
    <li>
      <div>
        <img
          src={require("./default-user-image.jpeg")}
          alt="student profile pic"
          width="60"
          height="60"
        />
      </div>
      <div>
        <h3>{props.studentDetails.name}</h3>
        <p>Email: {props.studentDetails.email}</p>
        <p>Company: {props.studentDetails.company}</p>
        <p>Phone: {props.studentDetails.phone}</p>
        {/* <p>Geo: {props.studentDetails.phone}</p> */}
      </div>
    </li>
  );
};

export default Student;
