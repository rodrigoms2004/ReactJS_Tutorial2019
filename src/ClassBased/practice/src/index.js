import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="Rodrigo"/>
        <Greeting />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    )
  }
}

class Greeting extends Component {


  render() {
    // const date = new Date(2018, 6, 3, 10) // morning
    // const date = new Date(2018, 6, 3, 15) // afternoon
    // const date = new Date(2018, 6, 3, 19) // night
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
      fontSize: 30 // "30px"
    }
  
    if (hours < 12) {
      timeOfDay = "morning"
      styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
      styles.color = "#8914A3"
    } else {
      timeOfDay = "night"
      styles.color = "#D90000"
    }  
    return (
      <div>
        <h1 style={styles}>Good {timeOfDay}!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

// function App() {
//   return (
//     <div>
//       <Header username="Rodrigo"/>
//       <Greeting />
//     </div>
//   )
// }

// function Header(props) {
//   return (
//     <header>
//       <p>Welcome, {props.username}</p>
//     </header>
//   )
// }

// function Greeting() {
//   // const date = new Date(2018, 6, 3, 10) // morning
//   // const date = new Date(2018, 6, 3, 15) // afternoon
//   // const date = new Date(2018, 6, 3, 19) // night
//   const date = new Date()
//   const hours = date.getHours()
//   let timeOfDay
//   const styles = {
//     fontSize: 30 // "30px"
//   }

//   if (hours < 12) {
//     timeOfDay = "morning"
//     styles.color = "#04756F"
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon"
//     styles.color = "#8914A3"
//   } else {
//     timeOfDay = "night"
//     styles.color = "#D90000"
//   }

//   return (
//     <div>
//       <h1 style={styles}>Good {timeOfDay}!</h1>
//     </div>
//   )
// }

