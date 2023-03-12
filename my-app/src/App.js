// import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
// import roar from  './components/roar';


// export default function App() {
//   return (
//     <>
    
//     <Router>
//       <Routes>
//         <Route path="/" component={<roar/>}/>
//       </Routes>
      
//     </Router>
//     </>
//   );
// }



import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import Homepage from './components/Homepage.js';
// import Homepage from './Dashboard/Homepage.js';
// import FindNursery from './Services/FindNursery/FindNursery.js';
// import PlantInfo from './Services/PlantInfo/PlantInfo.js';
import LogIn from './components/LogIn.js';
import NavBar from './components/NavBar';

// const route = createBrowserRouter([
//   {
//     path: "/roar",
//     element: <roar/>,
// },
// ]);

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <NavBar/>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/login" element={<LogIn/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;


