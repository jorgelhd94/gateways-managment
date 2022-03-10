import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './Views/Auth';
import Home from './Views/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
