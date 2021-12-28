export interface INote {
	id: number;
	order: number;
	title: string;
	content: string;
	creationDate: number;
}

export type EditableNoteValues = Omit<INote, 'id' | 'creationDate' | 'order'>;
