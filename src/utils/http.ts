import axios, { AxiosResponse } from 'axios'
import { toast } from 'react-toastify'

import HttpStatusCode from 'constants/httpStatusCode'
import type { ErrorResponse } from 'types/utils.type'
import type { AuthResponse } from 'types/auth.type'
import type { AxiosInstance, AxiosError } from 'axios'
import { clearAuthLS, getAccessTokenLS, saveAccessTokenLS, saveUserLS } from './auth'
import apiConfigs from 'constants/apiConfigs'

class Http {
  instance: AxiosInstance
  private access_token: string

  constructor() {
    this.access_token = getAccessTokenLS()

    this.instance = axios.create({
      baseURL: apiConfigs.baseUrl,
      headers: {
        'Content-type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.access_token) {
          config.headers.Authorization = `Bearer ${this.access_token}`
        }

        return config
      },
      function (error) {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response: AxiosResponse<AuthResponse>) => {
        const { url } = response.config
        if (url === '/login' || url === '/register') {
          const { access_token, user } = response.data.data

          this.access_token = access_token
          saveAccessTokenLS(access_token)
          saveUserLS(user)
        } else if (url === '/logout') {
          this.access_token = ''
          clearAuthLS()
        }

        return response
      },
      function (error: AxiosError<ErrorResponse<unknown>>) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          const messageError = error.response?.data.message || error.message

          toast.error(messageError, { autoClose: 2000 })
        }

        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
