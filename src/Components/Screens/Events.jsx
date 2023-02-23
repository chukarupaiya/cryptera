import React, { useRef, useState, useEffect } from 'react'
import Eventcard from '../Eventcard'
import '../../Styles/Events.css'
import { useNavigate } from 'react-router-dom'
function Events() {
    console.log()
    const navigate = useNavigate()
    const [curr, setcurr] = useState(0)
    const technicalref = useRef(null)
    const nontechnicalref = useRef(null)
    const flagshipref = useRef(null)
    const bodyref = useRef(null)
    const greenrightref = useRef(null)
    const greenleftref = useRef(null)
    const [event_data, seteventdata] = useState([])
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("event_details"))
        seteventdata(data)
        console.log(data)
    }, [])

    let h = 0
    let i = 0
    const scrollhandler = (event) => {

        console.log(bodyref.current.scrollLeft,
            bodyref.current.scrollWidth,
            bodyref.current.offsetWidth)
        bodyref.current.scrollLeft += event.deltaY
        if (event.deltaY < 0) {
            h = 0
            greenrightref.current.style.width = "0px"
            if (bodyref.current.scrollLeft == 0) {
                i += 3
                greenleftref.current.style.width = `${i}px`
                if (i > 60) {
                    greenleftref.current.style.width = "0px"
                    if (curr == 0) {
                        return navigate("/about_us")
                    }
                    else if (curr == 1) {
                        technicalref.current.click()
                        bodyref.current.scrollLeft = 0
                        return setcurr(0)
                    }
                    else if (curr == 2) {
                        nontechnicalref.current.click()
                        bodyref.current.scrollLeft = 0
                        return setcurr(1)
                    }
                }
            }
        }
        else {
            i = 0
            greenleftref.current.style.width = "0px"
            if (bodyref.current.offsetWidth + bodyref.current.scrollLeft >= bodyref.current.scrollWidth - 10) {
                h += 3
                console.log(h)
                greenrightref.current.style.width = h + 'px'
                if (h > 60) {
                    greenrightref.current.style.width = '0px'
                    if (curr == 0) {
                        nontechnicalref.current.click()
                        bodyref.current.scrollLeft = 0
                        return setcurr(1)
                    }
                    if (curr == 1) {
                        flagshipref.current.click()
                        bodyref.current.scrollLeft = 0
                        return setcurr(2)
                    }
                    navigate('/timeline')
                }
            }

        }

    }

    const clearstyles = () => {
        nontechnicalref.current.style.color = "transparent"
        flagshipref.current.style.color = "transparent"
        technicalref.current.style.color = "transparent"
        technicalref.current.classList.remove("activex")
        nontechnicalref.current.classList.remove("activex")
        flagshipref.current.classList.remove("activex")
    }
    const technicalclick = () => {
        clearstyles()
        setcurr(0)
        technicalref.current.style.color = "var(--fg-white)"
        technicalref.current.classList.add("activex")
    }
    const nontechnicalclick = () => {
        clearstyles()
        setcurr(1)
        nontechnicalref.current.style.color = "var(--fg-white)"
        nontechnicalref.current.classList.add("activex")
    }
    const flagshipclick = () => {
        clearstyles()
        setcurr(2)
        flagshipref.current.style.color = "var(--fg-white)"
        flagshipref.current.classList.add("activex")
    }
    return (
        <div className="events" onWheel={scrollhandler} >
            {/* <div className='add-green-vertical right-fixed bg-gradient-to-tr from-green-600 to-green-300 ' ref={greenrightref} />
            <div className='add-green-vertical left-fixed bg-gradient-to-tr from-green-600 to-green-300 ' ref={greenleftref} /> */}


            <div className='events-header'>
                <h1 ref={technicalref} onClick={technicalclick} className='activex'>Technical </h1>
                <h1 ref={nontechnicalref} onClick={nontechnicalclick} >Non-Technical</h1>
                <h1 ref={flagshipref} onClick={flagshipclick}>Flagship</h1>
            </div>

            <div className='events-body' ref={bodyref} >
                
                {
                    event_data.map((data, index) => {
                        console.error(data.type)
                        console.error(curr)
                        if (data.type === "technical" && curr === 0
                            || data.type === "non_technical" && curr == 1
                            || data.type === "flagship" && curr == 2
                        ) {
                            return (
                                <Eventcard primary={data.color} data={data} key={index} />
                            )
                        }
                        else {
                            return true
                        }
                    })
                }

                <div className='px-10'></div>
            </div>
        </div>
    )
}

export default Events

const Technical = () => {
    return (
        <div className="technical">
            Technical
        </div>
    )
}

const Nontechnical = () => {
    return (
        <div>
            Non technical
        </div>
    )
}
export { Technical, Nontechnical }