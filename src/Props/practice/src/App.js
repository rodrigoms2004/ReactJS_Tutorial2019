import React from 'react'

import Joke from './components/Joke'
import jokesData from './jokesData'


function App() {

  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline}  />)
  
  return (
    <div>
      {jokeComponents}

    </div>
  )

}

export default App
