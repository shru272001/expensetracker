import React,{Component} from 'react'
import {testedu} from "../../store/actions/projectAction"
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'
import M from 'materialize-css'
class Education extends Component{
    state={
        sfees:0,
        hfees:0,
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
        const Total=this.state.sfees+this.state.hfees+this.state.Others
        const newState={...this.state,Total}
        this.props.testedu(newState)
    }
    handlegraph=()=>{
        M.toast({html:'Opening Education Expense Graph'})   
        var Chart = require('chart.js');
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['School/Collage Fees', 'Hostel Fees',  'Others'],
              datasets: [{
                  label: 'Expenses',
                  data: [this.props.Sfees, this.props.Hfees,this.props.Others],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      
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
                    <h5>EDUCATION</h5>
                </div>
                    <div className="card-content">
              <div className="input-field inline container">
                  <i className="material-icons prefix">school</i>
                <label htmlFor="sfees">School/Hostel Fees</label>
                <input type="number" className="validate" id="sfees" onChange={this.handlechange} />
              </div>
            
              

          <div className="input-field inline container">
          <i className="material-icons prefix">receipt</i>
                <label htmlFor="hfees">Hostel Fees</label>
                <input type="number" className="validate" id="hfees" onChange={this.handlechange} />
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
         <button className="btn black white-text" onClick={this.handlegraph}>Education</button>
         </div>
              </div>
        )
    }
}
const mapStateToProps=(state)=>{
    if (state.firestore.data){
    const i=state.firestore.data[state.firebase.auth.uid]
    var Sfees=i  ?  i.Education.sfees:null
    var Hfees=i  ?  i.Education.hfees:null
    var Others=i ?  i.Education.Others:null
    }
    
    return{
         Sfees:Sfees,
        Hfees:Hfees,
         Others:Others,
         auth:state.firebase.auth,
         userId:state.firebase.auth.uid
    }

}
const mapDispacthToProps =(dispatch)=>{
    return{
        testedu:(param)=>dispatch(testedu(param))
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
    ))(Education)