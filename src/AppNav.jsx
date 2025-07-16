import { Link } from 'react-router-dom'

export default function AppNav() {
  return (
    <div className='flex justify-center items-center'>
       <Link to="/">
            <div className="p-2 m-1 font-bold text-xs border-amber-950 rounded bg-amber-50 
            hover:bg-amber-500">
                MyClock2
            </div>
        </Link>
        <Link to="/lotto">
            <div className="p-2 m-1 font-bold text-xs border-amber-950 rounded bg-amber-50 
            hover:bg-amber-500">
                Lotto5
            </div>
        </Link>
         <Link to="/food">
            <div className="p-2 m-1 font-bold text-xs border-amber-950 rounded bg-amber-50 
            hover:bg-amber-500">
                FoodMain6
            </div>
        </Link>
        <Link to="/box">
            <div className="p-2 m-1 font-bold text-xs border-amber-950 rounded bg-amber-50 
            hover:bg-amber-500">
                BoxOffice9
            </div>
        </Link>
        <Link to="/treaffic">
            <div className="p-2 m-1 font-bold text-xs border-amber-950 rounded bg-amber-50 
            hover:bg-amber-500">
                Treaffic10
            </div>
        </Link>
        <Link to="/gallery">
            <div className="p-2 m-1 font-bold text-xs border-amber-950 rounded bg-amber-50 
            hover:bg-amber-500">
                Gallery12
            </div>
        </Link>
        <Link to="/festival">
            <div className="p-2 m-1 font-bold text-xs border-amber-950 rounded bg-amber-50 
            hover:bg-amber-500">
                Festival13
            </div>
        </Link>
        <Link to="/fcst">
            <div className="p-2 m-1 font-bold text-xs border-amber-950 rounded bg-amber-50 
            hover:bg-amber-500">
                Fcst예보15
            </div>
        </Link>
        <Link to="/divMain">
            <div className="p-2 m-1 font-bold text-xs border-amber-950 rounded bg-amber-50 
            hover:bg-amber-500">
                div16
            </div>
        </Link>
        <Link to="/div2">
            <div className="p-2 m-1 font-bold text-xs border-amber-950 rounded bg-amber-50 
            hover:bg-amber-500">
                div17
            </div>
        </Link>
    </div>
  )
}

