type Role = 'User' | 'Admin'

export interface User {
  roles: Role[]
  email: string
  address: string
  name: string
  phone: string
  avatar: string
}
