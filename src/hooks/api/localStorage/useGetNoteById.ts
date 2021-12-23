import { INote } from "../../../store/reducers/notesReducer/models/INote";

export const useGetNoteById = (id: string) => {
    const defaultNoteObject: INote = { title: '', content: '', id: '', createdDate: ''}
    const request = localStorage.getItem('notes') || '';
    const notes: INote[] = JSON.parse(request);
    let note = notes.find((note) => note.id === id) || defaultNoteObject
    return note;
}