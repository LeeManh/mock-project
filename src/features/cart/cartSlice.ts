import type { ExtraCartItem } from 'types/cart.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

interface InitialState {
  listCart: ExtraCartItem[]
  listItemChecked: ExtraCartItem[]
  isCheckAll: boolean
  numberChecked: number
}
const initialState: InitialState = {
  listCart: [],
  listItemChecked: [],
  isCheckAll: false,
  numberChecked: 0
}

const updateState = (state: RootState['cart']) => {
  const numberItemCartChecked = state.listCart.reduce((sum, item) => {
    return item.checked ? (sum += 1) : sum
  }, 0)
  state.listItemChecked = state.listCart.filter((item) => item.checked)

  state.numberChecked = numberItemCartChecked
  state.isCheckAll = numberItemCartChecked === state.listCart.length
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setListCart: (state, action: PayloadAction<ExtraCartItem[]>) => {
      state.listCart = action.payload

      updateState(state)
    },
    toggleCheckItemCart: (state, action: PayloadAction<number>) => {
      const index = action.payload
      const itemCart = state.listCart[index]

      itemCart.checked = !itemCart.checked

      updateState(state)
    },
    handleCheckAllCart: (state) => {
      state.listCart = state.listCart.map((item) => ({ ...item, checked: !state.isCheckAll }))

      updateState(state)
    }
  }
})

export default cartSlice.reducer

export const { setListCart, toggleCheckItemCart, handleCheckAllCart } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart
