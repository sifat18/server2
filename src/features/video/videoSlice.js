import { getVideo, updateLike, updateUnLike } from "./videoAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
    const video = await getVideo(id);
    return video;
});
export const likePost = createAsyncThunk("video/likePost", async ({id,likes}) => {
    console.log(id,likes)
    const video = await updateLike(id,likes+1);
    return video
});
export const unlikePost = createAsyncThunk("video/unlikePost", async ({id,unlikes}) => {
    console.log(id,unlikes)
    const video = await updateUnLike(id,unlikes-1);
    return video
});

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        addlikes:(state,action)=>{
        state.video.likes=action.payload+1

    }},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.video = action.payload;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.video = {};
                state.isError = true;
                state.error = action.error?.message;
            })   
            .addCase(likePost.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(likePost.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.video.likes = action.payload;
            })
            .addCase(likePost.rejected, (state, action) => {
                state.isLoading = false;
                // state.video = {};
                state.isError = true;
                state.error = action.error?.message;
            })
            .addCase(unlikePost.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(unlikePost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.video.unlikes = action.payload;
            })
            .addCase(unlikePost.rejected, (state, action) => {
                state.isLoading = false;
                // state.video = {};
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default videoSlice.reducer;
export const { addlikes } = videoSlice.actions;

