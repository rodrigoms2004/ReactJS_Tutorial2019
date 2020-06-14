import React, { Component } from 'react'

// https://blog.bitsrc.io/react-16-lifecycle-methods-how-and-when-to-use-them-f4ad31fb2282
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes


class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  // deprecated
  static getDerivedStateFromProps(props, state) {
    // return the new, update state baased upon the props
    // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  }

  getSnapshotBeforeUpdate() {
    // create a backup of the current way things are  
    // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
  }

  // deprecated
  // componentDidMount() {}

  // unsafe
  // componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
  }

  // deprecated
  // componentWillUpdate() {}

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