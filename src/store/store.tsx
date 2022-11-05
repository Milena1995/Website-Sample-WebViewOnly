import { configureStore } from "@reduxjs/toolkit";
import SlideModel from "src/models/SlideModel";

export default configureStore({
  reducer: {
    slide: SlideModel,
  },
});
