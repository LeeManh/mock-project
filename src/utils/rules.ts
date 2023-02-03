import * as yup from 'yup'

const handleConfirmPasswordYup = (refString: string) => {
  return yup
    .string()
    .required('Cần nhập xác nhận mật khẩu')
    .min(6, 'Mật khẩu ít nhất 6 ký tự')
    .max(160, 'Mật khẩu nhiều nhất 5 ký tự')
    .oneOf([yup.ref(refString), null], 'Xác nhận mật khẩu không khớp')
}

export const authShema = yup.object({
  email: yup.string().trim().required('Cần nhập email').email('Không đúng định dạng email'),
  password: yup
    .string()
    .trim()
    .required('Cần nhập mật khẩu')
    .min(6, 'Tối thiểu 6 ký tự')
    .max(20, 'Mật khẩu nhiều nhất 20 ký tự'),
  confirm_password: handleConfirmPasswordYup('password')
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
interface TestContextExtended {
  originalValue?: any
}
export const userSchema = yup.object({
  name: yup.string().trim().min(1, 'Độ dài tối thiểu 1').max(160, 'Độ dài tối đa là 160 ký tự'),
  phone: yup
    .string()
    .trim()
    .test('no-leading-zero', 'Só điện thoại bắt đầu bằng số 0', (value, context) => {
      const { originalValue } = context as yup.TestContext & TestContextExtended

      return originalValue && (originalValue as string).startsWith('0')
    })
    .length(10, 'Số điện thoại gồm 10 số'),
  address: yup.string().trim().required('Cần nhập địa chỉ').max(160, 'Độ dài tối đa là 160 ký tự'),
  avatar: yup.string().max(1000, 'Độ dài tối đa là 1000 ký tự'),
  old_password: authShema.fields['password'],
  new_password: authShema.fields['password'],
  confirm_new_password: handleConfirmPasswordYup('new_password')
})
export type UserSchema = yup.InferType<typeof userSchema>
