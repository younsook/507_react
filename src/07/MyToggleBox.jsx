import TailButtonLine from "../component/TailButtonLine"
import { useState } from "react"

export default function MyToggleBox({color}) {
    const [flag, setFlag] = useState(false);
    const bg ={
        'blue' : "bg-blue-400",
        'orange' : "bg-orange-400",
        'lime' : "bg-lime-400"
    }
    const handleToggle =() => {
        console.log(color)
        setFlag(!flag);
    }
  return (
    <div className={`w-8/10 h-60 
            flex flex-col items-center justify-center
            ${flag && bg[color]}`}>
        
        <div className={`font-bold mb-2 
            ${flag ? "text-white" : "text-black"}
            text-lg`}>{color}</div>
        <TailButtonLine caption="blue Toggle"
            color ={color}
            onHandle={handleToggle} />
    </div>

    // <div className="flex w-screen h-50">  
    //   <div className="w-1/2 bg-blue-500 flex flex-col items-center justify-center mx-4">
    //     <div className="mb-2 text-white text-lg">Blue</div>
    //     <button className="bg-blue-800 text-white px-4 py-2 rounded">
    //       Blue Toggle
    //     </button>
    //   </div>
      
    //   <div className="w-1/2 bg-orange-500 flex flex-col items-center justify-center mx-4">
    //     <div className="mb-2 text-white text-lg">Orange</div>
    //     <button className="bg-orange-800 text-white px-4 py-2 rounded">
    //       Orange Toggle
    //     </button>
    //   </div>
    // </div>
    
  )
}
