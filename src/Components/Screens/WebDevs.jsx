import React, { useRef } from 'react'
import '../../Styles/WebDevs.css'
import profile1 from '../../Assets/1905098.png'
import { useNavigate } from 'react-router-dom'
import web_devs_data from '../../Data/web_devs_data'
function WebDevs() {
    // console.log(web_devs_data)
    const navigate = useNavigate()
    const greenTopref = useRef(null)
    const greenBottomref = useRef(null)
    const contentref = useRef(null)
    let h = 10
    let i = 10
    const wheelhandler = (event) => {
        // console.log('wheel')
        // console.log(event.deltaY)
        if (event.deltaY < 0) {
            h = 0
            greenBottomref.current.style.height = "0px"
            // console.log(
            //     contentref.current.offsetHeight,
            //     contentref.current.scrollTop,
            //     contentref.current.scrollHeight
            // )
            if (contentref.current.scrollTop == 0) {
                i += 3
                greenTopref.current.style.height = `${i}px`
                if (i > 60) {
                    greenTopref.current.style.height = `0px`
                    navigate('/timeline')
                }
            }
        }
        else {
            greenTopref.current.style.height = "0px"
            i = 0
            if (contentref.current.offsetHeight + contentref.current.scrollTop >= contentref.current.scrollHeight) {
                h += 3
                // console.log(h)
                greenBottomref.current.style.height = h + 'px'
                if (h > 60) {
                    greenBottomref.current.style.height = '0px'
                    navigate('/commitee')
                }
            }

        }

    }
    return (
        <div className='webdevs' ref={contentref} onWheel={wheelhandler} >
            {/* <div className='add-green bg-gradient-to-tr from-green-600 to-green-300 ' ref={greenBottomref} />
            <div className='add-green top-fixed bg-gradient-to-tr from-green-600 to-green-300 ' ref={greenTopref} /> */}

            <div className='webdevs-container'>
                <div >
                    <h1 className='webdevs-title'>Web Developers</h1>
                    <p className='webdevs-tilte-description'>The team that is similar to the root of the tree</p>
                </div>
                <div className='content-container'>
                    {
                        web_devs_data.map((data, index) => {
                            return (
                                <Web_devs_card data={data} key={index} />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default WebDevs

const Web_devs_card = (props) => {

    return (
        <div className='web-card'>
            <div className='web-card-image'>
                <img src={props.data.profile} alt='webdevs-1' />
            </div>
            <div className='web-card-content'>
                <div className='name'>{props.data.name}</div>
                <div className='description'>{props.data.about}</div>
                <div className='media-container'>
                    {/* {
                        props.data.portfolio && <a href={props.data.portfolio} target="_blank" ><i class="fas fa-globe" ></i></a>
                    } */}
                    <a href={props.data.instagram} target="_blank" ><i class="fab fa-instagram" ></i></a>
                    <a href={props.data.github} target="_blank" >   <i class="fab fa-github" ></i> </a>
                    {/* {
                        props.data.medium && <a href={props.data.medium} target='_blank'><i class="fab fa-medium-m"></i></a>
                    } */}
                    <a href={props.data.linkedin} target="_blank">  <i class="fab fa-linkedin"  ></i>            </a>

                </div>
            </div>

        </div>
    )
}
