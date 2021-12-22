import { AppDispatch } from "../../store";
import { INote } from "./models/INote";
import { workboardReducer } from "./workboardReducer";

export const fetchNotes = () => async (dispatch: AppDispatch) => {
    const request = localStorage.getItem('notes');
    if (request) {
        dispatch(workboardReducer.actions.notesFetchingSuccess(request));
    }
}

export const createNote = (note: INote) => async (dispatch: AppDispatch) => {
    const request = localStorage.getItem('notes');
    let notes = [note];

    if (request) {
        notes = JSON.parse(request);
        notes.push(note);
    }

    const result = JSON.stringify(notes);
    localStorage.setItem('notes', result);
    dispatch(fetchNotes())
}

export const deleteNote = (id: string) => async (dispatch: AppDispatch) => {
    const request = localStorage.getItem('notes');
    if (request) {
        const notes: INote[] = JSON.parse(request);
        const newNotes = notes.filter((note) => note.id !== id);
        const result = JSON.stringify(newNotes);
        localStorage.setItem('notes', result)
        dispatch(fetchNotes())
    }
}

export const editeNote = (newNote: INote) => async (dispatch: AppDispatch) => {
    const request = localStorage.getItem('notes');
    if (request) {
        const notes: INote[] = JSON.parse(request);
        const newNotes = notes.map((note) => note.id === newNote.id ? newNote : note)
        const result = JSON.stringify(newNotes);
        localStorage.setItem('notes', result)
        dispatch(fetchNotes())
    }
}