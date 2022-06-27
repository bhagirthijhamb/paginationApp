import classes from "./Student.module.css";
import Student from "./Student";
import Card from "./../UI/Card";

const Students = (props) => {
  return (
    <Card>
      <ul>
        {props.studentsData.map((studentDetails) => (
          <Student key={studentDetails.id} studentDetails={studentDetails} />
        ))}
      </ul>
    </Card>
  );
};

export default Students;
