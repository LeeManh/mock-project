import type { User } from 'types/user.type'

export const saveAccessTokenLS = (access_token: string) => localStorage.setItem('access_token', access_token)
export const clearAccessTokenLS = () => localStorage.removeItem('access_token')
export const getAccessTokenLS = () => localStorage.getItem('access_token') || ''

export const saveUserLS = (user: User) => localStorage.setItem('user', JSON.stringify(user))
export const clearUserLS = () => localStorage.removeItem('user')
export const getUserLS = () => {
  const userString = localStorage.getItem('user')
  return userString ? JSON.parse(userString) : null
}

export const clearAuthLS = () => {
  clearAccessTokenLS()
  clearUserLS()
}
