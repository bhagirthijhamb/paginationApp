import { useDispatch, useSelector } from "react-redux";

import Card from "./../UI/Card";
import Filters from "./../Filters/Filters";
import StudentList from "./../School/StudentList";

const Wrapper = () => {
  const studentsData = useSelector((state) => state.school.studentsData);

  return (
    <Card>
      <Filters />
      <StudentList studentsData={studentsData} />
    </Card>
  );
};

export default Wrapper;
