

export default function TailButton({caption, color, onHandle}) {
    const bg = {
        "blue" : "bg-blue-800",
        "orange" : "bg-orange-800",
        "lime" : "bg-lime-800",
    }
  return (
   
      <button className={`p-5 rounded-xl text-white
            hover:cursor-pointer hover:font-bold bg-amber-800
             ${bg[color]}`}>
        {caption}
      </button>
    
  )
}
