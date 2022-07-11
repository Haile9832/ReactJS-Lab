import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/MenuComponent';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Hello ae</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
