import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class SignedOut extends Component{
  render(){
    return(
      <div >
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
       <li>
       <Link to="/login">Login</Link>
               </li>
          
       
       
      </div>
    )
  }
}
export default SignedOut;
