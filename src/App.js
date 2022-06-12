import './App.css';
import Header from './Statics/Header';
import 'boxicons';
import 'animate.css';
import Footer from './Statics/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
