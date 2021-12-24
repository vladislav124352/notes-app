import { INote } from '../../../store/reducers/workboardReducer/models/INote';

export const getNoteById = (id: number) => {
	const defaultNoteObject: INote = { title: '', content: '', id: 0, creationDate: 0 };
	const request = localStorage.getItem('notes') || '';
	const notes: INote[] = JSON.parse(request);
	let note = notes.find((note) => note.id === id) || defaultNoteObject;
	return note;
};
