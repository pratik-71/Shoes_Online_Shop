
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Section2 from './Pages/Home/Section2';
import Sign_in from './Pages/Login_pages/Sign_in';
import Sign_Up from './Pages/Login_pages/Sign_Up';
import Display_product from './Pages/Products/Products_details/Display_product';
import Products_skeleton from './Pages/All_products/Products_skeleton';
import Address_skeleton from './Pages/Address/Address_skeleton';



function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='special_edition' element={<Section2/>}></Route>
    <Route path='/Sign_in' element={<Sign_in/>}></Route>
    <Route path='/Sign_up' element={<Sign_Up/>}></Route>
    <Route path='/products' element={<Products_skeleton/>}></Route>
    <Route path='/product_details' element={<Display_product/>}></Route>
    <Route path='/address' element={<Address_skeleton/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
