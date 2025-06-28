import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Emil from './pages/Emil';
import Sveta from './pages/Sveta';
import Moti from './pages/Moti';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Emil /> } />
        <Route path="/emil" element={ <Emil /> } />
        <Route path="/sveta" element={ <Sveta /> } />
        <Route path="/moti" element={ <Moti /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
