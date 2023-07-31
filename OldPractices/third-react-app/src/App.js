/*export let details = ['shashi',24]; //Named Export
let navBar = {
    1:'home',
    2:'Work',
    3:'About'
}

export default navBar //Default Export*/
import User from './User';

function App(){
    return(
        <User name='shashi' age='24' />
    )
}

export default App ;
