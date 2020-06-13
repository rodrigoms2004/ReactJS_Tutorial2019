import React from 'react'

class ChildComponent extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {
    return(  
      <div>
        <h3>Child Component receiving count value</h3>
        <h1>{this.props.count}</h1>
      </div>
    )
  }
}

export default ChildComponent