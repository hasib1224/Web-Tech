
import { BrowserRouter, Routes, Route, createBrowserRouter,useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import Homepage from './components/Homepage.js';
import AdminProfile from './components/ComMember.js';
import LogIn from './components/LogIn.js';
import SplOne from './components/SplOne.js';
import SplTwo from './components/SplTwo.js';
import Footer from './components/Footer';
import StuProfile from './components/StuProfile.js';
import TeachProfList from './components/TeachProfList.js';
import EditInfo from './components/StuEditInfo.js';
import ManagerMark from './components/ManagerMark.js';
import ManagerProfile from './components/ManagerProfile.js'
import markingCont from './components/ManagerMark';


function App() {
  // const navi=useNavigate();
  return (
   
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route exact path="/login" element={<LogIn/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/admin" element={<AdminProfile/>}/>
              {/* <Route path="/SplOne" element={<Info/>}/> */}
              <Route path="/SplOne" element={<SplOne/>}/>
              <Route path="/SplTwo" element={<SplTwo/>}/>
              <Route path="/stuProfile" element={<StuProfile/>}/>

              {/* <Route path="/teachProfile" element={<Teachprofile/>}/> */}

              <Route path="/teachInfo" element={<TeachProfList/>}/>
              <Route path="/editInfo" element={<EditInfo/>}/>
              <Route path="/ManagerMark" element={<ManagerMark/>}/>
              <Route path="/ManagerProfile" element={<ManagerProfile/>}/>
              
            


            </Routes>
        </BrowserRouter>
        {/* <Footer/> */}
      </header>
    </div>
  );
}

export default App;



