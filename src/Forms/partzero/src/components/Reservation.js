import React from 'react'

class Reservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.name === 'isGoing' ? 
                    target.checked : 
                    target.value > 0 ? target.value : 0 // prevents negative values
    const name = target.name

    this.setState({
      [name]: value
    })

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
    // ES5 code 
    // var partialState = {};
    // partialState[name] = value;
    // this.setState(partialState);
  }

  handleSubmit(event) {
    
    const isGoing = this.state.isGoing ? "they are going" : "they aren't going"
    alert(
      `Number of guests is ${this.state.numberOfGuests} and ${isGoing}`
    )
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Reservation