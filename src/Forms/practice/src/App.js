import React, {Component} from 'react'

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  
  handleChange(event) {
    const {name, value, type, checked} = event.target

  
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    if (type === "checkbox") {
      this.setState(prevState => {
          return {
            dietaryRestrictions: Object.assign(prevState.dietaryRestrictions, {[name]: checked})}
      })    
    } else {
      this.setState({[name]: value})
    }    
  }

  getDietaryRestrictions() {
    const diet = {
      vegetarian: this.state.dietaryRestrictions.isVegan ? "Vegetarian": "",
      kosher: this.state.dietaryRestrictions.isKosher ? "Kosher" : "",
      lactose: this.state.dietaryRestrictions.isLactoseFree ? "Lactose Free": ""
    }

    const dietStr = Object.keys(diet).map(d => diet[d]).join(",")

    return dietStr
  }

  handleSubmit(event) {
    
    alert(
      `First name: ${this.state.firstName}\n` +
      `Last name: ${this.state.lastName}\n` +
      `Age: ${this.state.age}\n` +
      `Gender: ${this.state.gender}\n` +
      `destination: ${this.state.destination}\n` +
      `Dietary restrictions: ${this.getDietaryRestrictions()}\n`
    )
    event.preventDefault()
  }

  
  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>  
          <input 
            type="text" 
            name="firstName" 
            value={this.state.firstName} 
            onChange={this.handleChange} 
            placeholder="First Name" 
          />
          <br />
          <input 
            type="text" 
            name="lastName" 
            value={this.state.lastName} 
            onChange={this.handleChange} 
            placeholder="Last Name" 
          />
          <br />
          <input 
            type="number" 
            name="age" 
            value={this.state.age} 
            onChange={this.handleChange} 
            placeholder="Age" 
          />
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
          
          <br />
          
          <label>
            Select your destination:
            <select
              value={this.state.destination}
              onChange={this.handleChange}
              name="destination"
            >
              <option value="">-- Please Choose a destination --</option>
              <option value="Sahara Desert">Sahara Desert</option>
              <option value="New York">New York</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Buenos Aires">Buenos Aires</option>
            </select>
          </label>
          <br />
          
          <label> 
            <input 
              type="checkbox"
              name="isVegan"
              checked={this.state.dietaryRestrictions.isVegan}
              onChange={this.handleChange}
            /> Vegan?
          </label>
          <br />

          <label> 
            <input 
              type="checkbox"
              name="isKosher"
              checked={this.state.dietaryRestrictions.isKosher}
              onChange={this.handleChange}
            /> Kosher?
          </label>
          <br />

          <label> 
            <input 
              type="checkbox"
              name="isLactoseFree"
              checked={this.state.dietaryRestrictions.isLactoseFree}
              onChange={this.handleChange}
            /> Lactose free?
          </label>
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
            Your dietary restrictions: {this.getDietaryRestrictions()}
        </p>
      </main>
    )
  }
}

export default App