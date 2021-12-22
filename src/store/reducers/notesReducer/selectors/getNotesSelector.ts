import { RootState } from "../../../store";

export const getWorkboadStateSelector = (state: RootState) => state.workboard;
export const getNotesSelector = (state: RootState) => state.workboard.notes;