import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Navbar/>
            <Routes>
                  <Route path='/' element={<Home/>}/>
            </Routes>
            <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
