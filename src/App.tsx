import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/page'
function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' Component={HomePage}/>
      </Routes>
    </HashRouter>
  )
}

export default App
