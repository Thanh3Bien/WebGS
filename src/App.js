import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Introduce from './Components/Introduction/Introduce';
import Register from './Components/RegisterCourse/Register';
import Privacy from './Components/Privacy/Privacy';
import ContactButton from './Components/ContactSupport/ContactButton';
import Map from './Components/Map/Map';
import Messenger from './Components/MessengerSupport/Messenger';
import SmsButton from './Components/SmsButton/Sms';
import ZaloButton from './Components/ZaloSupport/Zalo';
// import Review from './Components/ProductReview/Review';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Map />
      <ContactButton />
      <Messenger/>
      <SmsButton/>
      <ZaloButton/>
      {/* <Review/> */}
    </>
  );
}

export default App;
