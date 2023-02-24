import React, { useEffect, useRef } from 'react'
import '../../Styles/Home.css'
import * as LottiePlayer from '@lottiefiles/lottie-player'
import { Navigate, useNavigate } from 'react-router-dom'
import Button from '../../Components/Button'
import r from "../Rocket.json";
function Home() {
    const navigator = useNavigate()
    const [flag, setFlag] = React.useState(false)
    const Homeref = useRef(null)
    const greenref = useRef(null)
    let h = 10
    const clickhandler = (e) => {
        navigator("/events")
    }
    const cursorhandler = (event) => {
        const screenwidth = window.innerWidth
        if (
            event.clientX > screenwidth / 2
        ) {
            // alert("Hello")
        }

    }
    const wheelhandler = (event) => {
        // console.log('wheel')
        // console.log(event.deltaY)
        if (event.deltaY < 0) {
            h = 0
            greenref.current.style.height = "0px"
        }
        else {
            if (Homeref.current.offsetHeight + Homeref.current.scrollTop >= Homeref.current.scrollHeight) {
                h += 3
                // console.log(h)
                greenref.current.style.height = h + 'px'
                if (h > 60) {
                    greenref.current.style.height = '0px'
                    navigator('/about_us')
                }
            }
        }

    }

    return (
        <div className='home main-section' id="Home" ref={Homeref} onWheel={wheelhandler}
            onMouseOver={cursorhandler} style={{ position: "relative" }}
        >
            <div className='mobile-container'>
                <a href='tel:+91 8870499146'>
                    <i className='fa fa-phone'></i>
                </a>
            </div>
            <div className='home-content'>
                <div className='home-content-text'>
                    <h1>A National level Technical Symposium conducted by CSE department of CIT.</h1>
                    {/* <div className='explore-btn'></div> */}
                    <div className='explore-btn'>
                        <Button text="Check out the Events" onClick={clickhandler} />
                    </div>

                </div>
                <div className='lottie'>
                    <lottie-player
                        autoplay
                        loop
                        mode="normal"
                        src="https://assets3.lottiefiles.com/packages/lf20_yogqMMhCr0.json"
                    ></lottie-player>
                </div>

            </div>
            {/* <div className='add-green bg-gradient-to-tr from-green-600 to-green-300 ' ref={greenref} /> */}





        </div>
    )
}

export default Home
