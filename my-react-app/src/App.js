
import { BrowserRouter, Routes, Route, createBrowserRouter,useNavigate } from 'react-router-dom';
import Form from './Form.js'
import Calculator from './Component/StateLifting/Calculator.js';
import Text from './Component/Inheritence/Text.js';
import Emoji from './Component/Composition/Emoji.js';
import Decoration from './Component/Composition/Decoration.js';
import ShowCount from './Component/HigherOrderCom/ShowCount.js';
import ShowCoun from './Component/HigherOrderCom/HOC/ShowCoun.js';
// import Show from './Component/RenderProps/Show.js';
import Show from './Component/ContextAPI/Show.js';




function App() {
  return (

    <div className="App">
    <header className="App-header">
      
      <BrowserRouter>
          <Routes>
          {/* <Route path="/" element={<Form/>}/> */}
          {/* <Route path="/" element={<Calculator/>}/> */}
          {/* <Route path='/' element={<Text/>}/> */}
          {/* <Route path='/' element={< Decoration/>}/> */}
          {/* <Route path='/' element={<ShowCount/>}/> */}
          {/* <Route path='/' element={<ShowCoun/>}/> */}
          <Route path='/' element={<Show/>}/>


          </Routes>
      </BrowserRouter>

      </header>
    </div>
    
  );
}

export default App;
