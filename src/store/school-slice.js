import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const schoolSlice = createSlice({
  name: "school",
  initialState: {
    studentsData: [],
    nameFilter: "",
  },
  reducers: {
    setSchoolData(state, action) {
      state.studentsData = action.payload;
    },
    setNameFilter(state, action) {
      state.nameFilter = action.payload;
    },
  },
});

export const fetchStudentData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Fetching...",
        message: "Fetching student data.",
      })
    );
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Request failed!!");
      }

      const data = await response.json();
      const loadedStudentData = [];
      for (const item of data) {
        loadedStudentData.push({
          id: item.id,
          name: item.name,
          email: item.email,
          company: item.company.name,
          phone: item.phone,
          geo: item.address.geo,
        });
      }

      return loadedStudentData;
    };

    try {
      const schoolData = await fetchData();
      dispatch(schoolActions.setSchoolData(schoolData));
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Fetched student data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error :(",
          message: error.message || "Fetching cart data failed!",
        })
      );
    }
  };
};

export const schoolActions = schoolSlice.actions;

export default schoolSlice;
