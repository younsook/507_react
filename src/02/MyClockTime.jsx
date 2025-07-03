
import { useState, useEffect } from "react"
function MyClockTime () {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(()=>{
        const tm = setInterval(()=>{
            setCurrentTime(new Date);
        }, 1000);

        return(()=>{
            clearInterval(tm);
        });
    })
    return(
        <div className='text-2xl font-bold'>
           현재시각  : {new Date().toLocaleTimeString()}        
        </div>
        
    )
}
export default MyClockTime
