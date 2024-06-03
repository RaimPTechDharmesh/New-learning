import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from "./Component/Home";
import BlogGrid from "./Component/blog/blogGrid";
import OurBlog from "./Component/blog/ourBlog";
import BlogDetails from "./Component/blog/blogDetails";
import OurLatestBlog from "./Component/blog/ourLatestBlog";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/blog/ourBlog" element={<OurBlog/>} />
                <Route path="/blog/blogGrid" element={<BlogGrid/>} />
                <Route path="/blog/blogDetails" element={<BlogDetails/>} />
                <Route path="/blog/ourLatestBlog" element={<OurLatestBlog/>} />
            </Routes>
        </Router>
    );
}

export default App;

