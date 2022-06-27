import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import Layout from "./components/Layout/Layout";
import Students from "./components/School/Students";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";
import { fetchStudentData } from "./store/school-slice";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [studentsData, setStudentsData] = useState([]);
  // const [notification, setNotification] = useState(null);
  const dispatch = useDispatch();

  const notification = useSelector((state) => state.ui.notification);
  const studentsData = useSelector((state) => state.school.studentsData);

  useEffect(() => {
    // *************-------Redux Option 1 form inside component--------***********
    // const fetchStudentData = async () => {
    //   setIsLoading(true);
    //   // setNotification({
    //   //   status: "pending",
    //   //   title: "Fetching...",
    //   //   message: "Fetching student data.",
    //   // });
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "pending",
    //       title: "Fetching...",
    //       message: "Fetching student data.",
    //     })
    //   );
    //   setError(null);
    //   try {
    //     const response = await fetch(
    //       "https://jsonplaceholder.typicode.com/users"
    //     );
    //     if (!response.ok) {
    //       throw new Error("Request failed!");
    //     }
    //     const data = await response.json();
    //     const loadedStudentData = [];
    //     for (const item of data) {
    //       loadedStudentData.push({
    //         id: item.id,
    //         name: item.name,
    //         email: item.email,
    //         company: item.company.name,
    //         phone: item.phone,
    //         geo: item.address.geo,
    //       });
    //     }
    //     setStudentsData(loadedStudentData);
    //     // setNotification({
    //     //   status: "success",
    //     //   title: "Success!",
    //     //   message: "Fetched student data successfully",
    //     // });
    //     dispatch(
    //       uiActions.showNotification({
    //         status: "success",
    //         title: "Success!",
    //         message: "Fetched student data successfully",
    //       })
    //     );
    //   } catch (error) {
    //     setError(error.massage || "Something went wrong");
    //     console.log("error", error);
    //     // setNotification({
    //     //   status: "error",
    //     //   title: "Error!",
    //     //   // message: "Fetching student data failed.",
    //     //   message: error.message || "Something went wrong",
    //     // });
    //     dispatch(
    //       uiActions.showNotification({
    //         status: "error",
    //         title: "Error!",
    //         // message: "Fetching student data failed.",
    //         message: error.message || "Something went wrong",
    //       })
    //     );
    //   }
    //   setIsLoading(false);
    // };
    // fetchStudentData();

    // *************-------Redux Option 1 using custom action creator--------***********
    dispatch(fetchStudentData());
  }, [dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isLoading ? <p>Loading</p> : <Students studentsData={studentsData} />}
        {error && <p>Something went wrong</p>}
      </Layout>
    </Fragment>
  );
}

export default App;
