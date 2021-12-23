import { INote } from "../../../store/reducers/notesReducer/models/INote";

export const useGetNoteById = (id: number) => {
    const defaultNoteObject: INote = { title: '', content: '', id: 0, createdDate: ''}
    const request = localStorage.getItem('notes') || '';
    const notes: INote[] = JSON.parse(request);
    let note = notes.find((note) => note.id === id) || defaultNoteObject
    return note;
}