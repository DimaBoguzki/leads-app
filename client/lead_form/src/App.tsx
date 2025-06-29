import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Form';
import { UserInfo } from './data';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Form info={ UserInfo.emil } /> } />
        <Route path="/emil" element={ <Form info={ UserInfo.emil } /> } />
        <Route path="/sveta" element={ <Form info={ UserInfo.sveta } /> } />
        <Route path="/moti" element={ <Form info={ UserInfo.moti } /> } />
        <Route path="/dima" element={ <Form info={ UserInfo.dima } /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
