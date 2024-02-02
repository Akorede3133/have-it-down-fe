import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_INITIAL_DATA = () => {
  return {
    "time": new Date().getTime(),
    "blocks": [
      {
        "type": "header",
        "data": {
          "text": "This is my awesome editor!",
          "level": 1
        }
      },
    ]
  }
}

const initialState = {
  title: '',
  data: DEFAULT_INITIAL_DATA(),
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