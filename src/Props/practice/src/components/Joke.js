import React from 'react'

function Joke(props) {
  
  // const styles = {
  //   visibility: "visible"
  // }

  // if (!props.hasOwnProperty("question")) {
  //   styles.visibility = "hidden"
  // }

  return (
    <div>
      {/* <h3 style={styles}>Question: {props.question}</h3> */}
      {/* <h3 style={{display: props.question ? "block": "none"}}>Question: {props.question}</h3> */}
      <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
      <h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchline}</h3>
      <br />
    </div>
  )
}

export default Joke