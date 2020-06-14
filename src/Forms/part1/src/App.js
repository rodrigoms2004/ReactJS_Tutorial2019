import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    alert(`Name informed is ${this.state.firstName} ${this.state.lastName}`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}> 
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          value={this.state.firstName} 
          onChange={this.handleChange}
        />
        <br />
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          value={this.state.lastName} 
          onChange={this.handleChange}
        />
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default App