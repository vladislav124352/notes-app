export interface EditableNoteValues {
	title: string;
	content: string;
}
export interface INote extends EditableNoteValues {
	id: number;
	creationDate: number;
}
