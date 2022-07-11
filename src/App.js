import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes'

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Hello ae</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes = {DISHES}/>
    </div>
  );
}

export default App;
