export interface INote {
	id: number;
	creationDate: number;
	title: string;
	content: string;
}

export type EditableNoteValues = Omit<INote, 'id' | 'creationDate'>;
