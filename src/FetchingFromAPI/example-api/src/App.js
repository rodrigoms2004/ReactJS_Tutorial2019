import React, {Component} from 'react'
import ShowCharacters from './components/ShowCharacters'

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.dev/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261



class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      characterId: 1,
      baseUrl: "https://swapi.dev/api/people/",
      character: {}
    }
    this.handleClickNext = this.handleClickNext.bind(this)
    this.handleClickPrevious = this.handleClickPrevious.bind(this)
  }

  fetchService(id) {
    const url = this.state.baseUrl+String(id)
    this.setState({loading: true})
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          character: data, 
          loading: false
        })
      }) 
  }

  componentDidMount() {
    this.fetchService(1)
  }


  handleClickNext() {
    this.setState(prevState => {
      return {
        characterId: prevState.characterId + 1
      }
    })    
    const id = parseInt(this.state.characterId) + 1
    this.fetchService(id)
  }

  handleClickPrevious() {
    // prevents index 0 
    this.setState(prevState => {
      if (prevState.characterId === 1) {
        return {
          characterId: prevState.characterId
        }
      } else {
        return {
          characterId: prevState.characterId - 1
        }
      }
    })    
    let id = parseInt(this.state.characterId) - 1

    // prevents index 0 
    id = id < 1 ? 1 : id

    this.fetchService(id)
  }

  render() {

    const text = this.state.loading ? <p>Loading...</p> : <ShowCharacters data={this.state.character}/>

    return (
      <div>
        {text}
        <p class="indexP">Id: {this.state.characterId}</p>
        <button onClick={this.handleClickPrevious}>Previous</button>
        <button onClick={this.handleClickNext}>Next</button>
        
      </div>
    )
  }
}


export default App