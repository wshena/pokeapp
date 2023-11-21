import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Details from './pages/Details';
import Search from './pages/Search';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/:name/:id' element={<Details />} />
        <Route path='/pokemon/search/:name' element={<Search />} />
      </Routes>
    </Router>
  )
}

export default App
