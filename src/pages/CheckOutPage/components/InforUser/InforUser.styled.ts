import colors from 'constants/colors'
import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  background: ${colors.white};
  margin-top: 2rem;
`
export const Header = styled.div`
  height: 3px;
  width: 100%;
  background-position-x: -30px;
  background-size: 116px 3px;
  background-image: repeating-linear-gradient(
    45deg,
    #6fa6d6,
    #6fa6d6 33px,
    transparent 0,
    transparent 41px,
    #f18d9b 0,
    #f18d9b 74px,
    transparent 0,
    transparent 82px
  );
`
export const Content = styled.div`
  padding: 2.8rem 3rem 2.4rem;
`
export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.8rem;
  color: ${colors.orange};
  text-transform: capitalize;
  margin-bottom: 2rem;
`
export const ContentInforUser = styled.div`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
`
export const NameAddress = styled.div`
  margin-right: 2rem;
  font-weight: 600;
`
export const Address = styled.div`
  margin-right: 2rem;
`
export const ChangeInfor = styled.div`
  font-size: 1.4rem;
  color: ${colors.blue};
  cursor: pointer;
`
export const FormModal = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
