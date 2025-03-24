import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar' 
import Home from './components/Home'

const Works = () => <h2 className="text-center mt-4">Works</h2>;
const Contact = () => <h2 className="text-center mt-4">Contact Us</h2>;

function App() {

  return (
    <Router>
      <NavBar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
