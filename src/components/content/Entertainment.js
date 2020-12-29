import React,{Component} from 'react'
import {connect} from 'react-redux'
import {total} from "../../store/actions/projectAction"

class Entertainment extends Component{
    handlesubmit=(e)=>{
        e.preventDefault()
        
        this.props.total()

    }
    render(){
    return(
    <div className="btn" onClick={this.handlesubmit}>submit </div>       
)           
}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        total:()=>dispatch(total()),
    }
}
export default connect(null,mapDispatchToProps)(Entertainment)