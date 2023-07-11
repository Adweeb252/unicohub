import './App.css';
import Home from './pages/home';
import Users from './pages/Usersdata';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  usersDataAsync,
  getUser,
  selectUsersInfo,
} from "./users/userSlice";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersDataAsync());
  }, []);
  const users = useSelector(selectUsersInfo);
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home />}></Route>
        {users && <Route path="/users" element= {<Users />}></Route>}
      </Routes>
    </Router>
  );
}

export default App;
