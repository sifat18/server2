const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    tags: [],
    search: "",
    author: "",
    page:1
};

const filterSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload);
        },
        tagRemoved: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload);

            if (indexToRemove !== -1) {
                state.tags.splice(indexToRemove, 1);
            }
        },
        searched: (state, action) => {
            state.search = action.payload;
        },
        tagRemoveAll: (state, action) => {
            state.tags=action.payload
            },
        searchRemove: (state, action) => {
            console.log('inside')
                state.search = action.payload;
            },
        authorRemove: (state, action) => {
                state.author = '';
            },
        
        authorAdd: (state, action) => {
                state.author = action.payload;
            },
        pageChange: (state, action) => {
                state.page=action.payload;
            },
          },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched,tagRemoveAll,searchRemove,authorRemove,authorAdd,pageChange } = filterSlice.actions;
