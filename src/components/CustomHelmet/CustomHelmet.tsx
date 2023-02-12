import { Helmet } from 'react-helmet-async'

interface Props {
  children?: React.ReactNode
}

const CustomHelmet = ({ children }: Props) => {
  return <Helmet>{children}</Helmet>
}

export default CustomHelmet
