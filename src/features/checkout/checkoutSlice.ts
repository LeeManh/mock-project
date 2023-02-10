import type { User } from 'types/user.type'
import { getUserLS } from 'utils/auth'
import type { RootState } from 'app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const userLS: User = getUserLS()

interface InitialState {
  name: string
  phone: string
  address: string
}
const initialState: InitialState = {
  name: userLS?.name || '',
  phone: userLS?.phone || '',
  address: userLS?.address || ''
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateInforCheckout: (state, action: PayloadAction<InitialState>) => {
      const { address, name, phone } = action.payload

      state.address = address
      state.name = name
      state.phone = phone
    }
  }
})

export default checkoutSlice.reducer

export const { updateInforCheckout } = checkoutSlice.actions

export const selectInforCheckout = (state: RootState) => state.checkout
