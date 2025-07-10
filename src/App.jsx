
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GroupText from './01/GroupText'
import MyClock from './02/MyClock'
import MyDiv from './03/MyDiv'
import MyList from './04/MyList'
import Lotto from './05/Lotto'
import FoodMain from './06/FoodMain'
import MyToggle from './07/MyToggle'
import MyEffect from './08/MyEffect'
import BoxOffice from './09/BoxOffice'
import Treaffic from './10/Treaffic'
import MyRef from './11/MyRef'
import Gallery from './12/Gallery'
import Festival from './13/Festival'
import Fcst from './15/Fcst'
// import RouteMain from './14/RouteMain'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppNav from './AppNav'
import FcstList from './15/FcstList'

function App() {

  return (
    <BrowserRouter>
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
        <AppNav />
        <GroupText />
      </header> 
      <main className='w-full flex-grow
            overflow-y-auto py-10
            flex flex-col justify-start items-center
           '>
            <Routes>
              <Route path='/' element={<MyClock />}></Route>
              <Route path='/lotto' element={<Lotto />}></Route>
              <Route path='/food' element={<FoodMain />}></Route>
              <Route path='/box' element={<BoxOffice />}></Route>
              <Route path='/treaffic' element={<Treaffic />}></Route>
              <Route path='/gallery' element={<Gallery />}></Route>
              <Route path='/festival' element={<Festival />}></Route>
              <Route path='/fcst' element={<Fcst />}></Route>
              <Route path='/fcstlist' element={<FcstList />}></Route>
            </Routes>
      {/* <RouteMain /> */}
      </main>
      <footer className='w-full min-h-20
           bg-black text-amber-50
            flex justify-center items-center'>
          K-digital 2025 2기      
      </footer>
        
    </div>
    </BrowserRouter>
  )
}

export default App
