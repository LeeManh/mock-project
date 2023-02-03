import Button from 'components/Button'
import React, { useRef } from 'react'
import { toast } from 'react-toastify'

interface Props {
  onChange?: (file?: File) => void
}

const InputFile = ({ onChange }: Props) => {
  const inputFileRef = useRef<HTMLInputElement>(null)

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileFromLocal = e.target.files?.[0]

    inputFileRef.current?.setAttribute('value', '')

    if (fileFromLocal && (fileFromLocal.size >= 1048576 || !fileFromLocal.type.includes('image'))) {
      toast.error(`Dụng lượng file tối đa 1 MB. Định dạng:.JPEG, .PNG`, {
        position: 'top-center'
      })
      return
    }
    onChange?.(fileFromLocal)
  }
  const onClickSelectAvatar = () => {
    inputFileRef.current?.click()
  }

  return (
    <>
      <input
        style={{ display: 'none' }}
        type='file'
        accept='.jpg,.jpeg,.png'
        ref={inputFileRef}
        onChange={onFileChange}
        onClick={(e) => ((e.target as HTMLInputElement).value = '')}
      />

      <Button typeBtn='primary' onClick={onClickSelectAvatar} style={{ marginTop: '2rem', width: '10rem' }}>
        Chọn Ảnh
      </Button>
    </>
  )
}

export default InputFile
