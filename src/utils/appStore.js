import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "./feedbackSlice";

const appStore = configureStore({
    reducer: {
        feedback: feedbackReducer,
    }
});

export default appStore;