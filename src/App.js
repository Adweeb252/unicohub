import './App.css';
import Home from './pages/home';
import Users from './pages/Usersdata';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home />}></Route>
        <Route path="/users" element= {<Users />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
