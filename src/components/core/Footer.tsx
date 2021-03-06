import { __DEV__ } from 'shared/utils'
import Container from './Container'
import { Text } from '../styled'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <Container
        flexDirection="row"
        justifyContent="flex-end"
        color="gray.300"
        pt={2}
        pb={2}
      >
        <Text fontSize="xs">&copy; {currentYear} - Sebastiaan Scheers</Text>
      </Container>
    </footer>
  )
}

if (__DEV__) Footer.displayName = 'Footer'

export default Footer
