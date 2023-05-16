import React  from 'react';
import { useEffect } from 'react';
import Routes from './Routes/routes';
function App() {
  useEffect(() => {
    document.title = "Programo";  
  }, []);
  return (
    <Routes/>
  );
}

export default App;