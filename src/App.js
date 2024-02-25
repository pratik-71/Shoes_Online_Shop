
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Section2 from './Pages/Home/Section2';
import Sign_in from './Pages/Login_pages/Sign_in';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='special_edition' element={<Section2/>}></Route>
    <Route path='/Sign_in' element={<Sign_in/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
