import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Introduce from './Components/Introduction/Introduce';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/introduce" element={<Introduce />} />
    </Routes>
  );
}

export default App;
