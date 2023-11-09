import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage'
import WatchHistory from './pages/WatchHistory'
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
    <Header/>
    <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/watch-history' element={<WatchHistory/>}/>
    </Routes>
    <Footer/>
  

    </div>
  );
}

export default App;
