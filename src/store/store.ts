import { combineReducers, configureStore } from "@reduxjs/toolkit";
import workboardReducer from "./reducers/notesReducer/workboardReducer";

const rootReducer = combineReducers({
    workboard: workboardReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];