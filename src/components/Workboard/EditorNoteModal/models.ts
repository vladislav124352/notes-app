export interface IEditorNoteValues {
	title: string;
	content: string;
}

export interface INoteEditor {
	isOpen: boolean;
	onClose: () => void;
	isEditNote?: boolean;
	onSubmit: (...args: any[]) => void;
	initialValues: IEditorNoteValues;
}

export interface IEditorNoteModal {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (...args: any[]) => void;
	initialValues?: IEditorNoteValues;
}
