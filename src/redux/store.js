import { configureStore } from "@reduxjs/toolkit";
import editorReducer from './EditorSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    editor: editorReducer,
    user: userReducer
  }
})

export default store;