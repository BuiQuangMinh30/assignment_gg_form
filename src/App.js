import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import BodyDetail from './components/BodyDetail';
import { BrowserRouter as Router, Switch, Route, Routes  } from "react-router-dom";
import Formheader from './components/Formheader'

function App() {
  return (
    <div className="app">
     

      <Router>
        <Routes>
        
          <Route exact path="/" element={<Body/>}>
            
          </Route>
          
          <Route exact path="/form/:id" element={<BodyDetail/>}/>
        </Routes>
      
    </Router>
     
    </div>
  );
}

export default App;
