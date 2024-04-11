import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated } from '../Redux/Slices/AuthSlice';
import Section1 from '../Pages/Home/Section1';
import Section2 from '../Pages/Home/Section2';
import Section3 from '../Pages/Home/Section3';
import Section4 from '../Pages/Home/Section4';
import Section5 from '../Pages/Home/Section5';

const Home = () => {


  return (
    <div>
      {/* Main Page Section 1 */}
      <Section1/>

      {/* Slider page Section 2 */}
      <Section2/>

      {/* Specfication Section 3 */}
      <Section3/>

      {/* All shoes  section 4 */}
      <Section4/>

      {/* Customise shoes section 5 */}
      <Section5/>
    </div>
  );
};

export default Home;
