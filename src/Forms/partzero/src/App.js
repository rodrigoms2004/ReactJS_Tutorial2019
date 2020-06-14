import React, {Component} from 'react'

import NameForm from './components/NameForm'
import EssayForm from './components/EssayForm'
import FlavorForm from './components/FlavorForm'
import NameForm2 from './components/NameForm2'
import FileInput from './components/FileInput'
import Reservation from './components/Reservation'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        Code goes here
        <NameForm />
        <br/>
        <EssayForm />
        <br/>
        <FlavorForm />
        <br/>
        <NameForm2 />
        <br/>
        <FileInput />
        <br />
        <Reservation />
        <br />
      </div>
    )
  }
}

export default App