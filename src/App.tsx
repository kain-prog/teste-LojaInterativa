import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/global.css';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL+'/'}>
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
