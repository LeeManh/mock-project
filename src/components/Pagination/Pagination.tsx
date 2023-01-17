import { PaginationProps } from 'antd'
import { PaginationContainer, PaginationCustom } from './Pagination.styled'

interface Props extends PaginationProps {
  styleContainer?: React.CSSProperties
}

const Pagination = ({ styleContainer, ...rest }: Props) => {
  return (
    <PaginationContainer style={styleContainer}>
      <PaginationCustom {...rest} />
    </PaginationContainer>
  )
}

export default Pagination
