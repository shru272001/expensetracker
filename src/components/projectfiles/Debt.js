import React,{Component} from 'react'
import {testdebt} from "../../store/actions/projectAction"
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'
import M from 'materialize-css'
class Debt extends Component{
    state={
        Personnel:0,
        Credit:0,
        Emi:0,
        Education:0,
        Others:0,
        
    } 
    handlechange=(e)=>{
        this.setState({
            [e.target.id]:parseInt(e.target.value)
        })
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        M.toast({html:'Submitted'})
        const Total=this.state.Personnel+this.state.Emi+this.state.Credit+this.state.Education+this.state.Others
        console.log(Total)
        const newState={...this.state,Total}
        this.props.testdebt(newState)
    }
    handlegraph=()=>{
        M.toast({html:'Opening Debt/Loan Graph'})
        var Chart = require('chart.js');
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Personnel','Credit','Education','EMI','Others'],
              datasets: [{
                  label: 'Expenses',
                  data: [this.props.per,this.props.cre,this.props.edu,this.props.emi,this.props.Others],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 99, 132, 0.2)',
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 99, 132, 1)',
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
                    <h5>DEBT/LOAN</h5>
                </div>
                    <div className="card-content">
             
              <div className="input-field inline container">
                  <i className="material-icons prefix">person</i>
                <label htmlFor="Personnel">Personal Loan</label>
                <input type="number" className="validate" id="Personnel" onChange={this.handlechange} />
              </div>

              <div className="input-field inline container">
                  <i className="material-icons prefix">credit_card</i>
                <label htmlFor="Credit">Credit Loan</label>
                <input type="number" className="validate" id="Credit" onChange={this.handlechange} />
              </div>

              <div className="input-field inline container">
                  <i className="material-icons prefix">receipt</i>
                <label htmlFor="Emi">EMI</label>
                <input type="number" className="validate" id="Emi" onChange={this.handlechange} />
              </div>

              <div className="input-field inline container">
                  <i className="material-icons prefix">school</i>
                <label htmlFor="Education">Education Loan</label>
                <input type="number" className="validate" id="Education" onChange={this.handlechange} />
              </div>
            
          <div className="input-field inline container">
          <i className="material-icons prefix">directions_car</i>
                <label htmlFor="Others">bill amount</label>
                <input type="number" id="Others" onChange={this.handlechange} />
              </div>
              </div>
              </div>
<div>
              <button  onClick={this.handlesubmit} className="btn black white-text">Submit</button>
     </div>         
     <div>
        <canvas  id="myChart" width="400" height="200"></canvas>
         <button onClick={this.handlegraph} className="btn black white-text">Debt/Loan</button>
         </div>
              </div>
        )
    }
}
const mapStateToProps=(state)=>{
    if (state.firestore.data){
    const i=state.firestore.data[state.firebase.auth.uid]
    
    var per=i  ?  i.Debt.Personnel:null
    var cre = i?i.Debt.Credit:null
    var edu = i?i.Debt.Education:null
    var emi = i?i.Debt.Emi:null
    var Others=i ?  i.Debt.Others:null
    }
    return{
        per:per,
        cre:cre,
        edu:edu,
        emi:emi,
        Others:Others,
        auth:state.firebase.auth,
        userId:state.firebase.auth.uid
    }
}
const mapDispacthToProps =(dispatch)=>{
    return{
        testdebt:(param)=>dispatch(testdebt(param))
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
    ))(Debt)