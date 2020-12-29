import React,{Component} from 'react'
import {testhouse} from "../../store/actions/projectAction"
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'
import M from 'materialize-css'
class Housing extends Component{
    state={
        Rent:0,
        Electricity:0,
        Water:0,
        Phones:0,
        Internet:0,
        Gas:0,
        Salary_emp:0,
        Purchase_bills:0,
        Others:0
    }
    handlechange=(e)=>{
        this.setState({
            [e.target.id]:parseInt(e.target.value)
        })
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        const Total=this.state.Purchase_bills+this.state.Electricity+this.state.Rent+this.state.Water+this.state.Phones+this.state.Salary_emp+this.state.Gas+this.state.Others+this.state.Internet
        const newState={...this.state,Total}
        this.props.testhouse(newState)
    }
    handlegraph=()=>{
        M.toast({html:'Opening House Expense Graph'})   
        var Chart = require('chart.js');
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Gas','Purchase_bills','Rent','Water','Phones','Electricity','Salary','Internet','Others'],
              datasets: [{
                  label: 'Expenses',
                  data: [this.props.gas,this.props.Purchase_bills,this.props.Rent,this.props.water,this.props.phone,this.props.elec,this.props.sal,this.props.inter, this.props.Others],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
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
                    <h5>HOUSING</h5>
                </div>
                    <div className="card-content">
              <div className="input-field inline container">
                  <i className="material-icons prefix">receipt</i>
                <label htmlFor="Purchase_bills">Purchase_bills</label>
                <input type="number" className="validate" id="Purchase_bills" onChange={this.handlechange} />
              </div>

              <div className="input-field inline container">
                  <i className="material-icons prefix">home</i>
                <label htmlFor="Rent">Rent</label>
                <input type="number" className="validate" id="Rent" onChange={this.handlechange} />
              </div>

              <div className="input-field inline container">
                  <i className="material-icons prefix">waves</i>
                <label htmlFor="Water">Water</label>
                <input type="number" className="validate" id="Water" onChange={this.handlechange} />
              </div>

              <div className="input-field inline container">
                  <i className="material-icons prefix">outlet</i>
                <label htmlFor="Electricity">Electricity</label>
                <input type="number" className="validate" id="Electricity" onChange={this.handlechange} />
              </div>

              <div className="input-field inline container">
                  <i className="material-icons prefix">phone</i>
                <label htmlFor="Phones">Phones</label>
                <input type="number" className="validate" id="Phones" onChange={this.handlechange} />
              </div>

              <div className="input-field inline container">
                  <i className="material-icons prefix">local_gas_station</i>
                <label htmlFor="Gas">Gas</label>
                <input type="number" className="validate" id="Gas" onChange={this.handlechange} />
              </div>

              <div className="input-field inline container">
                  <i className="material-icons prefix">money</i>
                <label htmlFor="Salary_emp">Employee Salary</label>
                <input type="number" className="validate" id="Salary_emp" onChange={this.handlechange} />
              </div>

              <div className="input-field inline container">
                  <i className="material-icons prefix">network_cell</i>
                <label htmlFor="Internet">Internet</label>
                <input type="number" className="validate" id="Internet" onChange={this.handlechange} />
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
         <button onClick={this.handlegraph} className="btn black white-text">Housing</button>
         </div>
              </div>
        )
    }
}
const mapStateToProps=(state)=>{
    if (state.firestore.data){
    const i=state.firestore.data[state.firebase.auth.uid]
    
    var Purchase_bills=i  ?  i.Housing.Purchase_bills:null
    var Rent = i?i.Housing.Rent:null
    var water = i?i.Housing.Water:null
    var Phone =i?i.Housing.Phones:null
    var elec = i?i.Housing.Electricity:null
    var sal=i?i.Housing.Salary_emp:null
    var gas = i?i.Housing.Gas:null
    var inter=i?i.Housing.Internet:null
    var Others=i ?  i.Housing.Others:null
    }
    return{
        Purchase_bills:Purchase_bills,
        Rent:Rent,
        water:water,
        phone:Phone,
        elec:elec,
        sal:sal,
        gas:gas,
        auth:state.firebase.auth,
        inter:inter,
        Others:Others,
        userId:state.firebase.auth.uid
    }
}
const mapDispacthToProps =(dispatch)=>{
    return{
        testhouse:(param)=>dispatch(testhouse(param))
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
    ))(Housing)