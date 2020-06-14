import React, { Component } from 'react'

// https://blog.bitsrc.io/react-16-lifecycle-methods-how-and-when-to-use-them-f4ad31fb2282
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes


class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  // unsafe
  componentDidMount() {
    // GET the data I need to crrectly display
  }

  // unsafe
  componentWillReceiveProps(nextProps) {
    if(nextProps.whatever !== this.props.whatever) {
      // do somethin important here
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
  }

  componentWillUnmount() {
    // teardown or cleanup your code berfore your component disappears
    // (E.g. remove event listeners)
  }

  render() {
    return (
      <div>
        Code goes here
      </div>
    )
  }
}


export default App