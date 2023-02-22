import React from 'react'
import Square from './Square'
import '../styles/style.css'

export const App = () => {
  return (
    <div className="app">
      <div>
        <p>Chess App</p>
      </div>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
    </div>
  )
}

export default App
