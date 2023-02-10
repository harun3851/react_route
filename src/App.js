import './App.css';
import { BrowserRouter as Router,Routes, Route, } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Navbar } from "./pages/Navbar";
import { useState, createContext } from 'react';

export const AppContext=createContext();


function App() {
  
  const [username, setUsername]= useState("");
  return (

    <div className="App">
          <AppContext.Provider value={{username,setUsername}}>
 
    <Router>
 <h1>hello</h1>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home username={username} />}/>
        <Route path="/Menu" element={<Menu username={username} />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="*" element={<h1>you are not in a page</h1>}/>
      </Routes>
    </Router>
    </AppContext.Provider>
    </div>
  );
}

export default App;
