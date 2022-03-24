import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Update from "./components/update";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Read />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
