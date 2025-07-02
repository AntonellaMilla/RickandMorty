import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';       // <- en minúscula
import Home from './components/Home';
import ItemsPage from './components/ItemsPage';
import ContactPage from './components/ContactPage';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
