import React from 'react'

function Joke(props) {
  const {joke} = props

  // const styles = {
  //   visibility: "visible"
  // }

  // if (!joke.hasOwnProperty("question")) {
  //   styles.visibility = "hidden"
  // }

  return (
    <div>
      {/* <h3 style={styles}>Question: {joke.question}</h3> */}
      {/* <h3 style={{display: joke.question ? "block": "none"}}>Question: {joke.question}</h3> */}
      <h3 style={{display: !joke.question && "none"}}>Question: {joke.question}</h3>
      <h3 style={{color: !joke.question && "#888888"}}>Answer: {joke.punchline}</h3>
      <br />
    </div>
  )
}

export default Joke