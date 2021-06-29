import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import AppBody from './components/AppBody/AppBody';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div class="d">
        <NavbarComponent />
        <Route path="/" exact component={AppBody} />
      </div>
    </Router>
  );
}

export default App;
