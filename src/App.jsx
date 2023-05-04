import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Series from './pages/Series';
import Movies from './pages/Movies';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/movies' element={<Movies/>}/>
      </Routes>
      <Footer/>
    </>
    
  );
}

export default App;
