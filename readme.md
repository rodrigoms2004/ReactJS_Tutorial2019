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


### Stopped at 50:52 Styling React with CSS Classes