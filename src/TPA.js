import React from 'react';
import RX from 'reactxp';
import { Nav, View, NavItem, NavDropdown, MenuItem, Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, label, Visible, Checkbox, lg, xs } from 'react-bootstrap';
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
        backgroundColor: '#082567',
        height: 50,
        padding: 5
    }),
    navwelcome: RX.Styles.createTextStyle({
        fontSize: 15,
        marginRight: 1050,
        color: 'white',
        marginTop: '5'
    }),
    button1: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 90,
        height: 5,
        marginLeft: 430,
        marginBottom: -15,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: "white"
    }),

    // button1Text: RX.Styles.createTextStyle({
    //     fontSize: 14,
    //     color: 'white',
    //     justifyContent: 'center',
    //     textAlign:'CENTER',
    //     alignSelf:'center',
    //     borderRadius: 8,
    // }),

    navrqlogo: RX.Styles.createViewStyle({
        height: 20,
        width: '30%',
        marginTop: '5',
        marginBottom: -20,
        marginRight: 1200
    }),

    sidenavbar: RX.Styles.createTextStyle({
        fontSize: 15,
        // marginLeft: -70,
        color: 'white',
        // marginTop:-56,
        width: 200,
        height: 620,
        backgroundColor: '#242536'
    }),

 manualapprove: RX.Styles.createTextStyle({
    label :{ margin: 20 } ,
    textarea: { margin: 20 } 
    }),
  
    dashboard: RX.Styles.createTextStyle({
        fontSize: 15,
        marginRight: 1150,
        color: 'black',
        marginTop: -620

    }),
    InputSelectorCopy: RX.Styles.createTextStyle({

        borderWidth: 1,
    }),
    sideText: RX.Styles.createTextStyle({

    }),
    nxtbut1: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 132,
        height: 30,
        justifyContent: 'center',
        textAlign:'CENTER',
        alignSelf:'center',
        // margin: 200,
        marginLeft: 347,
        marginTop:39,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: 'white'
    }),
    siDeText1: RX.Styles.createTextStyle({
        fontSize: 16,
        color: 'Black',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 87
 
    }),
    submitid: RX.Styles.createTextStyle({
        marginLeft:83,
        marginTop:-33
 
    }),
 Form1: RX.Styles.createViewStyle({
        display: 'block',
        width: '39%',
        height: 34,
        // padding: 6px 12px;
        fontSize: 14,
        // line: 1.42857143;
        color: "#555",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        marginLeft: 213
    }),
    patientDetails1: RX.Styles.createViewStyle({
        width: 680,
        height: 497,
        marginTop: 58,
        marginLeft: 208,
        background: "#80808080"
    }),

};

var resJson1
var res
var Policyid
var responseJson
var bulkdata
export default class TPA extends RX.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            shareholders: [{ name: '' }],

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


    onChangePost6 = () => {
       

        
        console.log("hiiiiii")
                  return  fetch('http://159.65.148.82:8082/autoapproveclaim', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                            
                                               },
                        
                        body: JSON.stringify({
   
                        "submitID":this.state.submitID,
                        "status":this.state.status,
                        "message":this.state.message,
                        "AmountuserHavetopay":this.state.AmountuserHavetopay,
                        "AmountPayerWouldPay":this.state.AmountPayerWouldPay,
                      
                                    
                                }),
                                }).then((res) => res.json()).then((responseJson) => {
                                   
                                    var res = responseJson;
                                    var responseJson = JSON.stringify(res)
                                     
                                    swal("Details updated",responseJson)
                                    console.log("response",responseJson)
    
                                }).catch(function() {
                                    console.log("error");
                                });
     
                               }


    componentDidMount() {


    }
    onChangeuserId = (value) => {
        this.setState({ submitID: value });
        console.log(this.state.submitID, "policyId");
       
    }
    onChangeAmountuserHavetopay = (value) => {
        this.setState({ AmountuserHavetopay: value });
        console.log(this.state.AmountuserHavetopay, "AmountuserHavetopay");
       
    }
    onChangeAmountPayerWouldPay = (value) => {
        this.setState({ AmountPayerWouldPay: value });
        console.log(this.state.AmountPayerWouldPay, "AmountPayerWouldPay");
      
    }
    onChangestatus = (value) => {
        this.setState({ status: value });
        console.log(this.state.status, "status");
       
    }
    onChangemessage = (value) => {
        this.setState({ message: value });
        console.log(this.state.message, "message");
     
    }


    render() {
        


        return (

            <RX.ScrollView style={styles.scroll}>
                <RX.View style={styles.navcontainer}>
                    <RX.Image source={'./src/img/rqlogo.png'} style={[styles.navrqlogo]} />
                    <RX.Text style={styles.navwelcome}>
                        RAPID SETTLE
    </RX.Text>
                </RX.View>
                <div class="col-sm-3 col-md-2 sidebar" style={ styles.sidenavbar }>
          <ul class="nav nav-sidebar">
            <li class="active"  onClick={()=> this.policyIds()} ><a href="#" style={{color:"orange" }}>Create Policy<span class="sr-only">(current)</span></a></li>                   
            <li onClick={()=> this.patientDetails()} ><a href="#" style={{color:"orange"}}>Discharge Summary</a></li>     
            <li onClick={() => this.userId()} ><a href="#" style={{ color: "orange" }}>User History <span class="sr-only">(current)</span></a></li>
            <li onClick={() => this.userId1()} ><a href="#" style={{ color: "orange" }}>Policy Details<span class="sr-only">(current)</span></a></li>
            <li onClick={() => this.userId1()} ><a href="#" style={{ color: "orange" }}>TPA Approval<span class="sr-only">(current)</span></a></li>
            <li onClick={() => this.bulkdata()} ><a href="#" style={{ color: "orange" }}>All History <span class="sr-only">(current)</span></a></li>
            <li onClick={()=> this.aboutus()} ><a href="#" style={{color:"orange"}}>About Us</a></li>       
          </ul>                   
          </div>
                <RX.View>
               


                                            <div class="jumbotron" style={styles.patientDetails1}>
                                                <form>
                                                    <h3 className="text-center font-weight-bold pt-4 pb-5" style={{ marginTop: -11 }}><strong>Manual Approval</strong></h3>
                                                </form>
                                                <br>
                                                </br>
                                                <form>
                                                    <div style={{marginTop:30}}>
                                                        <div>
                                                            <label for="inputPassword4" style={styles.siDeText1}>Submit ID :</label>
                                                            </div>
                                                                <div style={styles.submitid} >
                                                            <RX.TextInput
                                                                style={styles.Form1}
                                                                placeholder=""
                                                                value={this.state.submitID}
                                                                onChangeText={this.onChangeuserId}

                                                            />
                                                        </div>

<br></br>


                                                        <div >
                                                            <label for="inputEmail4" style={styles.siDeText1}>Amount User have to pay :</label>
                                                           
                                                           </div>
                                                            <div style={styles.submitid} >

                                                            <RX.TextInput
                                                                style={styles.Form1}
                                                                placeholder=""
                                                                value={this.state.AmountuserHavetopay}
                                                                onChangeText={this.onChangeAmountuserHavetopay}

                                                            />
                                                        </div>
                                                        <br></br>
                                                        <div >
                                                            <label for="inputPassword4" style={styles.siDeText1}>Amount Payer would pay :</label>

</div>
<div style={styles.submitid} >
                                                            <RX.TextInput
                                                                style={styles.Form1}
                                                                placeholder=""
                                                                value={this.state.AmountPayerWouldPay}
                                                                onChangeText={this.onChangeAmountPayerWouldPay}

                                                            />
                                                        </div>
                                                        <br></br>
                                                        <div>
                                                            <label for="inputEmail4" style={styles.siDeText1}>Message :</label>
</div>
<div style={styles.submitid} >

                                                            <RX.TextInput
                                                                style={styles.Form1}
                                                                placeholder=""
                                                                value={this.state.message}
                                                                onChangeText={this.onChangemessage}

                                                            />
                                                        </div>
                                                        <br></br>
                                                        <div>
                                                            <label for="inputPassword4" style={styles.siDeText1}>Status :</label>

</div>
<div style={styles.submitid} >

                                                            <RX.TextInput
                                                                style={styles.Form1}
                                                                placeholder=""
                                                                value={this.state.status}
                                                                onChangeText={this.onChangestatus}

                                                            />

                                                        </div>

                                                       
                                                    </div>

                                                                        </form>
<div>
                                                <RX.Button style={styles.nxtbut1} onPress={() => this.onChangePost6()} >
                                                    {'Submit'}

                                                </RX.Button>
                                                </div>   </div>    
                </RX.View>
            </RX.ScrollView>

        );

    };
   
} 
