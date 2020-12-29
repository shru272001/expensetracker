import React,{Component} from 'react'
import {testgro} from "../../store/actions/projectAction"
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'
import M from 'materialize-css'

class Groceries extends Component{
    state={
        Essential_bills:0,
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
        const Total=this.state.Essential_bills+this.state.Others
        const newState={...this.state,Total}
        this.props.testgro(newState)
    }
    handlegraph=()=>{
        M.toast({html:'Opening Groceries Expense Graph'})       
        var Chart = require('chart.js');
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Essentials','Others'],
              datasets: [{
                  label: 'Grocery Expenses',
                  data: [this.props.Essentials, this.props.Others],
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
                    <h5>GROCERIES</h5>
                </div>
                    <div className="card-content">
              <div className="input-field inline container">
                <i className="material-icons prefix">receipt</i>
                <label htmlFor="Essential_bills">Essential_bills</label>
                <input type="number" className="validate" id="Essential_bills" onChange={this.handlechange} />
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
         <button className="btn black white-text" onClick={this.handlegraph}>Groceries</button>
         </div>
              </div>
        )
    }
}
const mapStateToProps=(state)=>{
    if (state.firestore.data){
    const i=state.firestore.data[state.firebase.auth.uid]
    
    var Essentials=i  ?  i.Groceries.Essential_bills:null
    var Others=i ?  i.Groceries.Others:null
    }
    return{
        Essentials:Essentials,
        Others:Others,
        auth:state.firebase.auth,
        userId:state.firebase.auth.uid
    }
}
const mapDispacthToProps =(dispatch)=>{
    return{
        testgro:(param)=>dispatch(testgro(param))
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
    ))(Groceries)