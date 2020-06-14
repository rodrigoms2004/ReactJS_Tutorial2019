import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      isFriendly: false,
      gender: '',
      favColor: 'blue'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
  handleChange(event) {
    const {name, value, type, checked} = event.target

    type === "checkbox" ? this.setState({[name]: checked}): this.setState({[name]: value})
  }

  handleSubmit(event) {
    const isFriendly = this.state.isFriendly ? "friendly" : "not friendly"
    alert(`Your name is ${this.state.firstName} ${this.state.lastName} and you are ${isFriendly}.`)
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
        
        <br />

        <textarea
          value={"Some default value"}
          onChange={this.handleChange}
        />

        <br />

        <label>
          <input 
            type="checkbox" 
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          /> Is friendly?
        </label>

        <br />

        <label>
          <input 
            type="radio" 
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          /> Male
        </label>

        <label>
          <input 
            type="radio" 
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          /> Female
        </label>
        {/* Formik */}

        <br />

        <label>
          Choose your favorite color:
          <select 
            value={this.state.favColor}
            onChange={this.handleChange}
            name="favColor"
          >
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="grey">Grey</option>
            <option value="orange">Orange</option>
          </select>
        </label>
    
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>You are a {this.state.isFriendly ? "friendly" : "not friendly"}</h2>
        <h2>You are a {this.state.gender}</h2>
        <h2>Your favorite color is {this.state.favColor}</h2>
        <br />
        <button>Submit</button>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    )
  }
}

export default App