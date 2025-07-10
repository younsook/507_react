import { Link } from 'react-router-dom'

export default function AppNav() {
  return (
    <div className='flex justify-center items-center'>
       <Link to="/">
            <div className="p-2 m-1 font-bold  border-amber-950 rounded bg-amber-50 
            hover:bg-amber-500">
                MyClock
            </div>
        </Link>
        <Link to="/lotto">
            <div className="p-2 m-1 font-bold  border-amber-950 rounded bg-amber-50 
            hover:bg-amber-500">
                Lotto
            </div>
        </Link>
         <Link to="/food">
            <div className="p-2 m-1 font-bold  border-amber-950 rounded bg-amber-50 
            hover:bg-amber-500">
                FoodMain
            </div>
        </Link>
        <Link to="/box">
            <div className="p-2 m-1 font-bold  border-amber-950 rounded bg-amber-50 
            hover:bg-amber-500">
                BoxOffice
            </div>
        </Link>
        <Link to="/treaffic">
            <div className="p-2 m-1 font-bold  border-amber-950 rounded bg-amber-50 
            hover:bg-amber-500">
                Treaffic
            </div>
        </Link>
        <Link to="/gallery">
            <div className="p-2 m-1 font-bold  border-amber-950 rounded bg-amber-50 
            hover:bg-amber-500">
                Gallery
            </div>
        </Link>
        <Link to="/festival">
            <div className="p-2 m-1 font-bold  border-amber-950 rounded bg-amber-50 
            hover:bg-amber-500">
                Festival
            </div>
        </Link>
        <Link to="/fcst">
            <div className="p-2 m-1 font-bold  border-amber-950 rounded bg-amber-50 
            hover:bg-amber-500">
                일기예보
            </div>
        </Link>
    </div>
  )
}

