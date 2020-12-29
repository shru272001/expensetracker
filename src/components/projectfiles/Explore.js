import React, { Component } from 'react';
import ttwo from '../../images/ttwo.jpg'
import ex from '../../images/ex.jpeg'
import six from '../../images/six.jpg'
import five from '../../images/five.jpg'
import M from "materialize-css"
import know from "../../images/know.jpg"
import {feedback} from "../../store/actions/startAction"
import {connect} from 'react-redux'

class Explore extends Component {
  componentDidMount(){
    let parallax = document.querySelectorAll(".parallax")
    M.Parallax.init(parallax);
  
    let tabs = document.querySelectorAll(".tabs")
    M.Tabs.init(tabs);
  }
 state={
   Email:null,
   Message:null
 }
 handlechange=(e)=>{
   this.setState({
     [e.target.id]:e.target.value
   })
 }
 handlesubmit=(e)=>{
   e.preventDefault()
   this.props.feedback(this.state)
 }
  render() { 
    return ( 
      <div>
        <header></header>
         <section class="container section" >
      
      <div class="row">
        <div class="col s12 l4">
          <img src={ttwo} alt="cal" class="responsive-img"/>
        </div>
        <div class="col s12 l6 offset-l1">
      <h2 class="indigo-text text-darken-4">Calculate</h2>
      <p>
        Calculate with ease all your expenses and save your incomes at one place.
      </p>
    </div>
    </div>
    <div class="row">
    <div class="col s12 l4 push-l7 offset-l1">
      <img
        src={ex}
        alt="save"
        class="responsive-img "
      />
    </div>

    <div class="col s12 l6 pull-l5 right-align offset-l1">
      <h2 class="indigo-text text-darken-4">Save and Spend </h2>
      <p>
        Spending0 is Directly Propostional to Saving
      </p>
    </div>
    </div>

    <div class="row">
        <div class="col s12 l4">
          <img src={know} alt="you"class="responsive-img "/>
        </div>
        <div class="col s12 l6 offset-l1">
      <h2 class="indigo-text text-darken-4">Get To Know You</h2>
      <p>
        Get to know your own self. 
      </p>
    </div>
    </div>
    </section>

    
    <div class="parallax-container">
    <div class="parallax">    
  <img src={six} alt="p" class="responsive-img" />
  </div>
    </div>
        
    <section class="container section scrollspy" id="services">
      <div class="row">
        <div class="col s12 l4">
          <h2 class="indigo-text text-darken-4">Motive</h2>
          <p>
            Calculating Expenses for you is our main motive. Also our services include giving the users a clear cut view
            of their spending pattern. Along with tips and tricks to save and spend money. 
          </p>
        </div>

        <div class="col s12 l6 offset-l2">
          <ul class="tabs">
            <li class="tab col s6">
              <a href="#photography" class="indigo-text text-darken-4"
                >FREEDOM</a
              >
            </li>
            <li class="tab col s6">
              <a href="#editing" class="indigo-text text-darken-4">INTROSPECTION</a>
            </li>
          </ul>
          <div class="col s12" id="photography">
            <p class="flow-text indigo-text text-darken-4">Freedom</p>
            <p>
              Financial Freedom is like an addiction. So,taste it.

            </p>
          </div>

          <div class="col s12" id="editing">
            <p class="flow-text indigo-text text-darken-4">Introspection</p>
            <p>
            "Money is the eighth wonder of the world. He who understands it, earns it.. he who doesnt ..pays it".
            But before that know about your own self.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="parallax-container">
          <div class="parallax">
            <img src={five} alt="parallax" class="responsive-img"/>
          </div>
        </div>




        <div class="section container">
      <div class="row">
        <div class="col s12 l5">
          <h2 class="indigo-text text-darken-4">
            Get in Touch
          </h2>
          <p>
            With our team work, we provide you with accuracy, thoroughness with the total of increasing Your
            productivity .At the end you will be inspired by our responsivness.
          </p>
        </div>
        <div class="col s12 l5 offset-l2">
          <form onSubmit={this.handlesubmit}>
            <div class="input-field">
              <i class="material-icons prefix">email</i>
              <input onChange={this.handlechange}type="email" id="Email" />
              <label for="Email">Your email</label>
            </div> 

            <div class="input-field">
              <i class="material-icons prefix">message</i>
              <textarea
                onChange={this.handlechange}
                name=""
                id="Message"
                class="materialize-textarea"
              ></textarea>
              <label for="Message">Your message</label>
            </div>


           
            <div onClick={()=>M.toast({html: 'Submitted'})}>
            <button class="btn">Submit</button></div>
            
          </form>
        </div>
      </div>
    </div>


    <footer class="page-footer grey darken-3">
      <div class="container">
        <div class="row">
          <div class="col s12 l6">
            <h5>About me</h5>
            <p>
            We are professionally certified. we are not involved in
              any of the malpractices.Your data is purely protected from
              others.
            </p>
          </div>

          <div class="col s12 l4 offset-l2">
            <h5>Connect</h5>
            <ul>
              <li><a href="#" class="grey-text text-lighten-3">Facebook</a></li>
              <li>
                <a href="#" class="grey-text text-lighten-3">Instagram</a>
              </li>
              <li><a href="#" class="grey-text text-lighten-3">Twitter</a></li>
              <li>
                <a href="#" class="grey-text text-lighten-3">Linked In</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright grey darken-4">
        <div class="container center-align">
          &copy;  copyright 2020
        </div>
      </div>
    </footer>



      </div>
    );
  }
}  

const mapDispatchToProps=(dispatch)=>{
  return{
      feedback:(param)=>dispatch(feedback(param))
  }
}
      
 
export default connect(null,mapDispatchToProps)(Explore);
