import { getNoteById } from '../../../hooks/api/localStorage/getNoteById';
import { AppDispatch } from '../../store';
import { EditableNoteValues, INote } from './models/INote';
import { workboardReducer } from './reducer';

export const fetchNotes = () => {
	return async (dispatch: AppDispatch) => {
		const request = localStorage.getItem('notes');
		if (request) {
			dispatch(workboardReducer.actions.notesFetchingSuccess(request));
		}
	};
};

export const createNote = (note: INote) => {
	return async (dispatch: AppDispatch) => {
		const request = localStorage.getItem('notes');
		let notes = [note];

		if (request) {
			notes = JSON.parse(request);
			notes.push(note);
		}

		const result = JSON.stringify(notes);
		localStorage.setItem('notes', result);
		dispatch(fetchNotes());
	};
};

export const deleteNote = (id: number) => {
	return async (dispatch: AppDispatch) => {
		const request = localStorage.getItem('notes');
		if (request) {
			const notes: INote[] = JSON.parse(request);
			const newNotes = notes.filter((note) => note.id !== id);
			const result = JSON.stringify(newNotes);
			localStorage.setItem('notes', result);
			dispatch(fetchNotes());
		}
	};
};

export const editeNote = (id: number, changes: EditableNoteValues) => {
	return async (dispatch: AppDispatch) => {
		const request = localStorage.getItem('notes');
		if (request) {
			const notes: INote[] = JSON.parse(request);
			const note = getNoteById(id);
			const newNote = { ...note, ...changes };
			const newNotes = notes.map((note) => (note.id === newNote.id ? newNote : note));
			const resultArray = JSON.stringify(newNotes);
			localStorage.setItem('notes', resultArray);
			dispatch(fetchNotes());
		}
	};
};
