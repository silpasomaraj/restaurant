import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RestView from './pages/RestView';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/restaurant-view/:id" element={<RestView/>}></Route>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
