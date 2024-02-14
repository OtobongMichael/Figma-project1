import React from 'react'
import Navbar from './Component/NavBar'
import Navbar2 from './Component/NavBar2'
import Header from "./Component/Header"
import Section from "./Component/Section"
import Filterbar from './Component/Filterbar'
import chart from './assets/Images/Chart2.png';
import chart2 from './assets/Images/Chart1.png';
import chart3 from './assets/Images/Chart3.png';
import Tables from "./Component/Tables"







function App() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Header />
      <div className='flex px-[6rem] gap-[5.4rem] ml-[2rem]'>
      <Section title="Total Customer" amount="2,400" percent="40%"  img={chart} color="text-green-500" />
      <Section title="Members" amount="1,210" percent="10%" img={chart2} color="text-red-500"/>
      <Section title="Active now" amount="316" percent="20%" img={chart3} color="text-green-500"/>
      </div>
      <Filterbar/>
      <Tables/>
      
    </div>
  )
}

export default App