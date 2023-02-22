import React, { useRef, useState } from 'react'

function Faq({data}) {
    const iconref=useRef(null)
    const questionref=useRef(null)
    const [open, setopen] = useState(false)
    const toggleanswer = (e) => {
        setopen(!open)
        iconref.current.classList.toggle('rotate')
        if(!open){
            questionref.current.style.color="var(--fg-green)"
        }else{
            questionref.current.style.color="var(--fg-white)"
        }
    }
    return (
        <div className="faq-card" >
            <div className="faq-question" onClick={toggleanswer} ref={questionref}>
                <div>
                   {data.question}
                </div>
                <div className='down-icon' ><i class="fas fa-chevron-down" ref={iconref}></i></div>
            </div>
            {
                open &&
                <div className="faq-answer">
                    {data.answer}
                </div>
            }


        </div>
    )
}

export default Faq
