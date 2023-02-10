import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import * as S from './InforUser.styled'
import colors from 'constants/colors'
import CustomModal from 'components/CustomModal'
import { ModalButton, ModalFooter } from 'components/CustomModal/CustomModal.styled'
import InputText from 'components/InputText'
import InputNumber from 'components/InputNumber'
import { userSchema } from 'utils/rules'
import { useAppDispatch, useAppSelector } from 'hooks/useApp'
import { selectInforCheckout, updateInforCheckout } from 'features/checkout/checkoutSlice'
import { selectAuth } from 'features/auth/authSlice'

const inforSchema = userSchema.pick(['address', 'phone', 'name'])
type InforSchema = yup.InferType<typeof inforSchema>

export default function InforUser() {
  const inforCheckout = useAppSelector(selectInforCheckout)
  const { user } = useAppSelector(selectAuth)
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    clearErrors,
    control,
    formState: { errors }
  } = useForm<InforSchema>({
    resolver: yupResolver(inforSchema),
    defaultValues: {
      address: '',
      name: '',
      phone: ''
    }
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    clearErrors()
  }

  const handleOk = (data: InforSchema) => {
    dispatch(updateInforCheckout(data as any))

    handleCancel()
  }

  useEffect(() => {
    if (user) {
      dispatch(
        updateInforCheckout({
          name: user.name,
          address: user.address,
          phone: user.phone
        })
      )
    }
  }, [user, dispatch])

  return (
    <S.Container>
      <S.Header />
      <S.Content>
        <S.ContentTitle>
          <FontAwesomeIcon icon={faLocationDot} style={{ color: `${colors.orange}`, fontSize: '2rem' }} />
          Địa Chỉ Nhận Hàng
        </S.ContentTitle>

        <S.ContentInforUser>
          <S.NameAddress>
            {inforCheckout.name} {inforCheckout.phone}
          </S.NameAddress>
          <S.Address>{inforCheckout.address}</S.Address>
          <S.ChangeInfor onClick={showModal}>Thay Đổi</S.ChangeInfor>
        </S.ContentInforUser>
      </S.Content>

      <CustomModal
        title={`Thông tin địa chỉ`}
        open={isModalOpen}
        closable={false}
        footer={
          <ModalFooter>
            <ModalButton typeBtn='default' onClick={handleCancel} style={{ textTransform: 'capitalize' }}>
              Trở lại
            </ModalButton>
            <ModalButton typeBtn='primary' onClick={handleSubmit(handleOk)} style={{ textTransform: 'capitalize' }}>
              Hoàn Thành
            </ModalButton>
          </ModalFooter>
        }
      >
        <S.FormModal>
          <InputText placeholder='Họ và tên' name='name' register={register} errorMessage={errors.name?.message} />
          <Controller
            control={control}
            name='phone'
            render={({ field }) => {
              return <InputNumber {...field} placeholder='Số điện thoại' errorMessage={errors.phone?.message} />
            }}
          />
          <InputText placeholder='Địa chỉ' name='address' register={register} errorMessage={errors.address?.message} />
        </S.FormModal>
      </CustomModal>
    </S.Container>
  )
}
