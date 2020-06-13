import React from 'react'

function handleClick() {
  console.log("I was clicked")
}

// https://reactjs.org/docs/events.html#supported-events

function App() {
  return (
    <div>
      <img onMouseOver={() => console.log("Hovered!")} 
      src="https://www.fillmurray.com/200/100" alt="murray"/>
      <br />
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App