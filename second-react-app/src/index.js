import React from 'react';
import reactDOM from 'react-dom/client';

/* JSX syntax and Components
let root = ReactDOM.createRoot(document.getElementById('root'))//It will create virtual DOM


  //JSX syntax

  //Variable
  // let name = 'shashikanth'
  // let menu = (
  //   <div>
  //     <li>{name}</li>
  //     <li>Home</li>
  //     <li>About</li>
  //   </div>
  // )
  //Functional Component
  function Menu() { //Functional Component
    return (<div>
      <mark>First Mark tag</mark><br></br>
      <mark>Second Mark tag</mark>
    </div>)
  }

  //Class component

  class Shashi extends React.Component{
    render(){
      let names = ['shashi','kanth','shashikanth']
      return (
        <div>
          <li>{names[0]}</li>
          <li>{names[1]}</li>
          <li>{names[2]}</li>
        </div>
      )
    }
      
  }

  root.render(<Shashi />

)*/

/*Exports and Imports*/

//Named exports and imports
//Default exports and imports

/*import {ShashiDetailsObject as obj , array} from './App'; 
import defaultObj from './App';

var root = reactDOM.createRoot(document.getElementById('root'))

function Shashi() {
  console.log(obj)
  console.log(array)
  console.log(defaultObj)
  return (
    <p>Hii how are you..!</p>
  )
}

root.render(<Shashi />)*/

/*
App.js
  export let ShashiDetailsObject = {
  name:'shashikanth',
  age:24,
  location : 'Hyderabad'
}

export let array = [1,3,5,6]

let obj = {
  company:'DEzen',
  location:'Madhapur'
}

export default obj
*/

/*
//Component Imports and exports
import AppComponent from './App';

let root = reactDOM.createRoot(document.getElementById('root'))

root.render(
  <AppComponent />
  
)*/
/*JSX Attributes

import ExampleForJsxAttributes from './App';
let root = reactDOM.createRoot(document.getElementById('root'))

root.render(
  <ExampleForJsxAttributes />
)*/
/*JSX Expressions */
import ExpressionExample from './App';
let root = reactDOM.createRoot(document.getElementById('root'))

root.render(
  <ExpressionExample />
)