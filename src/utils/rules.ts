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
