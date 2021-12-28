import { getNoteById } from '../../../hooks/api/localStorage/getNoteById';
import { AppDispatch } from '../../store';
import { EditableNoteValues, INote } from './models/INote';
import { workboardReducer } from './reducer';

export const fetchNotes = (fetchParameter?: string) => {
	return async (dispatch: AppDispatch) => {
		const request = localStorage.getItem('notes');
		if (request) {
			let notes: INote[] = JSON.parse(request);

			// TODO: вынести в отдельную функцию fetchNotesByName
			if (fetchParameter) {
				const loweredFetchParameter = fetchParameter.toLocaleLowerCase();
				const newNotes = notes.filter((note) => {
					const loweredNoteTitle = note.title.toLocaleLowerCase();
					const loweredNoteContent = note.content.toLocaleLowerCase();
					const includesOfNoteTitle = loweredNoteTitle.includes(loweredFetchParameter);
					const includesOfNoteContent = loweredNoteContent.includes(loweredFetchParameter);
					return includesOfNoteTitle || includesOfNoteContent;
				});
				notes = newNotes;
			}

			dispatch(workboardReducer.actions.notesFetchingSuccess(notes));
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
			const result = JSON.stringify(newNotes);
			localStorage.setItem('notes', result);
			dispatch(fetchNotes());
		}
	};
};

export const dragNote = (selectedNote: INote, changedNote: INote) => {
	return (dispatch: AppDispatch) => {
		if (selectedNote.order === changedNote.order) return false;

		const request = localStorage.getItem('notes');

		if (request) {
			const notes: INote[] = JSON.parse(request);

			const changedNotes = notes.map((note) => {
				if (note.id === changedNote.id) return { ...note, order: selectedNote.order };
				if (note.id === selectedNote.id) return { ...note, order: changedNote.order };
				return note;
			});

			const sortedNotes = [...changedNotes].sort((a, b) => a.order - b.order);
			const result = JSON.stringify(sortedNotes);
			localStorage.setItem('notes', result);
			dispatch(fetchNotes());
		}
	};
};
