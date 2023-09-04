import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/penstory" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
