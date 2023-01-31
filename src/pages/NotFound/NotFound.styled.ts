import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  --white: #f7e8e8;
  --gray-line: #bfc0c0;
  background-color: #e6e8eb;
  min-height: 100vh;
`
export const Top = styled.div`
  h1 {
    font-family: 'Abril Fatface', serif;
    font-size: 14rem;
    text-align: center;
    color: var(--white);
    text-shadow: 1px 0 var(--gray-line), 0 1px var(--gray-line), -1px 0 var(--gray-line), 0 -1px var(--gray-line);
  }

  h3 {
    font-family: 'Lato', sans-serif;
    font-size: 2em;
    text-align: center;
    color: #bfc0c0;
    margin-top: -20px;
    font-weight: 900;
  }
`
export const GhostContainer = styled.div`
  margin: 30px auto 0;
  position: relative;
  width: 250px;
  height: 250px;
`
export const ghostMove = keyframes`
   0% {
      transform: translateY(0);
  }
  25% {
      transform: translateY(10px);
  }
  50% {
      transform: translateY(0);
  }
  75% {
      transform: translateY(-10px);
  }
`
export const Ghost = styled.div`
  position: absolute;
  top: 0;
  left: 25%;
  width: 50%;
  height: 53%;
  background-color: var(--white);
  border-radius: 50% 50% 0 0;
  border: 1px solid var(--gray-line);
  border-bottom: none;
  z-index: 2;
  animation: ${ghostMove} 2s linear infinite;
`
export const FaceGhost = styled.div`
  width: 100%;
  height: 60%;
  position: absolute;
  top: 20%;
`
export const EyeLeftGhost = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 30%;
  left: 25%;
  border-radius: 50%;
  background-color: #585959;
`
export const EyeRightGhost = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 30%;
  right: 25%;
  border-radius: 50%;
  background-color: #575858;
`
export const MounthGhost = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  transform: rotate(45deg);
  border: 3px solid;
  border-color: transparent #575858 #575858 transparent;
`
export const GhostCoppy = styled.div`
  position: absolute;
  top: 0;
  left: 25%;
  width: 50%;
  height: 53%;
  background-color: var(--white);
  border-radius: 50% 50% 0 0;
  border: 1px solid var(--gray-line);
  z-index: 0;
  animation: ${ghostMove} 2s linear infinite;

  .one,
  .two,
  .three,
  .four {
    position: absolute;
    background-color: var(--white);
    border: 1px solid var(--gray-line);
    top: 90%;
    z-index: 0;
  }

  .one {
    width: 25%;
    height: 23%;
    left: -1px;
    border-radius: 0 0 100% 30%;
  }
  .two {
    width: 25%;
    height: 23%;
    left: 24%;
    border-radius: 0 0 50% 50%;
  }
  .three {
    width: 25%;
    height: 23%;
    left: 51%;
    border-radius: 0 0 50% 50%;
  }
  .four {
    width: 25%;
    height: 23%;
    right: -1px;
    border-radius: 0 0 30% 100%;
  }
`
export const scale = keyframes` 
  0% {
      transform: scale(1);
  }
  75% {
      transform: scale(1.2);
  }
  100% {
      transform: scale(1);
  }
`

export const ShadowGhost = styled.div`
  position: absolute;
  top: 75%;
  left: 35%;
  width: 30%;
  height: 7%;
  border-radius: 50%;
  background-color: #bfc0c0;
  animation: ${scale} 2s linear infinite;
`
export const Bottom = styled.div`
  text-align: center;
  position: relative;

  p {
    font-family: 'Lato', sans-serif;
    font-size: 1.4rem;
    font-weight: 900;
    color: #585959;
    margin-bottom: 20px;
  }
  .btn-group {
    margin-top: 15px;
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
`
