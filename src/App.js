import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Practice from './pages/Practice'
import Calc from './pages/Calc'
import TicTacToe from './pages/TicTacToe'
import Snake from './pages/Snake'
import IncreseDecrese from './pages/IncreseDecrese'
import Dates from './pages/Dates'
import Clock from './pages/Clock'
import MovieTicket from './pages/MovieTicket'
import KBC from './pages/KBC'
import Bollywood from './pages/Bollywood'
import Firebase from './pages/Firebase'
import GoogleMap from './pages/GoogleMap'
import PasswordGenerator from './pages/PasswordGenerator'
import Student from './pages/Student'
import GuessTheNumber from './pages/GuessTheNumber'
import RockPaperScisors from './pages/RockPaperScisors'
import Cards from './pages/Cards'


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/practice' element={<Practice/>}></Route>
        <Route path='/calci' element={<Calc/>}></Route>
        <Route path='/ttt' element={<TicTacToe/>}></Route>
        <Route path='/snake' element={<Snake/>}></Route>
        <Route path='/increse' element={<IncreseDecrese/>}></Route>
        <Route path='/dates' element={<Dates/>}></Route>
        <Route path='/clock' element={<Clock/>}></Route>
        <Route path='/movie-ticket' element={<MovieTicket/>}></Route>
        <Route path='/kbc' element={<KBC/>}></Route>
        <Route path='/bollywood' element={<Bollywood/>}></Route>
        <Route path='/firebase' element={<Firebase/>}></Route>
        <Route path='/googlemap' element={<GoogleMap/>}></Route>
        <Route path='/password' element={<PasswordGenerator/>}></Route>
        <Route path='/Student' element={<Student/>}></Route>
        <Route path='/guessthenumber' element={<GuessTheNumber/>}></Route>
        <Route path='/rockpaperscisors' element={<RockPaperScisors/>}></Route>
        <Route path='/cards' element={<Cards/>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
