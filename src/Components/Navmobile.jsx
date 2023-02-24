import React, { useRef, useState, useEffect } from 'react'
import '../Styles/ComponentsStyles/Navmobile.css'
import Logo from '../Assets/logo_final.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
function Navmobile() {
    const sidenavref = useRef()
    const [open, setopen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const homeref = useRef(null)
    const timelineref = useRef(null)
    const aboutref = useRef(null)
    const contactref = useRef(null)
    const eventref = useRef(null)
    const webref = useRef(null)
    const commiteeref = useRef(null)
    const hintref = useRef(null)
    const linkxref = useRef(null)
    const sociallinksref = useRef(null)
    const clickhandler = () => {
        sidenavref.current.classList.toggle('activeo')
        setopen(!open)
        if (open) {
            linkxref.current.style.display = "none"
            sociallinksref.current.style.display = "none"
        }
        else {
            setTimeout(() => {
                linkxref.current.style.display = "flex"
                sociallinksref.current.style.display = "block"
            }, [500])

        }
    }
    const closenav = () => {
        clickhandler()
    }
    const clearActive = () => {
        homeref.current.classList.remove('active')
        aboutref.current.classList.remove('active')
        contactref.current.classList.remove('active')
        eventref.current.classList.remove('active')
        webref.current.classList.remove('active')
        commiteeref.current.classList.remove('active')
        timelineref.current.classList.remove('active')

    }
    useEffect(() => {
        if (location.pathname === "/") {
            clearActive()

            homeref.current.classList.add("active")
            hintref.current.innerHTML = "Scroll"
            hintref.current.addEventListener("click", () => {

            })

        }
        else if (location.pathname.includes("/events")) {
            clearActive()

            eventref.current.classList.add("active")
            if (location.pathname === "/events") {
                hintref.current.innerHTML = "Web devs"
                hintref.current.addEventListener("click", () => {
                    navigate("/web_devs")
                })
            }
            else {
                hintref.current.innerHTML = "Back"
                hintref.current.addEventListener("click", () => {
                    navigate("/events")
                })
            }
        }
        else if (location.pathname === "/about_us") {

            clearActive()
            aboutref.current.classList.add("active")
            hintref.current.innerHTML = "Events"
            hintref.current.addEventListener("click", () => {
                navigate('/events')
            })
        }
        else if (location.pathname === "/contact_us") {
            clearActive()

            contactref.current.classList.add("active")
            hintref.current.innerHTML = "To top"
            hintref.current.addEventListener("click", () => {
                navigate("/")
            })
        }
        else if (location.pathname === "/events") {
            clearActive()

            eventref.current.classList.add("active")
            hintref.current.innerHTML = "Timeline"
            hintref.current.addEventListener("click", () => {
                navigate("/timeline")
            })
        }
        else if (location.pathname === "/timeline") {
            clearActive()

            timelineref.current.classList.add("active")
            hintref.current.innerHTML = "Web devs"
            hintref.current.addEventListener("click", () => {
                navigate("/web_devs")
            })
        }
        else if (location.pathname === "/web_devs") {
            clearActive()

            webref.current.classList.add("active")
            hintref.current.innerHTML = "Committee"
            hintref.current.addEventListener("click", () => {
                navigate("/commitee")
            })

        }

        else if (location.pathname === "/commitee") {
            clearActive()
            commiteeref.current.classList.add("active")
            hintref.current.innerHTML = "Contact us"
            hintref.current.addEventListener("click", () => {
                navigate("/contact_us")
            })
        }
        else {
            clearActive()
        }
    }, [location])
    return (
        <>
            <div>
                <div className='sidenav' ref={sidenavref}>
                    <div className='close-btn-x' onClick={closenav}>
                        <i class="fas fa-times"></i>
                    </div>
                    <div className='hint' ref={hintref}></div>

                    <div className='linkx' ref={linkxref}>
                        <Link to="/" ref={homeref} className=" navbar-linkx" id="Home-link">       <i className="fa fa-home"></i><span>Home</span></Link>
                        <Link to="about_us" ref={aboutref} id="about_us" className="navbar-linkx"><i className="fa fa-info-circle"></i><span>About us</span></Link>
                        <Link to="events" ref={eventref} className=" navbar-linkx"> <i className="fa fa-calendar-minus"></i><span>Events</span></Link>
                        <Link to="timeline" ref={timelineref} className=" navbar-linkx"> <i className="fa fa-calendar-check"></i><span>Timeline</span></Link>
                        <Link to="web_devs" ref={webref} className="navbar-linkx"><i className="fa fa-wifi"></i><span>Web devs</span></Link>
                        <Link to="commitee" ref={commiteeref} className=" navbar-linkx"><i className="fa fa-users"></i><span>Commitee</span></Link>
                        <Link to="contact_us" ref={contactref} className=" navbar-linkx"><i className="fa fa-headset"></i><span>Contact Us</span></Link>
                    </div>
                    <div>
                        <div className="social-linksx" ref={sociallinksref}>
                            <a href='https://www.instagram.com/cryptera_2k22/' style={{ padding: "10px" }}>
                                <i class="fab fa-instagram"></i>
                            </a>


                            <a style={{ padding: "10px" }} href="https://www.youtube.com/channel/UCsiIbEbaefrwPFmJ_cxwoJg">
                                <i class="fab fa-youtube" ></i>
                            </a>
                            <a style={{ padding: "10px" }} href="mailto:cryptera.cit@gmail.com">
                                <i class="fa-solid fa-envelope"></i>
                            </a>


                        </div>
                    </div>

                </div>
            </div>
            <div className='nav-mobile'>

                <div className='logo-x'>
                    <img src={Logo} alt='logo' />
                </div>
                <div onClick={clickhandler} className='close-btn'>
                    Menu
                    {/* <i class="fas fa-bars"></i> */}
                </div>

            </div>
        </>
    )
}

export default Navmobile
