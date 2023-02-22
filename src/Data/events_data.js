
///type== technical || non_technical || flagship
var event_details_data=[]
const getevent_details_data=async()=>{
    const event_details=await JSON.parse(localStorage.getItem("event_details"))
    if (!event_details){
        return;
    }
    event_details_data=event_details
    
}
export {getevent_details_data}
export default event_details_data