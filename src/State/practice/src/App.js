import React, {Component} from 'react'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name : this.props.name,
      age: this.props.age
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age} years old</h1>
      </div>
    )
  }
}

export default App