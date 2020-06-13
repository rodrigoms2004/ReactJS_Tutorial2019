import React from 'react'

// function App() {
//   return (
//     <div>
//       <h1>Code goes here</h1>
//     </div>
//   )
// }

class App extends React.Component {


  render() {
    return (
      <h1>{this.props.whatever}</h1>
    )
  }
}

export default App