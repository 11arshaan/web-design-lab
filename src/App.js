import './App.css';
import Navbar from './ui/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import ComponentModal from './ui/ComponentModal/ComponentModal';
import { useSelector } from 'react-redux';

function App() {
  const modal = useSelector(state => state.modal);

  return (
    <div className="app">
      <Navbar />
      <Outlet />
      {modal.isOpen ? <ComponentModal /> : null}
      
     
    </div> 
  );
}

export default App;
