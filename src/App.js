import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import {Menu} from "./pages/Menu";
import {Contact} from "./pages/Contact";
function App() {
  return (
    <div className="App">
      <link to ></link>
    <Router>
      <div>navbar</div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Menu" element={<Menu />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="*" element={<h1>you are not in a page</h1>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
