// import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Panels from './components/panels';
import Comic from './components/comic';
import { useState } from 'react';

function App() {
  const [url,seturl]=useState([]);
  const addurl=(Story)=>{
    seturl([...url,{Story}]);
  }
  return (
    <>
      <Panels addurl={addurl}/>
      <Comic url={url}/>
      
      {/* <Routes>
        <Route  path='/' Component={Panels}/>
        <Route path='/comic' Component={Comic}/>
      </Routes> */}
    </>
    
  );
}

export default App;
