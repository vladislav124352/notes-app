import { EditableNoteValues } from '../../../store/reducers/workboardReducer/models/INote';

export interface IEditorNoteOption {
	isOpen: boolean;
	onClose: () => void;
	isEditNote?: boolean;
	onSubmit: (...args: any[]) => void;
	initialValues: EditableNoteValues;
}

export interface IEditorNoteModal {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (...args: any[]) => void;
	initialValues?: EditableNoteValues;
}
