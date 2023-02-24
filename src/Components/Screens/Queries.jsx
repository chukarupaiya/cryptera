import React, { useEffect, useState } from 'react'
import { db } from './../../App'
import { getFirestore, collection, getDocs, addDoc ,setDoc,doc} from "firebase/firestore";
function Queries() {
    const [data, setData] = useState([])
    const repliedstatus=async(id)=>{
        await setDoc(doc(db, "queries", id), {
            replied:true
          },{merge:true});
        let temp=data
        temp.forEach(query=>{
            if (query.id === id){
                query.replied=true
            }
        })
     //   console.log(temp)
        setData(temp)
    }
    useEffect(async () => {
        const getdata = async () => {
            const querysnapshot = await getDocs(collection(db, "queries"))
            var queries = []
            querysnapshot.forEach(doc => {
                let temp={
                    ...doc.data(),
                    id:doc.id
                }
                queries.push(temp)
            })
            setData(queries)
          //  console.log(data)
        }
        getdata()
      //  console.log("hot")
    }, [])
    return (
        <div style={{ margin: "30px", marginTop: "90px" }}>
            <div className='titley'>Queries</div>
            <ul type='1' style={{ fontSize: "18px" }} className="descriptiony">
                {
                    data && data.map((query, index) => {
                        return (
                            <li key={index} style={{ marginBottom: "30px", borderBottom: "2px solid white", paddingBottom: "30px" }}>
                                <div >
                                    <div>{index}:</div>
                                    <span className='highlight'> Name:</span> {query.name}<br />
                                    <span className='highlight'> Email:</span> {query.email}<br />
                                    <span className='highlight'> Mobile:</span> {query.mobile}<br />
                                    <span className='highlight'> college:</span> {query.college}<br />
                                    <span className='highlight'> Question:</span> {query.question}<br />
                                    <span className='highlight'>Replied</span> <input type="checkbox" checked={query.replied} readOnly></input><br />
                                    <div style={{ margin: "10px" }}></div>
                                    {
                                        !query.replied
                                        &&
                                        <buttton onClick={()=>repliedstatus(query.id)} style={{ padding: "10px 20px", cursor: "pointer", backgroundColor: "var(--fg-green)", borderRadius: "4px" }}>Replied</buttton>
                                    }

                                </div>

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Queries
