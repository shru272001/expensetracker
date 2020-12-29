import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {signOut} from "../../store/actions/authAction"
import {connect} from 'react-redux'
 
class SignedIn extends Component{
  render(){
    const {signOut} = this.props
    return(
      <div >
        <li>
          <Link to="/cloth">Clothing</Link>
        </li>
        <li>
          <Link to="/debt">Debt/Loan</Link>
        </li>
        <li>
         <Link to="/edu">Education</Link>
       </li>
       <li>
           <Link to="/entert">Entertainment</Link>
       </li>
       <li>
         <Link to="/gro">Groceries</Link>
       </li>
       <li>
          <Link to="/health">HealthCare</Link>
        </li>
        <li>
          <Link to="/house">Housing</Link>
        </li> 
         <li>
          <Link to="/ins">Insurance</Link>
        </li>
        
         <li>
          <Link to="/care">Personal</Link>
        </li>
         <li>
           <Link to="/tt">Transportation</Link>
       </li>
       <li>
          <Link to="/total">Total</Link>
        </li>
       <li>
         <Link to="/" onClick={signOut}>Logout</Link>
       </li>
       
       
       
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  const uid=state.firebase.auth.uid
  return{
    uid:uid
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    signOut:()=>dispatch(signOut())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignedIn);
