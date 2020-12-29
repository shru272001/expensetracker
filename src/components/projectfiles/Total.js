import React, { Component } from 'react';
import {total} from "../../store/actions/projectAction"
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'

class Total extends Component {
    state = { 
        income:0,
        
     }
     handlechange=(e)=>{
         this.setState({
             [e.target.id]:parseInt(e.target.value)
         })
     }
    handlesubmit=(e)=>{
        e.preventDefault()
        this.props.total()
        //const savings=
        //const newstate={...this.state,savings}
        //console.log(newstate)
    }
    handlegraph=()=>{
        
        var Chart = require('chart.js');
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Clothing','Debt','Personal','Education','Entertainment','Groceries','Healthcare','Housing','Insurance','Transport'],
              datasets: [{
                 label: 'Total Expenses',
                  data: [this.props.c,this.props.d,this.props.p,this.props.e,this.props.en,this.props.g,this.props.h,this.props.ho,this.props.i,this.props.t],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 99, 132, 0.2)',
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
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      
                  ],
                  borderWidth: 1
              }]
          },
          
      });
      
      }
    render() { 
        const {Tt}=this.props
        const {auth}=this.props
        if(!auth.uid) return <Redirect to="/signup" />
        return ( 
            <div class="container">
                <div className="card">
                    <div className="card-title center">TOTAL</div>   
                    <div className="card-content center">
                    <p>
                     Click the below button to calculate the overall money spent
                    </p>
                     <button className="btn " onClick={this.handlesubmit}>Calculate</button>
                     <div>
                         {Tt}
                     </div>
                    
                    </div> 
                </div>
                <div className="card center z-depth-5">
                    <div className="card-title center">Comparison Graph</div>
                    <div className="card-content">
                    <button className="btn black white-text" onClick={this.handlegraph}>Graph</button>
                    </div>
                </div>
                <div>
        <canvas  id="myChart" width="400" height="200"></canvas>
        
         </div>
                {/* <div className="card">
                    <div className="card-title center">SAVINGS</div>
                        <div className="card-content">
                            To Calculate your savings :
                            <div className="input-field">
                                <i className="material-icons"></i>
                                <label htmlFor="income"></label>
                                <input type="number" id="income" onChange={this.handlechange}/>
                            </div>
                        <button class="btn" onClick={this.handlesubmit}>Submit</button>
                        <div className="center">
                            {(this.state.income) -parseInt(Tt)}
                        </div>
                        </div>
                    
                    </div>               */}
            </div>
         );
    }
}
const mapStateToProps=(state)=>{
    if (state.firestore.data){
        const i=state.firestore.data[state.firebase.auth.uid]
        
        var Tot=i  ?  i.Total.FullTotal:null
        var cloth= i ?i.Clothing.Total:null
    var debt = i?i.Debt.Total:null
    var edu = i? i.Education.Total:null
    var enter = i?i.Entertainment.Total:null
    var gro = i?i.Groceries.Total:null
    var health = i?i.Health.Total:null
    var house = i ? i.Housing.Total:null
    var ins=i?i.Insurance.Total:null
    var per=i?i.Personal.Total:null
    var trans=i?i.Transport.Total:null
        }
    return{
        Tt:Tot,
        c:cloth,
        d:debt,
        p:per,
        e:edu,
        en:enter,
        g:gro,
        h:health,
        ho:house,
        i:ins,
        t:trans,
        auth:state.firebase.auth,
        userId:state.firebase.auth.uid
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        total:()=>dispatch(total())
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect((props)=>{
        return(
        [
            {
                collection:props.userId//"ALLKsWOj9cf5NlM03qxE7hTwpT43"
            }
        ]
        )
    }
    ))(Total);