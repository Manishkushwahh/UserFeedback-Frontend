import { createSlice } from "@reduxjs/toolkit";

const feedbackSlice = createSlice({
    name: "feedback",
    initialState: null,
    reducers: {
        addFeedback: (state, action) => {
            return action.payload;
        }
    }
});

export const {addFeedback} = feedbackSlice.actions;
export default feedbackSlice.reducer;