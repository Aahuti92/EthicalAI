import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import AppBody from './components/AppBody/AppBody';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <NavbarComponent />
      <Route path="/" exact component={AppBody} />
    </Router>
  );
}
export default App;
