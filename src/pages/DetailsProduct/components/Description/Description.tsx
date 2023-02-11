import DOMPurify from 'dompurify'

import { DescriptionContent, DescriptionTitle, DescriptionWrap } from './Description.styled'

interface Props {
  description: string
}

const Description = ({ description }: Props) => {
  return (
    <DescriptionWrap>
      <DescriptionTitle>Mô tả sản phẩm</DescriptionTitle>
      <DescriptionContent
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(description)
        }}
      />
    </DescriptionWrap>
  )
}

export default Description
