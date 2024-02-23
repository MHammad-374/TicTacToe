import { useState } from 'react'

import './App.css'
import Main from './Components/Main'

function App() {
  

  return (
    <>
      <nav>
        <h1 className={`appName`}>Tic Tac Toe</h1>
      </nav>
      <Main />
    </>
  )
}

export default App
