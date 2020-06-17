# React Tutorial


[SCRIMBA React JS](https://scrimba.com/g/glearnreact)

[Learn React JS - Full Course for Beginners - Tutorial 2019](https://www.youtube.com/watch?v=DLX62G4lc44&list=PL4ve0MDPJ_Ht8atBpL7BYqIwOgJjnWbvH&index=17&t=0s)


[Digging my way out of tutorial hell](https://codeburst.io/digging-my-way-out-of-tutorial-hell-6dd5f9927384)


[React and the Virtual DOM](https://www.youtube.com/watch?v=BYbgopx44vo)


## Components

JSX, State, Event Handling, Props, Styling, LIfecycle Methods, HTTP, Forms

## Why React

* Virtual DOM
* Reusable (and clearer) Web Components
* Maintained by Facebook
* Hirable

## ReactDOM & JSX

```
import react from "react"
import ReactDOM from "react-dom"

ReactDOM.render(WHAT DO I WANT TO RENDER, WHERE DO I WANT TO RENDER IT)
```

https://reactjs.org/docs/create-a-new-react-app.html

npx create-react-app my-app
cd my-app
yarn start

## Functional Components


```
import React from "react"
import ReactDOM from "react-dom"

function MyApp() {
  return   (
    <div>
      <title>React Application using unordered list</title>
      <h2>List of components needed</h2>
      <ul>
        <li>ReactJS</li>
        <li>Google Maps API</li>
        <li>NodeJS</li>
      </ul>
    </div>
  )
}

// JSX
ReactDOM.render(
  <MyApp />, 
  document.getElementById("root")
)
```


## Parent/Child Componets


## CSS


**Vanilla javascript**
*document.getElementById("something").className += " new-class-name"*

### Header.js
*src/CSS_Classes/example/src/components/Header.js*
```
import React from 'react'

function Header() {
  return(
    <header className="navbar">This is the header</header>
  )
}

export default Header
```
*src/CSS_Classes/example/src/index.js*
### index.js

```
import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
```

### style.css
*src/CSS_Classes/example/src/style.css*
```
.navbar {
  background-color: purple;
};
```


## JSX to JavaScript and Back

```
import React from 'react'

function App() {
  const firstName = "Bob"
  const lastName = "Ziroll"

  return(
    <div>
      <h1>Hello {firstName + " " + lastName}!</h1>
      <h1>Hello {`${firstName} ${lastName}`}!</h1>
    </div>
  )
}

export default App
```

## Inline Styles with the Style Property

*src/JSXtoJavascript/example/src/App.js*

```
  const styles = {
    color: "#FF8C00",
    backgroundColor: "#FF2D00",
    fontSize: "200px"
  }

  return (
    <div>
      <h1 style={styles}>Good {timeOfDay}!</h1>
    </div>
  )
```

## Mapping Components

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


## Class-based Components

In class use **this** pointer

```
import React from 'react'

function App() {
  return (
    <div>
      <h1>Code goes here</h1>
    </div>
  )
}

export default App
```

```
class App extends React.Component {
  render() {
    return (
      <h1>Code goes here</h1>
    )
  }
}
```

## State

Props are imutable, state allows component to change its data

## Handling Events in React

https://reactjs.org/docs/events.html#supported-events


## Changing State

```
import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    // bind the method to the class to use setState
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => { // prevState = previous state
      return {
        count: prevState.count + 1 // returns a new state 
      }
    })
  }

  render() {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    )
  }
}

export default App
```


## Lifecycle Methods Part 1

https://blog.bitsrc.io/react-16-lifecycle-methods-how-and-when-to-use-them-f4ad31fb2282
https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

```
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
  ```


## Lifecycle Methods Part 2

https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate


## Lifecycle Methods Part 3 - Component did update

https://scrimba.com/g/greacthooks


## Fetching data from API with React

Fetch
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

Star Wars API
https://swapi.dev/

Promises
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261


## Forms

### React Docs about Forms:

#### Controlled components
https://reactjs.org/docs/forms.html

**Controlled Input Null Value**

Specifying the value prop on a controlled component prevents the user from changing the input unless you desire so. If you’ve specified a value but the input is still editable, you may have accidentally set value to undefined or null.
The following code demonstrates this. (The input is locked at first but becomes editable after a short delay.)
ReactDOM.render(<input value="hi"/>, document.getElementById('root'))

```
ReactDOM.render(<input value="hi"/>, document.getElementById('root'))

setTimeout(() => {
  ReactDOM.render(<input value={null}/>, document.getElementById('root'))
}, 10000)

```

https://jaredpalmer.com/formik


#### Uncontrolled components

**Default Values**

In the React rendering lifecycle, the value attribute on form elements will override the value in the DOM. With an uncontrolled component, you often want React to specify the initial value, but leave subsequent updates uncontrolled. To handle this case, you can specify a defaultValue attribute instead of value.

https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag

Likewise, <input type="checkbox"> and <input type="radio"> support defaultChecked, and <select> and <textarea> supports defaultValue.

#### Controlled and uncontrolled form inputs in React don't have to be complicated
https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/



## React Container & Component Architecture

https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0


## Writing Modern React Apps


### Other modern/advanced React features/topics to learn:

Official React Context API - https://reactjs.org/docs/context.html
Error Boundaries - https://reactjs.org/docs/error-boundaries.html
render props - https://reactjs.org/docs/render-props.html
Higher Order Components - https://reactjs.org/docs/higher-order-components.html
React Router - https://reacttraining.com/react-router/core/guides/philosophy
React Hooks - https://reactjs.org/docs/hooks-intro.html
React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html

## React Hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

### useState() hook

Use state in a function based component

### useEffect() hook

https://reactjs.org/docs/hooks-effect.html

Replace three methods: componentDidMount, componentDidUpdate, componentWillUnmount

Side effects?
Network request
Manual DOM manipulation
Event listeners or timeouts and intervals


## React Project Ideas for Practicing

https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d

https://medium.freecodecamp.org/want-to-build-something-fun-heres-a-list-of-sample-web-app-ideas-b991bce0ed9a

https://medium.freecodecamp.org/summer-is-over-you-should-be-coding-heres-yet-another-list-of-exciting-ideas-to-build-a95d7704d36d

### NEXT LESSON React Boot Camp!

https://scrimba.com/g/greact