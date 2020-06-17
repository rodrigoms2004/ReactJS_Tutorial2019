import React, { useState, useEffect } from  'react'
import randomcolor from 'randomcolor'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("")

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  // replace componentDidMount()
  useEffect(() => {
    const intervalId = setInterval(() => {      
      // setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  // replace componentDidUpdate()
  useEffect(() => {
    document.title = `You clicked ${count} times`
    setColor(randomcolor())

    // document.addEventListener(...)
    // socket subscription

  }, [count]) // it count change, color will change, [] says to not run again

  return (
    <div>
    <h1 style={{color: color}}>{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>    
  )
}

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button>Change!</button>
//       </div>
//     )
//   }

// }

export default App

