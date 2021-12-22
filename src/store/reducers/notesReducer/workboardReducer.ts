import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkboardState } from "./models/Workboard";

const initialState: WorkboardState = {
    notes: [],
    errorMessage: ''
}

export const workboardReducer = createSlice({
    name: 'workboard',
    initialState,
    reducers: {
        notesFetchingSuccess(state, action: PayloadAction<string>) {
            state.errorMessage = ''
            state.notes = JSON.parse(action.payload);
        },
        notesFetchingError(state, action: PayloadAction<string>) {
            state.errorMessage = action.payload;
        }
    }
})

export default workboardReducer.reducer;