import ReactDOM from 'react-dom'

import { ChakraProvider } from "@chakra-ui/react"

import { PreferencesProvider } from './context/PreferencesContext'

import App from './App'

ReactDOM.render(
  <ChakraProvider>
    <PreferencesProvider>
      <App />
    </PreferencesProvider>
  </ChakraProvider>,
  document.getElementById('root')
)
