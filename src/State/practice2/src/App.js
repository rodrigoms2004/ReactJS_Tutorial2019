import React, {Component} from 'react'

class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoggedIn : false
    }
  }

  render() {
    const wordDisplay = this.state.isLoggedIn ? 'in' : 'out'
    return (
      <div>
        <h1>You are currently logged {wordDisplay}</h1>
      </div>
    )
  }
}

export default App