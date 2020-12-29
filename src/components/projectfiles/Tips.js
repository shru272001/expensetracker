import React,{Component} from 'react'
import {test} from "../../store/actions/projectAction"
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'
import M from 'materialize-css'

class Tips extends Component{
    state={
        Fuel:0,
        Cab_Taxi:0,
        Maintainance:0,
        Others:0,
        Total:0
    }
    handlechange=(e)=>{
        this.setState({
            [e.target.id]:parseInt(e.target.value)
        })
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        M.toast({html:'Submitted'})
        const Total=this.state.Fuel+this.state.Maintainance+this.state.Others+this.state.Cab_Taxi
        const newState={...this.state,Total}
        //console.log(newState)
        this.props.test(newState)
    }
    handlegraph=()=>{
        M.toast({html:'Opening Transport Expense Graph'})
        var Chart = require('chart.js');
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Fuel', 'Cab/Taxi', 'Maintainance', 'Others'],
              datasets: [{
                  label: 'Expenses',
                 data: [this.props.Fuel, this.props.Cab_Taxi, this.props.Maintainance, this.props.Others],
                //  data: [5, 5, 2, 10],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      
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
             
            <div on className="container" >
                <div className="card z-depth-5 ">
                <div className="card-title center ">
                    <h5>TRANSPORTATION</h5>
                </div>
                    <div className="card-content">
              <div className="input-field inline container">
                  <i className="material-icons prefix">local_gas_station</i>
                <label htmlFor="Fuel">Fuel</label>
                <input type="number" className="validate" id="Fuel" onChange={this.handlechange} />
              </div>
            
              

          <div className="input-field inline container">
          <i className="material-icons prefix">directions_car</i>
                <label htmlFor="Cab_Taxi">Cab</label>
                <input type="number" className="validate" id="Cab_Taxi" onChange={this.handlechange} />
              </div>
              
          <div className="input-field inline container">
          <i className="material-icons prefix">construction</i>
                <label htmlFor="Maintainance">Maintainance</label>
                <input type="number" id="Maintainance" onChange={this.handlechange} />
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
         <button className="btn black white-text" onClick={this.handlegraph}>Transportation</button>
         </div>
              </div>
        )
    }
}
const mapStateToProps=(state)=>{
    if (state.firestore.data){
    const i=state.firestore.data[state.firebase.auth.uid]
    
    var Fuel=i?  i.Transport.Fuel:null
    var Cab_Taxi=i?  i.Transport.Cab_Taxi:null
    var Maintainance=i?  i.Transport.Maintainance:null
    var Others=i?  i.Transport.Others:null
}

   return{
        Fuel:Fuel,
        Cab_Taxi:Cab_Taxi,
        Maintainance:Maintainance,
        Others:Others,
        userId:state.firebase.auth.uid,
        auth:state.firebase.auth
    }
}
const mapDispacthToProps =(dispatch)=>{
    return{
        //tips:(param)=>dispatch(tips(param)),
        test:(param)=>dispatch(test(param))
    }
}

export default compose(
    connect(mapStateToProps,mapDispacthToProps),
    firestoreConnect((props)=>{
        return(
        [
            {
                collection:props.userId
            }
        ]
        )
    }
    ))(Tips)
