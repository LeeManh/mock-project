import apiConfigs from 'constants/apiConfigs'
import axios from 'axios'
import type { AxiosError } from 'axios'

import HttpStatusCode from 'constants/httpStatusCode'

export function formatCurrency(currency: number) {
  return new Intl.NumberFormat('de-DE').format(currency)
}

export function formatNumberToSocialStyle(value: number) {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1
  })
    .format(value)
    .replace('.', ',')
    .toLowerCase()
}

export function objectKeys<Obj extends {}>(obj: Obj): (keyof Obj)[] {
  return Object.keys(obj) as (keyof Obj)[]
}

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}

export function isAxiosUnprocessableEntityError<T>(error: unknown): error is AxiosError<T> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}

export function getImageUrl(url: string) {
  return apiConfigs.imageUrl + url
}

export function getPriceAfterSale(price: number, percentSale: number) {
  return price - (percentSale / 100) * price
}

type PickByValue<T, V> = Pick<T, { [K in keyof T]: T[K] extends V ? K : never }[keyof T]>
type Entries<T> = {
  [K in keyof T]: [keyof PickByValue<T, T[K]>, T[K]]
}[keyof T][]

export function objectEntries<T extends Record<string, any>>(obj: T): Entries<T> {
  return Object.entries(obj) as Entries<T>
}
