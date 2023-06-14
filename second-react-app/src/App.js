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
}