/*
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

export default obj*/
/* Imports and Exports
import Container from './ContainerHeader'
function AppComponent() {
  return (
      <div>
        <Container />
        <h1>Hii this is h1 tag</h1>
      </div>
  )
}

export default AppComponent*/
/*
//JSX Attributes
import './index.css'
function exampleForJsxAttributes() {
  return (
    <div>
      <label htmlFor="sub" className="inputClass">Subscribe:</label>
      <input type="checkbox" id="sub"/>
    </div>
  )
}

export default exampleForJsxAttributes */
/* Expression Example
function expressionExample(){
  return(
    <div>
      <h1>This is an example for expressions</h1>
      {5*4}
      <br></br>
      {sum(12,7)}
    </div>
    
  )
}

export default expressionExample

function sum(n1,n2){
  return n1+n2
}*/
/*Component styles
import './App.css'

function ComponentStyles() {

let s1 = {
  color : '#fff',
  background : 'green'
}

  return (
    <div>
      <h1 style={s1}>Hii this is an example of component styles..!!</h1>
      <h2 style={{background:'orange',color:'white'}}>Component styles can give in Object form also, and it we can give it globally also</h2>
      <h3>Here we can apply styles globally by importing file created in public folder</h3>
      <h4>This is example for normal importing css file add styles</h4>
    </div>
  )
}

export default ComponentStyles*/
/*Fragements
import React from "react"
function FragmentsExample() {
  return (
    <div style={{display:'flex',gap:30}}>
      <DisplayFlexItems />
    </div>
  )
}

function DisplayFlexItems() {
  return (
    <>
      <div>Fragement means it will act as parent element</div>
      <div>To overcome the length code like , "React.Fragement" we use empty tags ,"<></>" </div>
  </>
  )
}

export default FragmentsExample */
/*Props*/
/*Props for Functions
function ExampleForProps(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </div>   
  )
}

export default ExampleForProps*/
/*Props for class components*/
import React from "react";
class PropsExampleForClassComponents extends React.Component {
  render(){
    return (
      <>
          <h1>{this.props.name}</h1>
          <h2>{this.props.age}</h2>
      </>

    )
  }
}

export default PropsExampleForClassComponents