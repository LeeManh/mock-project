import colors from 'constants/colors'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const DotsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`
export const Dot = styled(motion.div)`
  width: 10px;
  height: 10px;
  background-color: ${colors['orange-light']};
  border-radius: 50%;
`
