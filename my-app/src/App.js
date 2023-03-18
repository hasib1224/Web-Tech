
import { BrowserRouter, Routes, Route, createBrowserRouter,useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import Homepage from './components/Homepage.js';

import LogIn from './components/LogIn.js';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  // const navi=useNavigate();
  return (
   
    <div className="App">
      <header className="App-header">
        <Nav/>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route exact path="/login" element={<LogIn/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
      </header>
    </div>
  );
}

export default App;



