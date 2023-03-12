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
import Homepage from './components/Homepage.js';
// import Homepage from './Dashboard/Homepage.js';
// import FindNursery from './Services/FindNursery/FindNursery.js';
// import PlantInfo from './Services/PlantInfo/PlantInfo.js';
import Roar from  './components/Homepage.js';

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
        <BrowserRouter>
            <Routes>
              <Route path="/components" element={<Homepage/>}/>
            </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;


