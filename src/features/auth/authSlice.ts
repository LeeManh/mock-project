import { getAccessTokenLS, getUserLS } from 'utils/auth'
import { createSlice } from '@reduxjs/toolkit'
import type { User } from 'types/user.type'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'app/store'

interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

const initialState: AuthState = {
  isAuthenticated: Boolean(getAccessTokenLS()),
  user: getUserLS()
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginOrRegisterSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuthenticated = true
    },
    logoutSuccess: (state) => {
      state.user = null
      state.isAuthenticated = false
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    }
  }
})

export const selectAuth = (state: RootState) => state.auth

export const { loginOrRegisterSuccess, logoutSuccess, updateUser } = authSlice.actions

export default authSlice.reducer
