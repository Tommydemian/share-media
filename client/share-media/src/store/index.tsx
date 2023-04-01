import { createSlice } from '@reduxjs/toolkit'
import { InitialState } from '../types'

const initialState: InitialState = {
    mode: 'light',
    user: {
        firstname: '',
        lastname: '', 
        friends: []
    } , 
    token: '',
    posts: []
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMode: (state ) => {
        state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
    setLogins: (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token

    },
    setLogout: (state, action) => {
        state.user.firstname = ''
        state.user.lastname = ''
        state.token = ''
    }, // after logout user and token are empty strings. 
    setFriends: (state, action) => {
        if (!state.user) {
            console.error('user friends do not exist')
        } else {
            state.user.friends = action.payload.friends
        }
    },
    setPosts: (state, action) => {
        state.posts = action.payload.posts
    }, 
    setPost: (state, action) => {
      const updatedPosts = (state.posts ?? []).map(post => {
        if (post._id === action.payload.post._id ){return action.payload.post}
        return post
      })
          state.posts = updatedPosts
    }
  }
});

export const { setMode, setFriends, setLogins, setLogout, setPost, setPosts } = authSlice.actions;