import colors from 'constants/colors'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  position: fixed;
  inset: 0;
  z-index: 9999;
  align-items: center;
  justify-content: center;
  background-color: white;
`
export const DotsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
`
export const Dot = styled(motion.div)`
  width: 1rem;
  height: 1rem;
  background-color: ${colors['orange-light']};
  border-radius: 50%;
`
