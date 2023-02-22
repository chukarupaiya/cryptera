import React, { useEffect, useState } from 'react'
import { db } from './../../App'
import { getFirestore, collection, getDocs, addDoc ,setDoc,doc} from "firebase/firestore";
function Update_event() {
    const [data,setData]=useState([])
    useEffect(()=>{
        const temp=localStorage.getItem("event_details")
        const event_details=JSON.parse(temp)
        setData(event_details)
    },[])
    return (
        <div className='support'>
            <div className='titley' style={{marginTop:"90px"}}>
                Events
            </div>
            {
                data && data.map((event,index)=>{
                    return(
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",maxWidth:"80%",borderBottom:"2px solid white",paddingBottom:"30px"}}>
                        <div>{index+1}.{event.name}</div>
                        <span style={{padding:"10px 20px",borderRadius:"9px",backgroundColor:"var(--fg-green)"}}>Edit</span>
                        </div>
                    )
                })
            }
            <div style={{position:"absolute",right:"20px",bottom:"20px"}}>
            <button style={{border:"3px solid var(--fg-green)",padding:"10px 20px",borderRadius:"9px"}}>
                Create new
            </button>
            </div>
        </div>
    )
}

export default Update_event
