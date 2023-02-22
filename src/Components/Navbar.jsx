
import React, { useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { version } from 'react/cjs/react.production.min'
import '../Styles/ComponentsStyles/Navbar.css'
function Navbar() {
    const location = useLocation()
    const navigate = useNavigate()
    const homeref = useRef(null)
    const aboutref = useRef(null)
    const contactref = useRef(null)
    const eventref = useRef(null)
    const webref = useRef(null)
    const commiteeref = useRef(null)
    const hintref = useRef(null)
    const navbarref=useRef(null)
    const timelineref=useRef(null)
    const clearActive = () => {
        homeref.current.classList.remove('active')
        aboutref.current.classList.remove('active')
        contactref.current.classList.remove('active')
        eventref.current.classList.remove('active')
        webref.current.classList.remove('active')
        commiteeref.current.classList.remove('active')
        timelineref.current.classList.remove('active')

    }
    useEffect(()=>{
        window.addEventListener("mouseover",(event)=>{
            if(event.clientX> window.innerWidth/3){
                navbarref.current.style.width="20px"

            }
            else{
                navbarref.current.style.width="100%"
            }
        })
        
    },[])
    useEffect(() => {
        if (location.pathname === "/") {
            clearActive()
            homeref.current.classList.add("active")
            // hintref.current.innerHTML = "Scroll"
            // hintref.current.addEventListener("click", () => {

            // })

        }
        else if (location.pathname.includes("/events")) {
            clearActive()
            eventref.current.classList.add("active")
            // if(location.pathname=== "/events"){
            //     hintref.current.innerHTML = "Web devs"
            //     hintref.current.addEventListener("click", () => {
            //         navigate("/web_devs")
            //     })
            // }
            // else{
            //     hintref.current.innerHTML = "Back"
            //     hintref.current.addEventListener("click", () => {
            //         navigate("/events")
            //     })
            // }
        }
        else if (location.pathname === "/about_us") {
            clearActive()
            aboutref.current.classList.add("active")
            // hintref.current.innerHTML = "Events"
            // hintref.current.addEventListener("click", () => {
            //     navigate('/events')
            //})
        }
        else if (location.pathname === "/contact_us") {
            clearActive()
            contactref.current.classList.add("active")
            // hintref.current.innerHTML = "To top"
            // hintref.current.addEventListener("click", () => {
            //     navigate("/")
            // })
        }
        else if (location.pathname === "/events") {
            clearActive()
            eventref.current.classList.add("active")
            // hintref.current.innerHTML = "Timeline"
            // hintref.current.addEventListener("click", () => {
            //     navigate("/timeline")
            // })
        }
        else if (location.pathname === "/timeline"){
            clearActive()
            timelineref.current.classList.add("active")
            // hintref.current.innerHTML = "Web devs"
            // hintref.current.addEventListener("click", () => {
            //     navigate("/web_devs")
            // })
        }
        else if (location.pathname === "/web_devs") {
            clearActive()
            webref.current.classList.add("active")
            // hintref.current.innerHTML = "Committee"
            // hintref.current.addEventListener("click", () => {
            //     navigate("/commitee")
            // })

        }

        else if (location.pathname === "/commitee") {
            clearActive()
            commiteeref.current.classList.add("active")
            // hintref.current.innerHTML = "Contact us"
            // hintref.current.addEventListener("click", () => {
            //     navigate("/contact_us")
            // })
        }
        else {
            clearActive()
        }
    }, [location])

    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={require('../Assets/logo_final.png')} alt="logo" />
            </div>
            <div className='navbar-links' ref={navbarref} >
                <Link to="/" ref={homeref} className="active navbar-link" id="Home-link">       <i className="fa fa-home"></i><span>Home</span></Link>
                <Link to="about_us" ref={aboutref}  className="navbar-link" id="about_us-link"><i className="fa fa-info-circle"></i><span>About us</span></Link>
                <Link to="events" ref={eventref} className=" navbar-link"> <i className="fa fa-calendar-minus"></i><span>Events</span></Link>
                <Link to="timeline" ref={timelineref} className="navbar-link"> <i className="fa fa-calendar-check"></i><span>Timeline</span></Link>
                <Link to="web_devs" ref={webref} className="navbar-link"><i className="fa fa-wifi"></i><span>Web devs</span></Link>
                <Link to="commitee" ref={commiteeref} className=" navbar-link"><i className="fa fa-users"></i><span>Commitee</span></Link>
                <Link to="contact_us" ref={contactref} className=" navbar-link"><i className="fa fa-headset"></i><span>Contact Us</span></Link>

            </div>
            <div className='bottom-special' ref={hintref}>
                
            </div>
        </div>
    )
}

export default Navbar
