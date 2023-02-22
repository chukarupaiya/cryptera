import React, { useState } from 'react'
import '../../Styles/ContactUs.css'
import Faq from '../Faq'
import Faq_data from '../../Data/Faqs_main'
import {db} from '../../App'
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import Button from '../Button'
function ContactUs() {
    const [name, setname] = useState("")
    const [college, setcollege] = useState("")
    const [email, setemail] = useState("")
    const [mobile, setmobile] = useState("")
    const [question, setquestion] = useState("")

    const submit = async () => {
        if (!(name && college && email && mobile && question)) {
            alert("All fields are mandatory")
        }
        // validations
        try {
            const docRef = await addDoc(collection(db, "queries"), {
                name,
                email,
                mobile,
                question,
                college,
                replied:false
            });
          
            console.log("Document written with ID: ", docRef.id);
            alert("Success")
            
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        
    }
    return (
        <div className='support' >

            <div className='support-container'>
                <div>

                </div>
                <h1 className='support-header'>
                    <div>Support</div>
                    <div className='mobile-containe' style={{backgroundColor:"var(--fg-green)",width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",padding:"10px",borderRadius:"500px"}}>
                <a href='tel:+91 8870499146'>
                <i className='fa fa-phone'></i>
                </a>
               
            </div>
                    </h1>
                <div className='support-content'>
                    Hello,I am <input placeholder='Your name' onChange={e=>setname(e.target.value) } value={name} /> from <input placeholder='Institution name' onChange={e=>setcollege(e.target.value)} value={college} />.You can email me at <input placeholder='Mail id' value={email} onChange={e=>setemail(e.target.value)} /> or reach me on <input placeholder='Mobile Number' value={mobile}onChange={e=>setmobile(e.target.value)} />.
                    <br /><div className='txt-content' onChange={e=>setquestion(e.target.value)} value={question}>I have some questions about <textarea className='text-area' />.</div>
                </div>
                <div className='submit' onClick={submit}>
                    <div>SUBMIT</div>
                </div>

            </div>
           
        </div>
    )
}

export default ContactUs
