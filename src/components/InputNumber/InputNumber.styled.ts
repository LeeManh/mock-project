import styled from 'styled-components'
import colors from 'constants/colors'

export const Container = styled.div`
  width: 100%;
`
export const Input = styled.input`
  height: 100%;
  width: 100%;
  height: 3.2rem;
  width: 100%;
  text-align: center;
  outline: none;
  border: 1px solid ${colors.gray};
  padding: 0 1rem;

  &:focus {
    border: ${(props: { isError?: boolean }) =>
      props.isError ? `1px solid ${colors.orange}` : '1px solid rgba(0, 0, 0, 0.54)'};

    box-shadow: 0 0 4px rgb(0 0 0 / 14%);
  }
`
export const ErrorMessage = styled.div`
  color: ${colors.orange};
  font-size: 1.3rem;
  min-height: 1.5rem;
  margin-top: 0.5rem;
  user-select: none;
`
