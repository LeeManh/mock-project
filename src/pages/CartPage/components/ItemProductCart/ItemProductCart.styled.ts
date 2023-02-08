import styled from 'styled-components'
import colors from 'constants/colors'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 1px solid ${colors['gray-light-2']};
`
export const ImageProduct = styled.img`
  min-width: 8rem;
  max-width: 8rem;
  height: 8rem;
  flex-shrink: 0;
  object-fit: cover;
`
export const TitleProduct = styled.div`
  max-height: 4.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`
