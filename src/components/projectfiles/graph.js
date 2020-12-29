import React, { Component } from 'react';
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

class graph extends Component {
    state = {  }
    handlesubmit=(e)=>{
        e.preventDefault()
        console.log(this.props.c,this.props.d,this.props.e,this.props.en,this.props.g,this.props.h,this.props.ho,this.props.i,this.props.t)
    }
    handlegraph=()=>{
        
        var Chart = require('chart.js');
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Clothing','Debt','Education','Entertainment','Groceries','Healthcare','Housing','Insurance','Transport'],
              datasets: [{
                 label: 'Expenses',
                  data: [this.props.c,this.props.d,this.props.e,this.props.en,this.props.g,this.props.h,this.props.ho,this.props.i,this.props.t],
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
                      
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 99, 132, 0.2)',
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
    render() { 
        return ( 
            <div>
         <div>
        <canvas  id="myChart" width="400" height="200"></canvas>
         <button onClick={this.handlegraph}>TOTAL</button>
         </div>
            </div>
         );
    }
}

const mapStateToProps=(state)=>{
    if (state.firestore.data){
    const i=state.firestore.data[state.firebase.auth.uid]
    
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
        userId:state.firebase.auth.uid
    }
}
const mapDispacthToProps =(dispatch)=>{
    return{
        
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
    ))(graph) 

