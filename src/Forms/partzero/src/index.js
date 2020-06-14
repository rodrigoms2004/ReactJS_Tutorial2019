import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))



// Controlled Input Null Value

// Specifying the value prop on a controlled component prevents the user from changing the input unless you desire so. 
// If you’ve specified a value but the input is still editable, you may have accidentally set value to undefined or null.
// The following code demonstrates this. (The input is locked at first but becomes editable after a short delay.)
// ReactDOM.render(<input value="hi"/>, document.getElementById('root'))

// ReactDOM.render(<input value="hi"/>, document.getElementById('root'))

// setTimeout(() => {
//   ReactDOM.render(<input value={null}/>, document.getElementById('root'))
// }, 10000)
