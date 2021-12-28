import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INote } from './models/INote';
import { WorkboardState } from './models/Workboard';

const initialState: WorkboardState = {
	notes: [],
	isNotesFound: true,
	errorMessage: '',
};

export const workboardReducer = createSlice({
	name: 'workboard',
	initialState,
	reducers: {
		notesFetchingSuccess(state, action: PayloadAction<INote[]>) {
			state.errorMessage = '';
			state.isNotesFound = true;
			state.notes = action.payload;
		},
		notesFetchingError(state, action: PayloadAction<string>) {
			state.errorMessage = action.payload;
		},
		noNotesFound(state) {
			state.notes = [];
			state.isNotesFound = false;
		},
	},
});

export default workboardReducer.reducer;
