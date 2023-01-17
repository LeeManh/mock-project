import { useMemo, useState } from 'react'

const useSlide = (images: string[], numberMaxImage: number = 5) => {
  const [indexImages, setIndexImages] = useState([0, numberMaxImage])
  const [activeImage, setActiveImage] = useState(images[0])

  const currentImages = useMemo(() => {
    return images.slice(indexImages[0], indexImages[1]) || []
  }, [indexImages, images])

  const handlePre = () => {
    if (indexImages[0] > 0) {
      setIndexImages((pre) => pre.map((i) => i - 1))
    }
  }

  const handleNext = () => {
    if (indexImages[1] < images.length - 1) {
      setIndexImages((pre) => pre.map((i) => i + 1))
    }
  }

  return { indexImages, setIndexImages, activeImage, setActiveImage, currentImages, handlePre, handleNext }
}

export default useSlide
