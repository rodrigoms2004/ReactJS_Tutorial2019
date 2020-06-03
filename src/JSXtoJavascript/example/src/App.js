import React from 'react'

function App() {
  // const date = new Date(2018, 6, 3, 10) // morning
  // const date = new Date(2018, 6, 3, 15) // afternoon
  // const date = new Date(2018, 6, 3, 19) // night
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30 // "30px"
  }

  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#8914A3"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }

  return (
    <div>
      <h1 style={styles}>Good {timeOfDay}!</h1>
    </div>
  )
}

export default App