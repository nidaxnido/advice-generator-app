import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
// import { ChakraProvider } from '@chakra-ui/react'

const theme = extendTheme({
  colors:{
    brand:{
      lightCyan: "hsl(193, 38%, 86%)",
      neonGreen: "hsl(150, 100%, 66%)",
      greyBlue: "hsl(217, 19%, 38%)",
      darkGreyBlue : "hsl(217, 19%, 24%)",
      darkBlue: "hsl(218, 23%, 16%)"
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  
}
