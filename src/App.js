import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Update from "./components/update";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* hello */}
          <Routes>
            <Route  path="/" element={<Create />} />
            <Route  path="/read" element={<Read />} />
            <Route  path="/update" element={<Update />} />
            {/* <Route path="/delete" element={<p>delete</p>} /> */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
