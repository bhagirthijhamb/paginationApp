import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const schoolSlice = createSlice({
  name: "school",
  initialState: {
    studentsData: [],
    nameFilter: { value: "", isTouched: false },
    tagFilter: { value: "", isTouched: false },
  },
  reducers: {
    setStudentsData(state, action) {
      state.studentsData = action.payload;
    },
    setNameFilterValue(state, action) {
      state.nameFilter.value = action.payload;
    },
    setTagFilterValue(state, action) {
      state.tagFilter.value = action.payload;
    },
    setNameFilterIsTouched(state) {
      state.nameFilter.isTouched = true;
    },
    setTagFilterIsTouched(state) {
      state.tagFilter.isTouched = true;
    },
    setNameFilterNotTouched(state) {
      state.nameFilter.isTouched = false;
    },
    setTagFilterNotTouched(state) {
      state.tagFilter.isTouched = false;
    },
    updateStudentsDataWithTag(state, action) {
      const updatedStudents = [];
      const updatedTags = [];
      state.studentsData.forEach((student) => {
        if (student.id === action.payload.id) {
          updatedTags.push(action.payload.tag);
          student.tags = student.tags.concat(updatedTags);
        }
        updatedStudents.push(student);
      });
      state.studentsData = updatedStudents;
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
          tags: [],
        });
      }

      return loadedStudentData;
    };

    try {
      const studentsData = await fetchData();
      dispatch(schoolActions.setStudentsData(studentsData));
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
