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




function App() {

  const [siteLoading, setSiteLoading] = useState(false);

  useEffect(() => {
    setSiteLoading(true);

    setTimeout(() => {
      setSiteLoading(false)
    }, 2000)
  }, []);


  document.addEventListener('mousemove', e => {
    const cursor = document.getElementById('cursor');
    cursor.setAttribute("style", "top: " + (e.pageY - 15) + 'px; left: ' + (e.pageX - 15) + 'px');
  })

  document.addEventListener('click', () => {
    const cursor = document.getElementById('cursor');

    cursor.classList.add('expend');
    setTimeout(() => {
      cursor.classList.remove('expend');
    }, 500)
  });


  AOS.init();


  if (siteLoading) return <Loading></Loading>

  return (
    <div className="App animate__animated animate__fadeIn">
      <Header></Header>

      {/* custom cursor */}
      <div id='cursor' className="cursor"></div>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
