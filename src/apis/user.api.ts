import type { User } from 'types/user.type'
import type { SuccessResponse } from 'types/utils.type'
import http from 'utils/http'

export type BodyUpdateProfile = Partial<Pick<User, 'name' | 'phone' | 'address'>>
export interface BodyUpdatePassword {
  old_password: string
  new_password: string
  confirm_new_password: string
}

const getProfile = () => http.get<SuccessResponse<User>>('get-user-info')

const updateProfile = (body: BodyUpdateProfile) =>
  http.post<SuccessResponse<{ user: User }>>('update-user', { ...body, _method: 'put' })

const uploadAvatar = (avatar: FormData) =>
  http.post<SuccessResponse<User>>(
    'update-user',
    { avatar, _method: 'put' },
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  )

const upadtePassword = (body: BodyUpdatePassword) => http.put<SuccessResponse<User>>('change-password', body)

const userApi = { getProfile, updateProfile, uploadAvatar, upadtePassword }

export default userApi
