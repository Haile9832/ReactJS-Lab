import { Navbar, NavbarBrand } from 'reactstrap'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Hello ae</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;