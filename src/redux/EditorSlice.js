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
        },
        
      },
      {
        "type" : "image",
        "data" : {
            "file": {
                "url" : "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg"
            },
            "caption" : "Roadster // tesla.com",
            "withBorder" : false,
            "withBackground" : false,
            "stretched" : true
        }
    }
    ]
  }
}

const initialState = {
  title: '',
  data: DEFAULT_INITIAL_DATA(),
  tags: [],
  publish: false
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
    },
    showPublish: (state) => {
      state.publish = true;
    },
    hidePublish: (state) => {
      state.publish = false;
    },
    updateTitle: (state, { payload }) => {
      state.title = payload;
    }
  }
})

export const { setData, updateFeedTags, showPublish, hidePublish, updateTitle } = EditorSlice.actions;
export default EditorSlice.reducer;