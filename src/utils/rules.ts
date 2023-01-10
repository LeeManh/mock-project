import * as yup from 'yup'

export const authShema = yup.object({
  email: yup.string().trim().required('Cần nhập mục này').email('Không đúng định dạng email'),

  password: yup.string().trim().required('Cần nhập mục này').min(6, 'Tối thiểu 6 ký tự')
})

export type AuthSchema = yup.InferType<typeof authShema>
