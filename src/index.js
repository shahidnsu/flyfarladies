import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import Gallery from '../src/Components/Gallery';
import './style.css';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Secondarynavbar from "./Components/Secondarynavbar";
import Footer from  "./Components/Footer";
import Topnavbar from "./Components/Topnavbar";
import Job from "./Components/Job";


ReactDom.render(
    <Router>
    
    
    
        <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/gallery">
            <Topnavbar />
            <Secondarynavbar />
            <Gallery />
            <Footer />
        </Route>
        <Route exact path="/job">
        <Topnavbar />
        <Secondarynavbar />

        <Job />
        <Footer />
        </Route>
        </Switch>
        
    </Router>,
    
    
        
   
    
    document.getElementById('root')
)