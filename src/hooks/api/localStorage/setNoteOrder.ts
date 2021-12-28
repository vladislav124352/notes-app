import { INote } from '../../../store/reducers/workboardReducer/models/INote';

export const setNoteOrder = () => {
	const request = localStorage.getItem('notes') || '[]';
	const notes: INote[] = JSON.parse(request);
	let order = 1;
	if (!notes.length) return order;
	notes.forEach(() => (order += 1));
	return order;
};
