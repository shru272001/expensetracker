import React,{Component} from 'react'
import {testentert} from "../../store/actions/projectAction"
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'
import M from 'materialize-css'

class Enter extends Component{
    state={
        Movies:0,
        Subscriptions:0,
        Games:0, 
        Hotels:0, 
        Concerts:0,
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
        const Total=this.state.Movies+this.state.Games+this.state.Others+this.state.Hotels+this.state.Concerts+this.state.Subscriptions
        const newState={...this.state,Total}
        this.props.testentert(newState)
    }
    handlegraph=()=>{
        M.toast({html:'Opening Entertainment Expense Graph'})
        var Chart = require('chart.js');
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Movies', 'Subscriptions', 'Games','Hotels','Concerts', 'Others'],
              datasets: [{
                  label: 'Expenses',
                  data: [this.props.Movies, this.props.Subscriptions, this.props.Games,this.props.Hotels,this.props.Concerts, this.props.Others],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
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
                    <h5>ENTERTAINMENT</h5>
                </div>
                    <div className="card-content">
              <div className="input-field inline container">
                  <i className="material-icons prefix">local_movies</i>
                <label htmlFor="Movies">Movies</label>
                <input type="number" className="validate" id="Movies" onChange={this.handlechange} />
              </div>
            
              

          <div className="input-field inline container">
          <i className="material-icons prefix">subscriptions</i>
                <label htmlFor="Subscriptions"> Subscriptions </label>
                <input type="number" className="validate" id="Subscriptions" onChange={this.handlechange} />
              </div>
              
          <div className="input-field inline container">
          <i className="material-icons prefix">hotel</i>
                <label htmlFor="Hotels"> Hotels </label>
                <input type="number" id="Hotels" onChange={this.handlechange} />
              </div>

              
          <div className="input-field inline container">
          <i className="material-icons prefix">games</i>
                <label htmlFor="Games"> Games </label>
                <input type="number" id="Games" onChange={this.handlechange} />
              </div>

              
          <div className="input-field inline container">
          <i className="material-icons prefix">receipt</i>
                <label htmlFor="Concerts"> Concerts </label>
                <input type="number" id="Concerts" onChange={this.handlechange} />
              </div>
              
          <div className="input-field inline container">
          <i className="material-icons prefix">receipt</i>
                <label htmlFor="Others"> Others </label>
                <input type="number" id="Others" onChange={this.handlechange} />
              </div>
              </div>
              </div>
<div>
              <button  onClick={this.handlesubmit} className="btn black white-text">Submit</button>
     </div>         
     <div>
        <canvas  id="myChart" width="400" height="200"></canvas>
         <button onClick={this.handlegraph} className="btn black white-text">Entertainment</button>
         </div>
              </div>
        )
    }
}
const mapStateToProps=(state)=>{
    if(state.firestore.data){
    const i=state.firestore.data[state.firebase.auth.uid]

    var Hotels= i?  i.Entertainment.Hotels:null
    var  Subscriptions=i ?  i.Entertainment.Subscriptions:null
    var Games=i?  i.Entertainment.Games:null
    var Concerts=i?  i.Entertainment.Concerts:null
    var Movies=i?  i.Entertainment.Movies:null
    var Others=i?  i.Entertainment.Others:null
    }
    return{
        Hotels:Hotels,
        Subscriptions:Subscriptions,
        Games:Games,
        Concerts:Concerts,
        Movies:Movies,
        Others:Others,
        auth:state.firebase.auth,
        userId:state.firebase.auth.uid
    }
}
const mapDispacthToProps =(dispatch)=>{
    return{
        testentert:(param)=>dispatch(testentert(param))
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
    ))(Enter)