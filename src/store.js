import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/conterSlice";

export default configureStore({
  reducer: { counter: counterReducer },
});
