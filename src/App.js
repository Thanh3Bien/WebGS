import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Introduce from './Components/Introduction/Introduce';
import Register from './Components/RegisterCourse/Register';
import Privacy from './Components/Privacy/Privacy';
import  ContactButton  from './Components/ContactSupport/ContactButton';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/introduce" element={<Introduce />} />
      <Route path="/register" element={<Register />} />
      <Route path="/privacy" element={<Privacy />} />

    </Routes>
     <ContactButton /></>
  );
}

export default App;
