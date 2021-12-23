type InitialValues = {
    title: string;
    content: string;
}

export interface IEditorNoteModal {
    isOpen: boolean;
    onClose: (...args: any[]) => void;
    onCancel: () => void;
    initialValues: InitialValues;
}