import colors from "constants/colors";
import { Wrapper } from "globalStyle.styled";
import styled from "styled-components";
import images from "assets/images";

export const Container = styled.div`
  height: 60rem;
  background-color: ${colors.orange};
`;
export const Wrap = styled(Wrapper)`
  display: flex;
  align-items: center;
  background-image: url(${images.bgAuth});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  max-width: 1040px;
`;
export const Form = styled.form`
  background-color: ${colors.white};
  width: 40rem;
  min-height: 43rem;
  border-radius: 4px;
  padding: 3rem;
  margin-left: auto;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 14%);
`;
export const TitleForm = styled.div`
  font-size: 2rem;
  color: ${colors.black};
  margin-bottom: 3rem;
`;
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
export const ButtonLogin = styled.button`
  background-color: ${colors.orange};
  height: 4rem;
  border-radius: 2px;
  color: ${colors.white};
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
`;
export const FormActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.blue};
  font-size: 1.2rem;

  div {
    cursor: pointer;
  }
`;
export const Divider = styled.div`
  display: flex;
  align-items: center;
`;
export const DividerLine = styled.div`
  height: 1px;
  background-color: #dbdbdb;
  flex: 1;
`;

export const DividerText = styled.div`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${colors.gray};
  padding: 0 1.6rem;
`;

export const SocialButtonList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;
export const SocialButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  gap: 5px;
  border: 1px solid rgba(0, 0, 0, 0.26);
`;
export const SocialIcon = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  object-fit: contain;
`;
export const FormFooter = styled.div`
  text-align: center;
  color: ${colors.gray};
  margin-top: 2rem;

  a {
    text-decoration: none;
    color: ${colors.orange};
    margin-left: 4px;
  }
`;
