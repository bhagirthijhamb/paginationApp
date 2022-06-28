import { useSelector } from "react-redux";
import Student from "./Student";

const Students = (props) => {
  const nameFilter = useSelector((state) => state.school.nameFilter);
  const tagFilter = useSelector((state) => state.school.tagFilter);

  const nameFilteredStudents = props.studentsData.filter(
    (student) =>
      student.name.toLowerCase().indexOf(nameFilter.toLowerCase()) !== -1
  );

  const tagFilteredStudents = nameFilteredStudents.filter((student) => {
    let tagsString = "";

    if (student.tags.length !== 0) {
      tagsString = student.tags.reduce((acc, tag) => {
        acc = acc + tag;
        return acc;
      }, "");
    }
    return tagsString.toLowerCase().indexOf(tagFilter.toLowerCase()) !== -1;
  });

  return (
    <ul>
      {tagFilteredStudents.map((studentDetails) => (
        <Student key={studentDetails.id} studentDetails={studentDetails} />
      ))}
    </ul>
  );
};

export default Students;
