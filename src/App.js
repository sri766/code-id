import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/LoginPage';
import Register from './components/RegisterPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Route>
    </Routes>
  );
}

export default App;
