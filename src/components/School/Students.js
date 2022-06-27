import classes from "./Student.module.css";
import { useSelector } from "react-redux";
import Student from "./Student";
import Card from "./../UI/Card";
import Filter from "../Filters/Filter";

const Students = (props) => {
  const nameFilter = useSelector((state) => state.school.nameFilter);
  const nameFilteredStudents = props.studentsData.filter(
    (student) =>
      student.name.toLowerCase().indexOf(nameFilter.toLowerCase()) !== -1
  );
  return (
    <Card>
      <Filter placeholder="Search by name" filterName="nameFilter" />
      <ul>
        {/* {props.studentsData.map((studentDetails) => (
          <Student key={studentDetails.id} studentDetails={studentDetails} />
        ))} */}

        {nameFilteredStudents.map((studentDetails) => (
          <Student key={studentDetails.id} studentDetails={studentDetails} />
        ))}
      </ul>
    </Card>
  );
};

export default Students;
