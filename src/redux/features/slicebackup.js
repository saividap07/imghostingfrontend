import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk('fetchposts', async () => {
  const response = await axios.get('http://localhost:8000/api/post');
  return response.data;
});

export const addpost = createAsyncThunk('addpost', async (data) => {
  const { title, description, photopath } = data;
  const formdata = new FormData();
  formdata.append('userid', 3);
  formdata.append('title', title);
  formdata.append('description', description);

  photopath.forEach((img) => {
    formdata.append('photopath[]', img);
  });

  const response = await axios.post('http://localhost:8000/api/post', formdata, {
    headers: { 'content-type': 'multipart/form-data' }
  }).catch((error) => {
    console.error('Error:', error);
  });

  console.log(response);
  return response.data;
});

export const fetchParticularPost = createAsyncThunk('fetchparticularpost', async (id) => {
  console.log('id:', id);
  const response = await axios.get('http://localhost:8000/api/post/' + id);
  return response.data;
});

export const addlike = createAsyncThunk('addlike', async (data) => {
  const user_id = data.userId;
  const post_id = data.postId;
  const formdata = new FormData();
  formdata.append('user_id', user_id);
  formdata.append('post_id', post_id);
  const response = await axios.post('http://localhost:8000/api/like', formdata);
  console.log(response);
  return response.data;
});

export const fetchLikes = createAsyncThunk('fetchLikes', async (id) => {
  const user_id = id;
  const pData = {
    'user_id': user_id,
  };
  const response = await axios.post('http://localhost:8000/api/fetchlikes', pData);
  console.log('hiii', response.data);
  return response.data;
});


export const getPostsForUser = createAsyncThunk('getPostsForUser',async(userId)=>{
    console.log("userId",userId);
    const response = await axios.get('http://localhost:8000/api/getPostsForUser/'+userId);
    return response.data;
})


const posts = createSlice({
  name: 'posts',
  initialState: {
    title: '',
    description: '',
    photopath: [],
    posts: [],
    detailPost: {},
    likedPosts: [],
    searchQuery: '',
    getPostsForUser:[]
  },
  reducers: {
    setTitle: (state, payload) => {
      state.title = payload.payload;
    },
    setDescription: (state, payload) => {
      state.description = payload.payload;
    },
    setPhoto: (state, payload) => {
      state.photopath = payload.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [fetchParticularPost.fulfilled]: (state, action) => {
      state.detailPost = action.payload;
    },
    [getPostsForUser.fulfilled]:(state,action)=>{
        state.getPostsForUser = action.payload;
    },
    [addpost.fulfilled]: () => {
      alert("Post Added");
      window.location.href = '/';
    },
    [addlike.fulfilled]: (state, action) => {
      state.likedPosts = action.payload;
    },
    [fetchLikes.fulfilled]: (state, action) => {
      state.likedPosts = action.payload;
            console.log('hiii');
        }

    }
});

// export const {setTitle,setDescription,setPhoto} = posts.actions;
// export default posts.reducer;
// export const { setSearchQuery } = setSearchQuery.actions;


export const {
    setTitle,
    setDescription,
    setPhoto,
    setSearchQuery, // Export setSearchQuery reducer
  } = posts.actions;
  
  export default posts.reducer;