import React from 'react';
import ReactDOM from 'react-dom/client';

/*//Examples for reder("string , variable")
let root = ReactDOM.createRoot(document.getElementById('root'));

let menu = (<ul>
    <li>Home</li>
    <li>About</li>
</ul>)

root.render(menu);*/
/*functional and class components
let root = ReactDOM.createRoot(document.getElementById('root'));

function First() {
    let menu = [
        " shashi ",24
    ]
    return (
        <ul>
            <li>Haii</li>
            <li>what is your name and age = {menu}</li>
        </ul>
    )
}

class Second extends React.Component {
    render() {
        return(
        <ul>
            <li>Haii</li>
            <li>what is your name and age</li>
        </ul>
        )
    }
}

root.render(<Second />)*/
/*Imports and Exports for variable and functions (named and default exports)
import { details } from './App';//Named Export of ref variables
import obj from './App';//Default Export of ref variables
import { First } from './funcationalExportExamples' ;//funcation export named
import Second from './funcationalExportExamples';//function export default

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <First />    
)*/
/*jsx attributes and expressions
import './index.css'

let root = ReactDOM.createRoot(document.getElementById('root'));

function ThirdFunction(){
    return(
        <div>
            <h1 id='first1'>This is an first example for JSX ATTRIBUTES</h1>
            <h1 className='second1'>This is an first example for JSX ATTRIBUTES</h1>
            {2*5}
        </div>
    )   
}

root.render(
    <ThirdFunction></ThirdFunction>
)*/
/*CSS styles in JSX external internal inline
import './index.css' 
let root = ReactDOM.createRoot(document.getElementById('root'));

function Styles(){

    let internalCSS = {
        backgroundColor:'black',
        color:'green'
    }

    return(
        <div>
            <h1 className='externalCSS'>This is an example for external CSS </h1>
            <h1 style={internalCSS}>This is an example for internal CSS </h1>
            <h1 style={{color:'red'}}>This is an example for inline CSS</h1>
        </div>
    )
}
root.render(
    <Styles />
)*/
/*props concept in react*/
import App from './App'
let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
);


