import type { AuthResponse } from 'types/auth.type'
import http from 'utils/http'

const registerAccount = (body: { email: string; password: string }) => http.post<AuthResponse>('/register', body)
const loginAccount = (body: { email: string; password: string }) => http.post<AuthResponse>('/login', body)
const logoutAccount = () => http.post('/logout')

const authApis = {
  registerAccount,
  loginAccount,
  logoutAccount
}

export default authApis
