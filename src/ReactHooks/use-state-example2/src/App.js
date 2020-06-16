import React, { useState } from  'react'


function App() {
  const [count, setCount] = useState(0)
  const [answer, setAnswer] = useState("Yes")

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  function answerNo(ans) {
    setAnswer(prevAnswer => prevAnswer = "No")
  }

  return (
    <div>
    <h1>{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <h1>{answer}</h1>
    <button onClick={answerNo}>No</button>
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

