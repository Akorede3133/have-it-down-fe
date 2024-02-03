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
  tags: []
}
const EditorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    updateFeedTags: (state, { payload }) => {
      state.tags = payload;
    }
  }
})

export const { setData, updateFeedTags } = EditorSlice.actions;
export default EditorSlice.reducer;