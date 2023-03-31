import './App.css';
import Navbar from './ui/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import ComponentModal from './ui/ComponentModal/ComponentModal';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import loadComponents from './helper/loadComponents';

function App() {
  const [components, setComponents] = useState({});
  const modal = useSelector(state => state.modal);

  useEffect(() => {
    const fetchComponents = async () => {
      const loadedComponents = await loadComponents();
      setComponents(loadedComponents);
    };
    fetchComponents();
  }, []);


  
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      {modal.isOpen ? <ComponentModal components={components} /> : null}
      
     
    </div> 
  );
}

export default App;
