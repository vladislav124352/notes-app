import { INote } from './INote';

export interface WorkboardState {
	notes: INote[];
	isNotesFound: boolean;
	errorMessage: string;
}
