// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';
import Navpage from './Components/Nav';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navpage/>
  <Home/>
  <Footer/> 
    </div>
  );
}

export default App;
