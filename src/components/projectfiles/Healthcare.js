import React,{Component} from 'react'
import {testhealth} from "../../store/actions/projectAction"
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'
import M from 'materialize-css'
class Health extends Component{
    state={
        Pharmacy:0,
        Dental:0,
        General:0, 
        Special:0,
        Emergency:0,
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
        const Total=this.state.Pharmacy+this.state.Dental+this.state.General+this.state.Special+this.state.Emergency+this.state.Others
        const newState={...this.state,Total}
        this.props.testhealth(newState)
    }
    handlegraph=()=>{
        M.toast({html:'Opening Health-care Expense Graph'})   
        var Chart = require('chart.js');
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Pharmacy','Dental','General','Special','Emergency','Others'],
              datasets: [{
                  label: 'Expenses',
                  data: [this.props.phar,this.props.dent,this.props.gen,this.props.spec,this.props.emer,this.props.Others],
                  backgroundColor: [
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
                   <h5> HEALTH CARE</h5>
                </div>
                    <div className="card-content">
              <div className="input-field inline container">
                  <i className="material-icons prefix">healing</i>
                <label htmlFor="Pharmacy">Pharmacy</label>
                <input type="number" className="validate" id="Pharmacy" onChange={this.handlechange} />
              </div>
            
              <div className="input-field inline container">
                  <i className="material-icons prefix">medical_services</i>
                <label htmlFor="Dental">Dental</label>
                <input type="number" className="validate" id="Dental" onChange={this.handlechange} />
              </div>

              <div className="input-field inline container">
                  <i className="material-icons prefix">local_hospitals</i>
                <label htmlFor="General">General</label>
                <input type="number" className="validate" id="General" onChange={this.handlechange} />
              </div>

              <div className="input-field inline container">
                  <i className="material-icons prefix">local_hospitals</i>
                <label htmlFor="Special">Special</label>
                <input type="number" className="validate" id="Special" onChange={this.handlechange} />
              </div>

              <div className="input-field inline container">
                  <i className="material-icons prefix">local_hospitals</i>
                <label htmlFor="Emergency">Emergency</label>
                <input type="number" className="validate" id="Emergency" onChange={this.handlechange} />
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
         <button onClick={this.handlegraph} className="btn black white-text">Health-Care</button>
         </div>
              </div>
        )
    }
}
const mapStateToProps=(state)=>{
    if (state.firestore.data){
    const i=state.firestore.data[state.firebase.auth.uid]
    
    var phar=i  ?  i.Health.Pharmacy:null
    var dent=i?i.Health.Dental:null
    var spec=i?i.Health.Special:null
    var gen=i?i.Health.General:null
    var emer=i?i.Health.Emergency:null
    var Others=i ?  i.Health.Others:null
    }
    return{
        phar:phar,
        dent:dent,
        spec:spec,
        gen:gen,
        emer:emer,
        auth:state.firebase.auth,
        Others:Others,
        userId:state.firebase.auth.uid
    }
}
const mapDispacthToProps =(dispatch)=>{
    return{
        testhealth:(param)=>dispatch(testhealth(param))
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
    ))(Health)