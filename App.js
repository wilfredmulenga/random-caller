import React from 'react'
import { GlobalContextProvider } from './src/context/globalContext'
import MainNavigation from './src/navigation/MainNavigation'

function App () {
  return (
    <GlobalContextProvider>
      <MainNavigation/>
    </GlobalContextProvider>
  )
}

export default App