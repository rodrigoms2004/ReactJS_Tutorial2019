
// https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag
// Uncontrolled Components

import React, {Component} from 'react'

class NameForm2 extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.input = React.createRef()    
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value) 
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name (uncontrolled):
          <input 
            defaultValue="Bob"
            type="text" 
            ref={this.input} 
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default NameForm2