import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProgressBarWrapper from "./component/ProgressBar-wrapper";
import HomePage from "./component/Home-Page";
import AboutPage from "./component/About-Page";
import ContactPage from "./component/Contact-Page";

const App = () => {
    return (
        <>
            <Router>
                <ProgressBarWrapper>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </ProgressBarWrapper>
            </Router>
        </>
    );
};

export default App;
