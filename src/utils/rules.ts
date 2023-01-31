import * as yup from 'yup'

export const authShema = yup.object({
  email: yup.string().trim().required('Cần nhập email').email('Không đúng định dạng email'),
  password: yup
    .string()
    .trim()
    .required('Cần nhập mật khẩu')
    .min(6, 'Tối thiểu 6 ký tự')
    .max(20, 'Mật khẩu nhiều nhất 20 ký tự'),
  confirm_password: yup
    .string()
    .required('Cần nhập xác nhận mật khẩu')
    .min(6, 'Tối thiểu 6 ký tự')
    .max(20, 'Mật khẩu nhiều nhất 20 ký tự')
    .oneOf([yup.ref('password'), null], 'Xác nhận mật khẩu không khớp')
})
export type AuthSchema = yup.InferType<typeof authShema>

export const filterSchema = yup.object({
  price_min: yup.string().test({
    name: 'price-not-allowed',
    message: 'Giá không phù hợp',
    test: function (price_min) {
      const { price_max } = this.parent

      if (price_min !== '' && price_max !== '') {
        return Number(price_max) >= Number(price_min)
      }
      return price_min !== '' || price_max !== ''
    }
  }),
  price_max: yup.string().test({
    name: 'price-not-allowed',
    message: 'Giá không phù hợp',
    test: function (price_max) {
      const { price_min } = this.parent
      if (price_min !== '' && price_max !== '') {
        return Number(price_max) >= Number(price_min)
      }
      return price_min !== '' || price_max !== ''
    }
  })
})
export type FilterSchema = yup.InferType<typeof filterSchema>
