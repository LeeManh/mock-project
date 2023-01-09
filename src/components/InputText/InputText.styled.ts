import styled from "styled-components";
import colors from "constants/colors";
import { ReactComponent as EyeCloseIcon } from "assets/svgs/eye-close-icon.svg";
import { ReactComponent as EyeOpenIcon } from "assets/svgs/eye-open-icon.svg";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;
export const InputWrap = styled.div`
  border: ${(props: { isError?: boolean }) =>
    props.isError
      ? `1px solid ${colors.orange}`
      : "1px solid rgba(0, 0, 0, 0.26)"};
  border-radius: 2px;
  box-shadow: inset 0 2px 0 rgb(0 0 0 / 2%);
  height: 4rem;
  overflow: hidden;
  position: relative;
  user-select: none;
  display: flex;
  align-items: center;

  &:focus-within {
    border: ${(props: { isError?: boolean }) =>
      props.isError
        ? `1px solid ${colors.orange}`
        : "1px solid rgba(0, 0, 0, 0.54)"};
    box-shadow: 0 0 4px rgb(0 0 0 / 14%);
  }
`;
export const Input = styled.input`
  outline: none;
  border: none;
  flex-grow: 1;
  height: 100%;
  font-family: inherit;
  padding: 1.2rem;
`;
export const ErrorMessage = styled.div`
  color: ${colors.orange};
  font-size: 1.3rem;
  min-height: 1.5rem;
  margin-top: 0.5rem;
  user-select: none;
`;
export const IconEyeWrap = styled.div`
  height: 100%;
  aspect-ratio: 1 / 1;
  background-color: transparent;
  display: grid;
  place-items: center;
  padding-right: 1rem;
`;
export const IconEyeClose = styled(EyeCloseIcon)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;
export const IconEyeOpen = styled(EyeOpenIcon)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;
