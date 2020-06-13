import React, {Component} from 'react'

import ChildComponent from './components/ChildComponent'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    // bind the method to the class to use setState
    this.handleClick = this.handleClick.bind(this)
    this.divideByTwo = this.divideByTwo.bind(this)
  }

  handleClick() {
    this.setState(prevState => { // prevState = previous state
      return {
        count: prevState.count + 1 // returns a new state 
      }
    })
  }

  divideByTwo() {
    this.setState(prevState => {
      return {
        count: prevState.count / 2
      }
    })
  }

  render() {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
        <br />
        <button onClick={this.divideByTwo}>Divide by 2</button>
        <ChildComponent count={this.state.count}/>
      </div>
    )
  }
}

export default App