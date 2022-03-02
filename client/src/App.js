import React from 'react';
import { BrowserRouter as BrowserRouter, Routes,Route } from 'react-router-dom';

//import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import NoPage from "./components/NoPage";
import CreatePost from "./components/CreatePost";
import CreateUser from "./components/CreateUser";
import EditPost from "./components/EditPost";
import PostList from "./components/PostList";

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Navbar/>
      <br/>
      <Routes>
      <Route path="/" element={<PostList/>} />
      <Route path="/edit/:id" element={<EditPost/>} />
      <Route path="/create" element={<CreatePost/>} />
      <Route path="/user" element={<CreateUser/>} />
      <Route path="*" element={<NoPage />}/> 
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
