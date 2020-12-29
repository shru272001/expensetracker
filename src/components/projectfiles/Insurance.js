import React,{Component} from 'react'
import {testins} from "../../store/actions/projectAction"
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'
import M from 'materialize-css'

class Insurance extends Component{
    state={
        Insurance:0,
        Others:0
    }
    handlechange=(e)=>{
        this.setState({
            [e.target.id]:parseInt(e.target.value)
        })
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        M.toast({html:'Submitted'})
        const Total=this.state.Insurance+this.state.Others
        const newState={...this.state,Total}

        this.props.testins(newState)
    }
    handlegraph=()=>{
        M.toast({html:'Opening Insurance Expense Graph'})
        var Chart = require('chart.js');
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Insurance','Others'],
              datasets: [{
                  label: 'Expenses',
                  data: [this.props.insur, this.props.Others],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                  ],
                  borderWidth: 1
              }]
          },
          
      });
      
      }
    
    render(){
        const {auth}=this.props
        if(!auth.uid) return <Redirect to="/signup" />
        return(
             
            <div className="container" >
                <div className="card z-depth-5 ">
                <div className="card-title center ">
                    <h5>INSURANCE</h5>
                </div>
                    <div className="card-content">
              <div className="input-field inline container">
                  <i className="material-icons prefix">support</i>
                <label htmlFor="Insurance">Insurance</label>
                <input type="number" className="validate" id="Insurance" onChange={this.handlechange} />
              </div>
            
          <div className="input-field inline container">
          <i className="material-icons prefix">receipt</i>
                <label htmlFor="Others">Others</label>
                <input type="number" id="Others" onChange={this.handlechange} />
              </div>
              </div>
              </div>
<div>
              <button  onClick={this.handlesubmit} className="btn black white-text">Submit</button>
     </div>         
     <div>
        <canvas  id="myChart" width="400" height="200"></canvas>
         <button onClick={this.handlegraph} className="btn black white-text">Insurance</button>
         </div>
              </div>
        )
    }
}
const mapStateToProps=(state)=>{
    if (state.firestore.data){
    const i=state.firestore.data[state.firebase.auth.uid]
    
    var insur=i  ?  i.Insurance.Insurance:null
    var Others=i ?  i.Insurance.Others:null
    }
    return{
        insur:insur,
        Others:Others,
        auth:state.firebase.auth,
        userId:state.firebase.auth.uid
    }
}
const mapDispacthToProps =(dispatch)=>{
    return{
        testins:(param)=>dispatch(testins(param))
    }
}

export default compose(
    connect(mapStateToProps,mapDispacthToProps),
    firestoreConnect((props)=>{
        return(
        [
            {
                collection:props.userId//"ALLKsWOj9cf5NlM03qxE7hTwpT43"
            }
        ]
        )
    }
    ))(Insurance)