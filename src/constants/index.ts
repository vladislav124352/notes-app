import { EditableNoteValues, INote } from '../store/reducers/workboardReducer/models/INote';

export const defaultNoteObject: INote = {
	id: 0,
	order: 0,
	title: '',
	content: '',
	creationDate: 0,
};

export const defaultNoteValues: EditableNoteValues = {
	title: '',
	content: '',
};
