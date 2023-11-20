import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import '../src/components/styles/App.css';
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Quize from "./components/pages/Quize";
import Result from "./components/pages/Result";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    // <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact  path="/" element={Home} />
            <Route exact path="/signup" element={Signup} />
            <Route exact path="/login" element={Login} />
            <Route exact path="/Quiz" element={Quize} />
            <Route exact path="/result" element={Result} />
          </Routes>
        </Layout>
      </Router>
    // </div>
  );
}

export default App;
