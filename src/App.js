import './App.css';
import Header from './Statics/Header';
import 'boxicons';
import 'animate.css';
import Footer from './Statics/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Loading from './Pages/Loading/loading';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './Pages/Home/Contact';
import Contactme from './Pages/Contact/Contactme';
import Page404 from './Pages/Page404/Page404';




function App() {

  const [siteLoading, setSiteLoading] = useState(false);

  useEffect(() => {
    setSiteLoading(true);

    setTimeout(() => {
      setSiteLoading(false)
    }, 2000)
  }, []);
  AOS.init();


  if (siteLoading) return <Loading></Loading>

  return (
    <div className="App animate__animated animate__fadeIn">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contactme></Contactme>} />
        <Route path="*" element={<Page404></Page404>} />
      </Routes>







      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />




      {/* custom cursor */}
      <div className="cursorDiv hidden lg:block">
        <div className="cursor-outer"></div>
        <div className="cursor-inner"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
