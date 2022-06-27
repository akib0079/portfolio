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

      {/* custom cursor */}
      <div id='cursor' className="cursor hidden lg:block"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
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
      <Footer></Footer>
    </div>
  );
}

export default App;
