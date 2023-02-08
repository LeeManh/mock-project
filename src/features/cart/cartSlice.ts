import type { ExtraCartItem } from 'types/cart.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

interface InitialState {
  listCart: ExtraCartItem[]
  isCheckAll: boolean
  numberChecked: number
}
const initialState: InitialState = {
  listCart: [],
  isCheckAll: false,
  numberChecked: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setListCart: (state, action: PayloadAction<ExtraCartItem[]>) => {
      state.listCart = action.payload
    },
    toggleCheckItemCart: (state, action: PayloadAction<number>) => {
      const index = action.payload
      const itemCart = state.listCart[index]

      itemCart.checked = !itemCart.checked

      const numberItemCartChecked = state.listCart.reduce((sum, item) => {
        return item.checked ? (sum += 1) : sum
      }, 0)
      state.numberChecked = numberItemCartChecked
      state.isCheckAll = numberItemCartChecked === state.listCart.length
    },
    handleCheckAllCart: (state) => {
      state.listCart = state.listCart.map((item) => ({ ...item, checked: !state.isCheckAll }))

      const numberItemCartChecked = state.listCart.reduce((sum, item) => {
        return item.checked ? (sum += 1) : sum
      }, 0)
      state.numberChecked = numberItemCartChecked
      state.isCheckAll = numberItemCartChecked === state.listCart.length
    }
  }
})

export default cartSlice.reducer

export const { setListCart, toggleCheckItemCart, handleCheckAllCart } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart
