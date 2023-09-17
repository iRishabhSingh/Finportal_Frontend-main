import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import ItrFiling from './components/ItrFiling';  //services
import Contact from './components/Contact'
import Signin from './components/Signin';
import Signup from './components/Signup'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/itr' element={<ItrFiling/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
