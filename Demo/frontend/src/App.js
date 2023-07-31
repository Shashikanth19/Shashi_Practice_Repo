import './App.css';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Customer } from './Customer';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import moment from 'moment';

function Header2() {
  return(
    <>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/customer'>Customer</Link></li>
      </ul>
    </>
  )
}

function App() {
  const date = Date();
  return (
    <>
    <BrowserRouter>
    <h1>Today date is {moment(date).format("DD/MM/YYYY")}</h1>
    <Header2></Header2>
      <Routes>
        <Route path='/' element={<Home></Home>} >Home</Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/customer' element={<Customer />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
