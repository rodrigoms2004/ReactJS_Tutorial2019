import React, { useState } from  'react'

function App() {
  const [value] = useState("Yes") // receives value, function
  console.log(value)

  return (
    <div>
      <h1>Is state important to know? {value} </h1>
    </div>
  )
}


// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       answer: "Yes"
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>Is state important to know? {this.state.answer}</h1>
//       </div>
//     )
//   }

// }

export default App

