import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
    mode: string,
    user: {
        name: string | null, 
        friends: string[] | null
    }
    token: string,
    posts: any[] | null
}

const initialState: InitialState = {
    mode: 'light',
    user: {
        name: '', 
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
        state.user.name = ''
        state.token = ''
    }, // after logout user and token are empty strings. 
    setFriends: (state, action) => {
        if (!state.user) {
            console.error('user friends do not exist')
        } else {
            state.user.friends = action.payload.friends
        }
    }
  }
})