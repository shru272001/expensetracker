import React,{Component} from 'react'
import Navbar from './components/layout/Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Explore from "./components/projectfiles/Explore";
import Login from "./components/auth/Login";
//import SignUp from "./components/auth/SignUp";
import graph from "./components/projectfiles/graph";
import Tips from "./components/projectfiles/Tips";
import Enter from './components/projectfiles/Enter';
import Education from "./components/projectfiles/Education"
import Groceries from './components/projectfiles/Groceries'
import Total from './components/projectfiles/Total'
import SignUp from './components/auth/SignUp'
import Housing from "./components/projectfiles/Housing"
import Clothing from "./components/projectfiles/Clothing"
import Healthcare from "./components/projectfiles/Healthcare"
import Percare from './components/projectfiles/Percare'
import Debt from './components/projectfiles/Debt'
import Insurance from './components/projectfiles/Insurance'
class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div >
       <Navbar/>
       <Switch>
       <Route exact path="/" component={Explore}/>
         <Route path="/ins" component={Insurance}/>
         <Route path="/debt" component={Debt}/>
         <Route path="/care" component={Percare}/>
         <Route path="/health" component={Healthcare}/>
         <Route path="/cloth" component={Clothing}/>
         <Route path="/total" component={Total}/>
         <Route path="/signup" component={SignUp}/>
         <Route path="/tt" component={Tips}/>
         <Route path="/entert" component={Enter}/>
         <Route path="/login" component={Login}/>
         <Route path="/edu" component={Education}/>
         <Route path="/gro" component={Groceries}/>
         <Route path="/gra" component={graph}/>
        <Route path="/house" component={Housing}/>
       </Switch>
      </div>
      </BrowserRouter>
    )
  }
}
export default App;
