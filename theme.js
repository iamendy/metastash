import { extendTheme } from '@chakra-ui/react'


const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const components = {
  Container: {
    baseStyle:{
      maxWidth: ['100%'],
      paddingLeft: 3,
      paddingRight: 3,
    }
  },
  Heading: {
    variants: {
      pageTitle: {
        fontSize: '2xl',
        color: 'white.300',
        marginTop: 3,
        marginBottom: 3,
        textIndent: '12px'
      }
    }
  }
}

// 3. extend the theme
const theme = extendTheme({ config, components })

export default theme