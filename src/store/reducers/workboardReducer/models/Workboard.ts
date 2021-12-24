import { INote } from "./INote";

export interface WorkboardState {
    notes: INote[];
    errorMessage: string;
}