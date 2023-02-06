import { Container, Dot, DotsWrap } from './LoadingDots.styled'

const LoadingDots = () => {
  return (
    <Container>
      <DotsWrap>
        <Dot
          className='w-2 h-2 rounded-full bg-orange-600'
          animate={{
            y: [0, -4, 0, 4, 0]
          }}
          transition={{
            times: [0, 0.25, 0.5, 0.75, 1],
            duration: 0.4,
            repeat: Infinity
          }}
        ></Dot>
        <Dot
          className='w-2 h-2 rounded-full bg-orange-600'
          animate={{
            y: [0, -4, 0, 4, 0]
          }}
          transition={{
            times: [0, 0.25, 0.5, 0.75, 1],
            duration: 0.4,
            repeat: Infinity,
            delay: 0.1
          }}
        ></Dot>
        <Dot
          className='w-2 h-2 rounded-full bg-orange-600'
          animate={{
            y: [0, -4, 0, 4, 0]
          }}
          transition={{
            times: [0, 0.25, 0.5, 0.75, 1],
            duration: 0.4,
            repeat: Infinity,
            delay: 0.2
          }}
        ></Dot>
      </DotsWrap>
    </Container>
  )
}

export default LoadingDots
