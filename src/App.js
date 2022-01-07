import Header from "./Components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useState} from "react";
import Main from "./container/Main";

function App() {

    return (
        <Router>
            <div className="App">
                <Main />
            </div>
        </Router>
    );
}

export default App;
