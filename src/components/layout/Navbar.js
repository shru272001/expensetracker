import React from 'react'
import {Link } from 'react-router-dom'
import SignedIn from "./SignedIn"
import SignedOut from './SignedOut'
import {connect} from "react-redux"


const Navbar=(props)=>{
    if(props.auth.uid){
return( 
    <div>
        <nav className="nav-wrapper black white-text  ">
            <div >
            <ul className="right">
            <SignedIn/>
                </ul>
         
        </div>
        </nav>
        </div>
)
    }
    else{
        return(
            <div>
            <nav className="nav-wrapper black white-text  ">
                <div className="container">
            <Link to="/" className="brand-logo">Expense Tracker </Link>
          <ul className="right"> 
                <SignedOut/>
            </ul>
            </div>
            </nav>
            </div>
        )
    }


}
const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
    };
  };
  
export default connect(mapStateToProps)(Navbar)