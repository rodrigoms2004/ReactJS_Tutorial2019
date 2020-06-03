import React from 'react'

import Joke from './components/Joke'

function App() {
  return (
    <div>

      <Joke 
        joke = {{
          punchline: "Helvetica and Times New Roman walk into a bar. 'Get out of here!' shouts the bartender. 'We don't serve your type.'"
        }}
      />

      <Joke 
        joke = {{
          question: "Why do we tell actors to 'break a leg?'",
          punchline: "Because every play has a cast."
        }}
      />

      <Joke 
        joke = {{
          question: "Did you hear about the mathematician who's afraid of negative numbers?",
          punchline: "He'll stop at nothing to avoid them."
        }}
      />

      <Joke 
        joke = {{
          question: "Hear about the new restaurant called Karma?",
          punchline: "There's no menu: You get what you deserve."
        }}
      />

      <Joke 
        joke = {{
          question: "Did you hear about the claustrophobic astronaut?",
          punchline: "He just needed a little space."
        }}
      />


    </div>
  )

}

export default App
