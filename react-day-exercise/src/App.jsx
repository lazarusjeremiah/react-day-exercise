import React from 'react'
import './App.css'

function App() {
  const hours = new Date().getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "Morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon"
  } else if (hours < 21) {
    timeOfDay = "Evening"
  } else {
    timeOfDay = "Night"
  }

  return (
    <>
      <h1>Good {timeOfDay}</h1>
    </>
  )
}

export default App
