import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import View from "./components/View";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/products/:id" element={<View />} />
        <Route path="/products/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
