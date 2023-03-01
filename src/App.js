import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AnimatedCursor from 'react-animated-cursor';
//Components
import Navbar from './Components/Navbar';
import events from '../src/Data/events';
//Screens
import Home from './Components/Screens/Home';
import AboutUs from './Components/Screens/AboutUs';
import ContactUs from './Components/Screens/ContactUs';
import WebDevs from './Components/Screens/WebDevs';
import Commitee from './Components/Screens/Commitee';
import Events from './Components/Screens/Events';
import Timelinex from './Components/Screens/Timelinex'
import Eventdetails from './Components/Screens/Eventdetails';
import Navmobile from './Components/Navmobile';
import Queries from './Components/Screens/Queries';
import Main1 from './Components/Screens/Main1';
import Main from './Components/Screens/Main';
import Update_event from './Components/Screens/Update_event';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getevent_details_data } from './Data/events_data';

const firebaseConfig = {
  apiKey: "AIzaSyAB6MUbw1OJO_VXop1O92i_RbUxAMvyazg",
  authDomain: "cryptera-web.firebaseapp.com",
  projectId: "cryptera-web",
  storageBucket: "cryptera-web.appspot.com",
  messagingSenderId: "548057915197",
  appId: "1:548057915197:web:4b93397c73a160cdf76f54"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export {db}

function App() {
  const [flag,setflag]=useState(true)
  useEffect(async () => {
    const getdata = async () => {
      let event_details=events
      // console.log(event_details)
      localStorage.setItem("event_details", JSON.stringify(event_details))
   
    }
    await getdata()
    getevent_details_data()
    return () => {
      localStorage.removeItem("event_details")
    }
  }, [])
  const movetohomepage=()=>{
    setflag(false)
  }
  if (flag && window.innerWidth>1150){
    return(
      <Main1 movetohomepage={movetohomepage}/>
    )
  }
  return (
    <div className='main-container'>

      {/* <AnimatedCursor
        innerSize={12}
        outerSize={12}
        color="36,180,126"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={3}
      /> */}
      <BrowserRouter>
        {console.log(window.innerWidth)}
        {window.innerWidth > 1150 ? <Navbar /> : <Navmobile />}

        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about_us" element={<AboutUs />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/timeline" element={<Timelinex/>}></Route>
            <Route path="/web_devs" element={<WebDevs />}></Route>
            <Route path="/commitee" element={<Commitee />}></Route>
            <Route path="/contact_us" element={<ContactUs />}></Route>
            <Route path="/events/:name" element={<Eventdetails />}></Route>
            <Route path='/access_code_8870' element={<Queries/>}></Route>
            <Route path='/access_code_8870499146_ji' element={<Update_event/>}></Route>

          </Routes>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;