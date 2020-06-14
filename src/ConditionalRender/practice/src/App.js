import React, {Component} from 'react'

class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // this.setState({isLoggedIn: !this.state.isLoggedIn})
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    const buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
    const displayText = this.state.isLoggedIn ? "You are logged in" : "You are logged out"
    return (
      <div>
        <button onClick={this.handleClick}>{buttonText}</button>
        <h1>{displayText}</h1>
      </div>
    )
  }

}

export default App
