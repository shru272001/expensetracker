import React,{Component} from 'react'
import {testcare} from "../../store/actions/projectAction"
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'
import M from 'materialize-css'

class Percare extends Component{
    state={
        Salon:0,
        Cosmetics:0,
        Memberships:0,
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
        const Total=this.state.Salon+this.state.Cosmetics+this.state.Memberships+this.state.Others
        const newState={...this.state,Total}
        this.props.testcare(newState)
    }
    handlegraph=()=>{
        M.toast({html:'Opening Personal-care Expense Graph'})
        var Chart = require('chart.js');
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Salon','Cosmetics','Memberships','Others'],
              datasets: [{
                  label: 'Expenses',
                  data: [this.props.Salon,this.props.Cosmetics,this.props.Memberships, this.props.Others],
                  backgroundColor: [
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
                    <h5>PERSONAL CARE</h5>
                </div>
                    <div className="card-content">
              <div className="input-field inline container">
                  <i className="material-icons prefix">receipt</i>
                <label htmlFor="Salon">Salon/Spa</label>
                <input type="number" className="validate" id="Salon" onChange={this.handlechange} />
              </div>

              <div className="input-field inline container">
                  <i className="material-icons prefix">receipt</i>
                <label htmlFor="Cosmetics">Cosmetics</label>
                <input type="number" className="validate" id="Cosmetics" onChange={this.handlechange} />
              </div>

              <div className="input-field inline container">
                  <i className="material-icons prefix">card_memberships</i>
                <label htmlFor="Memberships">Memberships</label>
                <input type="number" className="validate" id="Memberships" onChange={this.handlechange} />
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
         <button className="btn black white-text"onClick={this.handlegraph}>Personal-Care</button>
         </div>
              </div>
        )
    }
}
const mapStateToProps=(state)=>{
    if (state.firestore.data){
    const i=state.firestore.data[state.firebase.auth.uid]
    
    var Salon=i  ?  i.Personal.Salon:null
    var Cosmetics=i?i.Personal.Cosmetics:null
    var Memberships=i?i.Personal.Memberships:null
    var Others=i ?  i.Personal.Others:null
    }
    return{
        Salon:Salon,
        Cosmetics:Cosmetics,
        Memberships:Memberships,
        Others:Others,
        userId:state.firebase.auth.uid,
        auth:state.firebase.auth
    }
}
const mapDispacthToProps =(dispatch)=>{
    return{
        testcare:(param)=>dispatch(testcare(param))
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
    ))(Percare)