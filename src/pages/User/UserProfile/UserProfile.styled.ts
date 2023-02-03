import styled from 'styled-components'
import colors from 'constants/colors'

export const Container = styled.div`
  background-color: ${colors.white};
  padding: 0 3rem 5rem 3rem;
  border-radius: 2px;
  min-height: 40rem;
`
export const ContentUser = styled.div`
  display: flex;
  margin-top: 5rem;
`
export const FormUser = styled.div`
  flex: 1;
  padding-right: 5rem;
`
export const ItemFormUser = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
`
export const LabelForm = styled.div`
  width: 20%;
  text-align: right;
  color: ${colors['gray-text']};
`
export const DescribeUpDate = styled.div`
  color: ${colors['gray-text']};
  margin-top: 2rem;
`

export const UpdateAvatart = styled.div`
  width: 28rem;
  border-left: 1px solid ${colors['gray-light-2']};
  display: flex;
  flex-direction: column;
  align-items: center;
`
