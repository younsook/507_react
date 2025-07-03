

export default function TailButtonLine({caption, color, onHandle}) {
    const bg = {
        "blue" : "bg-blue-200",
        "orange" : "bg-orange-200",
        "lime" : "bg-lime-200",
    }

    const bgHover = {
        "blue" : "hover:bg-blue-300",
        "orange" : "hover:bg-orange-300",
        "lime" : "hover:bg-lime-300",
    }

    const bgBorder = {
        "blue" : "border-blue-800",
        "orange" : "border-orange-800",
        "lime" : "border-lime-800",
    }
  return (
   
      <button className={`mx-2 p-4 rounded-xl
        border text-black ${bgBorder[color]} font-bold
            hover:cursor-pointer hover:font-bold
             ${bg[color]} ${bgHover[color]}`}
             onClick={onHandle}>
        {caption}
      </button>
    
  )
}
