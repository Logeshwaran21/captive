
import React from 'react';
import RX from 'reactxp';
import {Nav,NavItem,NavDropdown,MenuItem,Grid,Row,Col,Form,FormGroup,ControlLabel,FormControl,label,Visible,Checkbox,lg,xs} from 'react-bootstrap';
/*const {
Welcome
} = TodoStyles;*/


const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#2a647d0a'
    }),
    navcontainer: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#082567',
        height:50,
        padding:5
    }),
    navwelcome: RX.Styles.createTextStyle({
        fontSize: 15,
        marginRight:1050,
        color: 'white',
        marginTop:'5'
    }),
    button1: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth:1,
        width:110,
       height:5,
        marginLeft:220,
        marginBottom:-23, 
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
    }),
    validatebutton: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth:1,
        width:110,
       height:5,
        marginLeft:280,
        marginBottom:-23, 
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
    }),

      
    button1Text: RX.Styles.createTextStyle({
        fontSize: 14,
        color: 'white',
        justifyContent: 'center',
        textAlign:'CENTER',
        alignSelf:'center',
        borderRadius: 8,
    }),

    navrqlogo:RX.Styles.createViewStyle({
        height: 20,
        width:'30%',
         marginTop:'5',
         marginBottom:-20,
         marginRight:1200
    }),

    sidenavbar: RX.Styles.createTextStyle({
        fontSize: 15,
        marginLeft: -70,
        color: 'white',
        // marginTop:-56,
        width: 200,
  height: 620,
        backgroundColor:'#242536'
    }),

    dashboard: RX.Styles.createTextStyle({
        fontSize: 15,
        marginRight:1150,
        color: 'black',
      marginTop: -620
        
    }),
    policyIdTextBox:RX.Styles.createTextStyle({
       borderWidth:1,
       borderColor: 'rgb(8, 37, 103)',
    }),
    rulesTextBox:RX.Styles.createTextStyle({
      height:140,
      width:650,
      borderWidth:1
    }),
    info:RX.Styles.createTextStyle({
        // .form-inline .form-group { margin-right:10px; }
        // .well-primary {
        color: "rgb(255, 255, 255)",
        backgroundColor: "rgb(12, 39, 93)",
        borderColor: "rgb(8, 37, 103)",
        // }
        glyphicon:{marginRight:5},
        width:929,
        // marginLeft:100
      }),
      infodiv:RX.Styles.createTextStyle({
        
        width:550,
       
      }),
      imagebanner:RX.Styles.createTextStyle({
      
    color: "black",
    marginTop:-120,
    paddingTop: 90,
    marginRight:-100
    // paddingBottom:110
      }),
 rapidsettle:RX.Styles.createTextStyle({
      
       width:1191,
       height:160,
       marginLeft:-147
          }),
 aboutuscontainer:RX.Styles.createTextStyle({
        marginLeft:-27,
        // width:500
       }),
    
};

var params=[];
var value=[];
var responseJson;
var policy;

export default class CreatePolicy extends RX.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this._translationValue = RX.Animated.createValue(-100);
        this._animatedStyle = RX.Styles.createAnimatedTextStyle({
            transform: [
                {
                    translateY: this._translationValue
                }
            ]
        });
    }
    
    onChangePost = () => {
        policy=this.state.policyID

        
        console.log("hiiiiii")
                  return  fetch('http://localhost:8082/createpolicy', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                            
                                               },
                        
                        body: JSON.stringify({
   
                        "policyID":this.state.policyID,
                        "rules":[this.state.rules]
                        // params:[
                        //     "claimAmount",
                        //       "maxclim"
                        //   ]
                                    
                                }),
                                }).then((response) => response.json()).then((responseJson) => {
                                   
                                    var res = responseJson;
                                    var responseJson = JSON.stringify(res)
                                     
                                    swal("Policy created succesfully",responseJson)
                                    console.log("response",responseJson)
    
                                }).catch(function() {
                                    console.log("error");
                                });
     
                               }
                            //    onChangePost2 = () => {
                            //     console.log("akash")
                    
                            //       return  fetch('http://localhost:8082/validateClaim', {
                            //             method: 'POST',
                            //             headers: {
                            //                 'Accept': 'application/json',
                            //                 'Content-Type': 'application/json'
                                            
                            //                                    },
                                        
                            //             body: JSON.stringify({
                            //                 //  "policyID":this.state.policyID,
                            //             "policyId":this.state.policyId,
                            //             "params":[
                            //               "claimAmount",
                            //                 "maxclim"
                            //             ],
                            //             "value":[
                            //               this.state.claimamount,
                            //             this.state.maxclaim
                            //           ]       
                            //                     }),
                            //                     }).then((response) => response.json()).then((responseJson) => {
                                                   
                            //                         var res = responseJson;
                            //                         var responseJson1 = JSON.stringify(res)
                                                     
                            //                         swal("Validated succesfully",responseJson1)
                            //                         console.log("validate",responseJson1)
                    
                            //                     }).catch(function() {
                            //                         console.log("error");
                            //                     });
                            //                 }
                              
    
    componentDidMount(){

       
                           }

                          
              
                                     
                           onChangepolicyId = (value) => {
                            this.setState({ policyID: value });
                            console.log(this.state.policyID,"policyID");
                        }
                        onChangerules = (value) => {
                            this.setState({ rules: value });
                            console.log(this.state.rules,"rules");
                        }
                        onChangevalidatepolicyid = (value) => {
                            this.setState({ policyId: value });
                            console.log(this.state.policyId,"policyId");
                        }
                        onChangeclaimamount = (value) => {
                            this.setState({ claimamount: value });
                            console.log(this.state.claimamount,"claimamount");
                        }
                        onChangemaxclaim = (value) => {
                            this.setState({ maxclaim: value });
                            console.log(this.state.maxclaim,"maxclaim");
                        }

    
    policyIds=()=>{
     
        this.setState({ policyIds:true})
        this.setState({ aboutus:false})
        
       }
       aboutus=()=>{
     
        this.setState({ policyIds:false})
        this.setState({ aboutus:true})
        
       }
       

    render() {
        return (
            <RX.ScrollView style={ styles.scroll }>
                <RX.View style={ styles.navcontainer }>
                <RX.Image source={ './src/img/rqlogo.png' } style={ [styles.navrqlogo] } />
                    <RX.Text style={ styles.navwelcome }>
                        RAPID SETTLE
                    </RX.Text>
                </RX.View>
               
                <RX.View>
                    
                <div class="container">
                
                <div class="row">
        <div class="col-sm-3 col-md-2 sidebar" style={ styles.sidenavbar }>
          <ul class="nav nav-sidebar">
            <li class="active"  onClick={()=> this.policyIds()} ><a href="#" style={{color:"orange" }}>Create Policy<span class="sr-only">(current)</span></a></li>                   
            <li onClick={()=> this.gethelp()} ><a href="#" style={{color:"orange"}}>Get Help!</a></li>     
            <li onClick={()=> this.aboutus()} ><a href="#" style={{color:"orange"}}>About Us</a></li>       
          </ul>                   
          </div>

<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" style={ styles.dashboard }>
              
              <br></br>
                <div class="container">
        {this.state.policyIds ?
      
         <div class="col-xs-6 col-sm-3 placeholder">

           

         <div class="container" style={ styles.policyIddiv }>
         
       
         <label for="lgFormGroupInput"  style={styles.policyId} class="col-sm-2 col-form-label col-form-label-lg">Enter Policy Identification Number</label>
         <div class="col-sm-10">
         <RX.TextInput type="email"  style={styles.policyIdTextBox} value={this.state.policyID} onChangeText={this.onChangepolicyId} id="lgFormGroupInput" placeholder=""/>
      </div>
     
</div>
<br></br>
<div class="container">
      <label for="lgFormGroupInput"  style={styles.rules}  class="col-sm-2 col-form-label col-form-label-lg">Rules</label>
         <div class="col-sm-10">
         <RX.TextInput type="email"  style={styles.rulesTextBox}  value={this.state.rules} onChangeText={this.onChangerules}  id="lgFormGroupInput" placeholder=""/>
      </div>
        </div>
        <br></br>
        <RX.Button style={ [styles.button1] } onPress={()=> this.onChangePost()}>
      <RX.Text style={ [styles.button1Text] }>
                             { 'Submit' }
                         </RX.Text>
                     </RX.Button>
       
<br></br><br></br>
 <div class="row"  style={styles.infodiv} >
    
    <div class="col-md-10" >

      <div class="panel-group" id="accordion" style={styles.info} >
		
        {/* <div class="panel panel-default"> */}
			
          <div class="panel-heading">
            <h4 class="panel-title"> <a  data-toggle="collapse" data-target="#accordion" href="#collapseOne"><span class="glyphicon glyphicon-file"> </span>Use these letters and operators only</a> </h4>
          			{/* <img class="headshottitle" src="images/students/2016-001.jpeg" /> */}
		  </div>
          
          <div id="#collapseOne" class="panel-collapse collapse in">
            <div class="panel-body">
            <h4>Operators</h4>
              <div class="well well-sm well-primary">
              
                <div class="row">
                  <div class="col-xs-1 bold" style={{color:"black"}}>?</div>
                  <div class="col-xs-1" style={{color:"black"}}>=</div>
                  <div class="col-xs-1 bold" style={{color:"black"}}>!</div>
                  <div class="col-xs-1" style={{color:"black"}}>{"<"}</div>
                  <div class="col-xs-1" style={{color:"black"}}>{">"}</div>
                  <div class="col-xs-1" style={{color:"black"}}>{"{"}</div>
                  <div class="col-xs-1" style={{color:"black"}}>{"}"}</div>
                  <div class="col-xs-1" style={{color:"black"}}>{"+"}</div>
                  <div class="col-xs-1" style={{color:"black"}}>{"-"}</div>
                  <div class="col-xs-1" style={{color:"black"}}>{"*"}</div>
                  <div class="col-xs-1" style={{color:"black"}}>{"/"}</div>
                  <div class="col-xs-1" style={{color:"black"}}>\</div>
                </div>
                </div>
             
            <h4>Letters</h4>
              <div class="well well-sm well-primary">
                <div class="row">
                  <div class="col-xs-3 bold" style={{color:"black"}}>NAME</div>
                  <div class="col-xs-3" style={{color:"black"}}>AGE</div>
                  <div class="col-xs-3 bold" style={{color:"black"}}>IPD_NO</div>
                  <div class="col-xs-3" style={{color:"black"}}>DOA</div>
                </div>
                <div class="row">
                  <div class="col-xs-3 bold" style={{color:"black"}}>DOJ</div>
                  <div class="col-xs-3" style={{color:"black"}}>DOD</div>
                  <div class="col-xs-3 bold" style={{color:"black"}}>DIAGONIS</div>
                  <div class="col-xs-3" style={{color:"black"}}>claimamount</div>
                </div>
                <div class="row">
                  <div class="col-xs-3 bold" style={{color:"black"}}>Follow Up Visit</div>
                  <div class="col-xs-3" style={{color:"black"}}>maxclaim</div>
                  <div class="col-xs-3 bold" style={{color:"black"}}>TotalClaimedAmount</div>
                  <div class="col-xs-3" style={{color:"black"}}>status</div>
                 </div>
                <div class="row">
                  <div class="col-xs-3 bold" style={{color:"black"}}>HospitalName</div>
                  <div class="col-xs-3" style={{color:"black"}}>policyId</div>
                  <div class="col-xs-3 bold" style={{color:"black"}}>Submit ID</div>
                  <div class="col-xs-3" style={{color:"black"}}>MLC</div>
                </div>
              </div>
              </div>
              </div>
              {/* </div> */}
              </div>
              </div>
              </div>
              </div>
              
               :null}

         {this.state.aboutus ?
          
         <div class="container"  style={styles.aboutuscontainer}>
         <div class="image-aboutus-banner"style="margin-top:70px" style={styles.imagebanner} >
         <div class="container">
          <div class="row">
              <div class="col-md-12">
               <h1 class="lg-text">About Us</h1>
               {/* <p class="image-aboutus-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
               <RX.Image source={ './src/img/RapidQube logo-01.png' } style={ [styles.rapidsettle] } />
             </div>
          </div>
      </div>
      </div>
      <div class="container paddingTB60">
          <div class="row">
      
                  
                  <div class="col-lg-8">
      
                       <hr></hr>
      
                      <h2>We RapidSettle,</h2>
      
                     
                      <p class="lead">We are blockchain experts. We are digital natives. We ensure that from your initial idea through to final implementation, we deliver our solutions leveraging “best in class” digital technology to enhance your business.</p>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p> */}

                  </div>
      
                  
        
      <div class="cta-sektion cta-padding35">
          <div class="container">
              <div class="row">
                  <div class="col-md-9 col-sm-9 col-xs-12">
                      <h3><span class="glyphicon glyphicon-cog "></span> <b>What we have?</b></h3>
                  </div>
                  {/* <div class="col-md-3 col-sm-3 col-xs-12 Tpadding10">
                      <button type="button" class="btn btn-primary site-btn">Start Right Now</button>
                  </div> */}
              </div>
          </div>
      </div>
      <div class="footer-section">
          <div class="footer">
          <div class="container">
              <div class="col-md-4 footer-one">
                  <h5>About Us </h5>
                  <p>We are blockchain experts. We are digital natives. We ensure that from your initial idea through to final implementation, we deliver our solutions leveraging “best in class” digital technology to enhance your business.</p>
                      <div class="social-icons"> 
                     <a href="https://www.facebook.com/"><i id="social-fb"style={{color:"black"}} class="fa fa-facebook-square fa-3x social"></i></a>
                     <a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
                      <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
                      <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
                  </div>	
              </div>
              <div class="col-md-3 footer-two">
                  <h5>Information </h5>
                  <ul>
                                          <li><a href="maintenance.html">Maintenance Tips</a></li>
                                          <li><a href="contact.html">Locations</a></li>
                                          <li><a href="about.html">Testimonials</a></li>
                                          <li><a href="about.html">Careers</a></li>
                                          <li><a href="about.html">Partners</a></li>
                                      </ul>
              </div>
              <div class="col-md-3 footer-three">
                  <h5>Helpful Links </h5>
                  <ul>
                                          <li><a href="maintenance.html">Maintenance Tips</a></li>
                                          <li><a href="contact.html">Locations</a></li>
                                          <li><a href="about.html">Testimonials</a></li>
                                          <li><a href="about.html">Careers</a></li>
                                          <li><a href="about.html">Partners</a></li>
                                      </ul>
              </div>
              {/* <div class="col-md-2 footer-four">
                  <h5>Helpful Links </h5>
                  <ul>
                                          <li><a href="maintenance.html">Maintenance Tips</a></li>
                                          <li><a href="contact.html">Locations</a></li>
                                          <li><a href="about.html">Testimonials</a></li>
                                          <li><a href="about.html">Careers</a></li>
                                          <li><a href="about.html">Partners</a></li>
                                      </ul>
              </div> */}
              
              <div class="clearfix"></div>
          </div>
      </div>
          <div class="footer-bottom">
              <div class="container">
                          <div class="row">
                              <div class="col-sm-12 text-center ">
                                  <div class="copyright-text">
                                      <p>CopyRight © 2018 Digital All Rights Reserved</p>
                                  </div>
                              </div> 
                              </div>
                      </div>
          </div>
      </div>  
                              
              
         
       </div> 
         </div> 
        
         </div>:null}
      
        
      
          
              
     
   
           </div>
              
        </div>
        </div>

            </div>
           
           
               </RX.View>
            </RX.ScrollView>  
                
        );
     
    }
}