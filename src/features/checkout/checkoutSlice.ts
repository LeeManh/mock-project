import type { RootState } from 'app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ExtraCartItem } from 'types/cart.type'

interface InitialState {
  name: string
  phone: string
  address: string
  listCheckout: ExtraCartItem[]
}
const initialState: InitialState = {
  name: '',
  phone: '',
  address: '',
  listCheckout: []
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateInforCheckout: (state, action: PayloadAction<InitialState>) => {
      const { address, name, phone, listCheckout } = action.payload

      state.address = address
      state.name = name
      state.phone = phone

      state.listCheckout = listCheckout ?? state.listCheckout
    }
  }
})

export default checkoutSlice.reducer

export const { updateInforCheckout } = checkoutSlice.actions

export const selectInforCheckout = (state: RootState) => state.checkout
