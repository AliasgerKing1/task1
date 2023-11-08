import './App.css';
import {Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import PostDetails from './components/pages/PostDetails/PostDetails'
import Pricing from './components/pages/Pricing/Pricing'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/app/:name/:id' element={<PostDetails />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
