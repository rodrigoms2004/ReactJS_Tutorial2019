# React Tutorial




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

### Stopped at 1:40:31 Mapping Components