import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'

import authReducer from 'features/auth/authSlice'
import cartReducer from 'features/cart/cartSlice'
import checkoutReducer from 'features/checkout/checkoutSlice'
import languageReducer from 'features/language/language.slice'

const checkoutPersistConfig = {
  key: 'checkout',
  storage: storage,
  blacklist: ['checkout']
}

const languagePersistConfig = {
  key: 'language',
  storage: storage,
  whitelist: ['language']
}

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  checkout: persistReducer(checkoutPersistConfig, checkoutReducer),
  language: persistReducer(languagePersistConfig, languageReducer)
})

export default rootReducer
