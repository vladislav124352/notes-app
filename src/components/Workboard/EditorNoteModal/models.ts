import { EditableNoteValues } from '../../../store/reducers/workboardReducer/models/INote';
export interface IEditorNoteModal {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (values: EditableNoteValues) => void;
	initialValues?: EditableNoteValues;
}
export interface IEditorNoteOption extends IEditorNoteModal {
	isEditNote?: boolean;
	initialValues: EditableNoteValues;
}
