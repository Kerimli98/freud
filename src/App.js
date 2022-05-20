import {BrowserRouter as Router} from "react-router-dom";
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
