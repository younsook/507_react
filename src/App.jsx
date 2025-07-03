
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GroupText from './01/GroupText'
import MyClock from './02/MyClock'
import MyList from './04/MyList'
import MyListItem from './04/MyListItem'
import TailBall from './component/TailBall'
import Lotto from './05/Lotto'
import FoodMain from './06/FoodMain'
import MyToggle from './07/MyToggle'
import MyEffect from './08/MyEffect'
import BoxOffice from './09/BoxOffice'

function App() {

  return (
    <div className='w-full xl:w-8/10 h-screen mx-auto
            flex flex-col justify-start items-start
           '>
      <header className='w-full min-h-20
            bg-amber-100
            flex justify-between items-center'>
       <div className='flex ml-10 '>
        <img src={reactLogo} alt='react'></img> +
        <img src={viteLogo} alt='vite'></img>  
        </div> 
        <GroupText />
      </header> 
      <main className='w-full flex-grow
            overflow-y-auto py-10
            flex flex-col justify-start items-center
           '>
      <BoxOffice />
      </main>
      <footer className='w-full min-h-20
           bg-black text-amber-50
            flex justify-center items-center'>
          K-digital 2025 2기      
      </footer>
        
    </div>
  )
}

export default App
