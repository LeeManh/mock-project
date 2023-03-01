import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

export type Language = 'en' | 'vn'

interface InitialState {
  language: Language
}

const languageLS = JSON.parse(localStorage.getItem('persist:language') || '')

const initialState: InitialState = {
  language: languageLS !== '' ? (languageLS as InitialState).language : 'vn'
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload
    }
  }
})

export default languageSlice.reducer

export const selectLanguage = (state: RootState) => state.language.language

export const { changeLanguage } = languageSlice.actions
