import React from 'react'
import '../styles/style.css'

const squareList = ['', '', '', '', '', '', '', '']

const Column = () => {
  return (
    <div >
      {
        squareList.map((item, index) => {
          return <div className="square" key={index}>{item}</div>
        })
      }
    </div>
  )
}

export default Column
