import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: '',
  data: ''
}
const EditorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    }
  }
})

export const { setData } = EditorSlice.actions;
export default EditorSlice.reducer;