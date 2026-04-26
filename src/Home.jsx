import { Route, Routes } from 'react-router-dom';
import App from './App';
import Description from './pages/Description';
import Errors from './pages/Errors';

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie/:id" element={<Description />} />
        <Route path="/*" element={<Errors />} />
      </Routes>
    </div>
  );
};

export default Home;