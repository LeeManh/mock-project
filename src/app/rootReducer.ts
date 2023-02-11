import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'

import authReducer from 'features/auth/authSlice'
import cartReducer from 'features/cart/cartSlice'
import checkoutReducer from 'features/checkout/checkoutSlice'

const checkoutPersistConfig = {
  key: 'checkout',
  storage: storage,
  blacklist: ['checkout']
}

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  checkout: persistReducer(checkoutPersistConfig, checkoutReducer)
})

export default rootReducer
