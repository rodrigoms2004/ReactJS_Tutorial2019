import React, {Component} from 'react'
import FormComponent from './Component'


class Form extends Component {
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

  getDietaryRestrictions(data) {
    const diet = {
      vegetarian: data.dietaryRestrictions.isVegan ? "Vegetarian": "",
      kosher: data.dietaryRestrictions.isKosher ? "Kosher" : "",
      lactose: data.dietaryRestrictions.isLactoseFree ? "Lactose Free": ""
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
      `Dietary restrictions: ${this.getDietaryRestrictions(this.state)}\n`
    )
    event.preventDefault()
  }

  
  render() {
    return (
      <FormComponent 
      handleChange={this.handleChange} 
      handleSubmit={this.handleSubmit}
      getDietaryRestrictions={this.getDietaryRestrictions}
      data={this.state}
    />
    )
  }
}

export default Form