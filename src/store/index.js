import { configureStore } from "@reduxjs/toolkit";
import schoolSlice from "./school-slice";

import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, school: schoolSlice.reducer },
});

export default store;
