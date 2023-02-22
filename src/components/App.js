import React from 'react'
import Column from './Column'
import '../styles/style.css'

export const App = () => {
  return (
    <div className="app">
      <div>
        <p>Chess App</p>
      </div>
          <Column />
    </div>
  )
}

export default App
