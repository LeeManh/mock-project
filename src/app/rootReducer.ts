import { combineReducers } from '@reduxjs/toolkit'
import authReducer from 'features/auth/authSlice'
import cartReducer from 'features/cart/cartSlice'
import checkoutReducer from 'features/checkout/checkoutSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  checkout: checkoutReducer
})

export default rootReducer
