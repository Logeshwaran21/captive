import React from 'react';
import RX from 'reactxp';
import { Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, label, Visible, Checkbox, lg, xs } from 'react-bootstrap';
import styling from './AppStyles';


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
        width: 110,
        height: 5,
        marginLeft: 220,
        marginBottom: -23,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
    }),
    // validatebutton: RX.Styles.createButtonStyle({
    //     backgroundColor: 'rgb(8, 37, 103)',
    //     borderWidth:1,
    //     width:110,
    //    height:5,
    //     marginLeft:280,
    //     marginBottom:-23, 
    //     padding: 12,
    //     borderRadius: 8,
    //     borderColor: 'rgb(8, 37, 103)',
    // }),


    button1Text: RX.Styles.createTextStyle({
        fontSize: 14,
        color: 'white',
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
        borderRadius: 8,
        font: 'rgb(8, 37, 103)',
    }),

    navrqlogo: RX.Styles.createViewStyle({
        height: 20,
        width: '30%',
        marginTop: '5',
        marginBottom: -20,
        marginRight: 1200
    }),

    sidenavbar: RX.Styles.createTextStyle({
        fontSize: 15,
        marginLeft: -70,
        color: 'white',
        // marginTop:-56,
        width: 200,
        height: 620,
        backgroundColor: '#242536'
    }),

    dashboard: RX.Styles.createTextStyle({
        fontSize: 15,
        marginRight: 1150,
        color: 'black',
        marginTop: -620

    }),
    policyIdTextBox: RX.Styles.createTextStyle({
        borderWidth: 1,
        borderColor: 'rgb(8, 37, 103)',
    }),
    rulesTextBox: RX.Styles.createTextStyle({
        height: 140,
        width: 650,
        borderWidth: 1
    }),
    info: RX.Styles.createTextStyle({
        // .form-inline .form-group { margin-right:10px; }
        // .well-primary {
        color: "rgb(255, 255, 255)",
        backgroundColor: "rgb(12, 39, 93)",
        borderColor: "rgb(8, 37, 103)",
        // }
        glyphicon: { marginRight: 5 },
        width: 929,
        // marginLeft:100
    }),
    infodiv: RX.Styles.createTextStyle({

        width: 550,

    }),
    imagebanner: RX.Styles.createTextStyle({

        color: "black",
        marginTop: -120,
        paddingTop: 90,
        marginRight: -100
        // paddingBottom:110
    }),
    rapidsettle: RX.Styles.createTextStyle({

        width: 1191,
        height: 160,
        marginLeft: -147
    }),
    aboutuscontainer: RX.Styles.createTextStyle({
        marginLeft: -27,
        // width:500
    }),
    rulestextbox: RX.Styles.createTextStyle({
        width: 508,
        height: 100,
        borderWidth: 1,
        borderColor: 'rgb(8, 37, 103)',
        marginLeft: 165
    }),

    validatebutton: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 110,
        height: 5,
        marginLeft: 305,
        marginBottom: -23,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
    }),

    submitbutton: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 147,
        height: 5,
        marginLeft: 346,
        marginBottom: -23,
        marginTop: -25,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
    }),

    rulesdiv: RX.Styles.createButtonStyle({
        // backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        marginLeft: 124,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        marginTop: -243
    }),

    useit: RX.Styles.createButtonStyle({
        backgroundColor: 'white',
        borderWidth: 1,
        marginLeft: -92,
        width: 192,
        height: 240,
        borderRadius: 8,
        borderStyle: 'black',
        marginTop: 19
    }),

    opeartorspanel: RX.Styles.createTextStyle({
        marginLeft: -106,
        width: 350,
        marginTop: -123,
        backgroundColor: 'white'

    }),
    nxtbut: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 92,
        height: 30,
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
        // margin: 200,
        marginLeft: 352,
        marginTop: -31,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: 'white'
    }),

};

var params = [];
var value = [];
var responseJson;
var policy;

export default class CreatePolicy extends RX.Component {
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



        console.log("hiiiiii")
        return fetch('http://localhost:8082/createpolicy', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },

            body: JSON.stringify({

                "policyID": this.state.policyID,
                "rules": [this.state.values]
                // params:[
                //     "claimAmount",
                //       "maxclim"
                //   ]

            }),
        }).then((response) => response.json()).then((responseJson) => {

            var res = responseJson;
            var responseJson = JSON.stringify(res)

            swal("Policy created succesfully", responseJson)
            console.log("response", responseJson)

        }).catch(function () {
            console.log("error");
        });

    }


    onChangePost2 = () => {



        return fetch('http://localhost:8082/validateExpression', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },

            body: JSON.stringify({
                //  "policyID":this.state.policyID,
                //     "policyId":this.state.policyId,
                //     "params":[
                //       "claimAmount",
                //         "maxclim"
                //     ],
                //     "value":[
                //       this.state.claimamount,
                //     this.state.maxclaim
                //   ]

                "expression": this.state.expression
            }),
        }).then((response) => response.json()).then((responseJson) => {

            var res = responseJson;
            var responseJson1 = JSON.stringify(res)

            swal("Validated succesfully", responseJson1)
            console.log("validate", responseJson1)

        }).catch(function () {
            console.log("error");
        });

    }




    componentDidMount() {


    }





    onChangepolicyId = (value) => {
        this.setState({ policyID: value });
        console.log(this.state.policyID, "policyID");
    }
    onChangerules = (value) => {
        this.setState({ rules: value });
        console.log(this.state.rules, "rules");
    }
    onChangevalidatepolicyid = (value) => {
        this.setState({ policyId: value });
        console.log(this.state.policyId, "policyId");
    }
    onChangeclaimamount = (value) => {
        this.setState({ claimamount: value });
        console.log(this.state.claimamount, "claimamount");
    }
    onChangemaxclaim = (value) => {
        this.setState({ maxclaim: value });
        console.log(this.state.maxclaim, "maxclaim");
    }

    policyIds = () => {

        this.setState({ policyIds: true })
        this.setState({ aboutus: false })

    }
    aboutus = () => {

        this.setState({ policyIds: false })
        this.setState({ aboutus: true })

    }

    // iteration input click function start
    createUI() {
        return this.state.values.map((el, i) =>
            <div key={i}>
                <input type="text" value={el || ''} onChange={this.handleChange.bind(this, i)} />
                <input type='button' value='remove' onClick={this.removeClick.bind(this, i)} />
            </div>
        )
    }

    handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
    }

    addClick() {
        this.setState(prevState => ({ values: [...prevState.values, ''] }))
    }

    removeClick(i) {
        let values = [...this.state.values];
        values.splice(i, 1);
        this.setState({ values });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.values.join(', '));
        event.preventDefault();
    }
    // iteration input click function end

    render() {
        return (
            <RX.ScrollView style={styles.scroll}>
                <RX.View style={styles.navcontainer}>
                    <RX.Image source={'./src/img/rqlogo.png'} style={[styles.navrqlogo]} />
                    <RX.Text style={styles.navwelcome}>
                        RAPID SETTLE
                    </RX.Text>
                </RX.View>

                <RX.View>

                    <div class="container">

                        <div class="row">
                            <div class="col-sm-3 col-md-2 sidebar" style={styles.sidenavbar}>
                                <ul class="nav nav-sidebar">
                                    <li class="active" onClick={() => this.policyIds()} ><a href="#" style={{ color: "orange" }}>Create Policy<span class="sr-only">(current)</span></a></li>
                                    <li onClick={() => this.gethelp()} ><a href="#" style={{ color: "orange" }}>Get Help!</a></li>
                                    <li onClick={() => this.aboutus()} ><a href="#" style={{ color: "orange" }}>About Us</a></li>
                                </ul>
                            </div>

                            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" style={styles.dashboard}>

                                <br></br>
                                <div class="container">
                                    {this.state.policyIds ?

                                        <div class="col-xs-6 col-sm-3 placeholder">



                                            <div class="container" style={styles.policyIddiv}>

                                                <div >
                                                    <label for="lgFormGroupInput" style={styles.policyId} class="col-sm-2 col-form-label col-form-label-lg">Policy ID:</label>

                                                    <RX.TextInput type="email" style={styles.policyIdTextBox} value={this.state.policyID} onChangeText={this.onChangepolicyId} id="lgFormGroupInput" placeholder="" />
                                                </div>
                                                <div>
                                                    {/* form include start */}
                                                    <form onSubmit={this.handleSubmit}>
                                                        {this.createUI()}
                                                        <input type='button' value='add more' onClick={() => { this.addClick.bind(this), this.onChangePost() }} />
                                                        <input type="submit" value="Submit" />
                                                    </form>
                                                    {/* form include end */}
                                                </div>
                                                <br></br>
                                                <div >
                                                    <label for="lgFormGroupInput" style={styles.policyId} class="col-sm-2 col-form-label col-form-label-lg">Policy Category:</label>

                                                    <RX.TextInput type="email" style={styles.policyIdTextBox} id="lgFormGroupInput" placeholder="" />
                                                </div>
                                                <br></br>

                                                <div class="well well-sm well-primary" style={styles.useit}>
                                                    <h4><b>Use these values only</b></h4>
                                                    <li>ClaimAmount</li>
                                                    <li>MaxClaim</li>
                                                    <li>Diagnosis</li>
                                                    <li>Discharge</li>
                                                    <li>TotalClaim</li>
                                                    <li>AmountPaid</li>
                                                    <li>Suminsured</li>
                                                    <li>ValidateAmount</li>
                                                </div>
                                                <div style={styles.rulesdiv}>
                                                    <h4><b>Rules:</b></h4>
                                                    <div style={styles.policyId} >
                                                        <label for="lgFormGroupInput" style={styles.policyId} class="col-sm-2 col-form-label col-form-label-lg">TPA:</label>

                                                        <RX.TextInput type="email" value={this.state.rules} value={this.state.expression} style={styles.rulestextbox} onChangeText={this.onChangerules} id="lgFormGroupInput" placeholder="" />
                                                    </div>
                                                    <br></br>
                                                    {/* <RX.Button style={ [styles.validatebutton] } onPress={()=> this.onChangePost2()} value={this.state.expression}>
      <RX.Text style={ [styles.button1Text] }>
                             { 'Validate' }
                         </RX.Text>
                     </RX.Button> */}
                                                    <br></br>
                                                    <RX.Button style={[styles.submitbutton]} onPress={() => this.onChangePost()} >
                                                        <RX.Text style={[styles.button1Text]} style={{ color: "white" }}>
                                                            {'Validate & Submit'}
                                                        </RX.Text>
                                                    </RX.Button>
                                                    {/* <RX.Button style={ [styles.submitbutton] } onPress={()=> this.onChangePost()} >
      <RX.Text style={ [styles.button1Text] } style={{color:"white"}}>
                             { 'Validate & Submit' }
                         </RX.Text>
                     </RX.Button> */}
                                                    <br></br>  <br></br>
                                                    <div >
                                                        <label for="lgFormGroupInput" style={styles.policyId} class="col-sm-2 col-form-label col-form-label-lg">Auto Approval:</label>

                                                        <RX.TextInput type="email" style={styles.rulestextbox} id="lgFormGroupInput" placeholder="" />
                                                    </div>
                                                    <br></br>
                                                    {/* <RX.Button style={ [styles.validatebutton] } onPress={()=> this.onChangePost2()}>
      <RX.Text style={ [styles.button1Text] }>
                             { 'Validate' }
                         </RX.Text>
                     </RX.Button> */}
                                                    <br></br>
                                                    <RX.Button style={[styles.submitbutton]} onPress={() => this.onChangePost()}>
                                                        <RX.Text style={[styles.button1Text]} style={{ color: "white" }}>
                                                            {'Validate & Submit'}
                                                        </RX.Text>
                                                    </RX.Button>
                                                    <br></br>  <br></br>
                                                </div>
                                                <div id="#collapseOne" class="panel-collapse collapse in">
                                                    <div class="panel-body">

                                                        <div class="well well-sm well-primary" style={styles.opeartorspanel}>
                                                            <h4><b>Use these Operators only</b></h4>
                                                            <div class="row">
                                                                <div class="col-xs-1 bold" style={{ color: "black" }}>?</div>
                                                                <div class="col-xs-1" style={{ color: "black" }}>=</div>
                                                                <div class="col-xs-1 bold" style={{ color: "black" }}>!</div>
                                                                <div class="col-xs-1" style={{ color: "black" }}>{"<"}</div>
                                                                <div class="col-xs-1" style={{ color: "black" }}>{">"}</div>
                                                                <div class="col-xs-1" style={{ color: "black" }}>{"{"}</div>
                                                                <div class="col-xs-1" style={{ color: "black" }}>{"}"}</div>
                                                                <div class="col-xs-1" style={{ color: "black" }}>{"+"}</div>
                                                                <div class="col-xs-1" style={{ color: "black" }}>{"-"}</div>
                                                                <div class="col-xs-1" style={{ color: "black" }}>{"*"}</div>
                                                                <div class="col-xs-1" style={{ color: "black" }}>{"/"}</div>
                                                                <div class="col-xs-1" style={{ color: "black" }}>\</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <br></br>

                                                <RX.Button style={styles.nxtbut} onPress={this.props.onNavigateCreatePolicy}>
                                                    {'Next'}

                                                </RX.Button>
                                            </div>

                                        </div>


                                        : null}

                                    {this.state.aboutus ?

                                        <div class="container" style={styles.aboutuscontainer}>
                                            <div class="image-aboutus-banner" style="margin-top:70px" style={styles.imagebanner} >
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <h1 class="lg-text">About Us</h1>
                                                            {/* <p class="image-aboutus-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                                            <RX.Image source={'./src/img/RapidQube logo-01.png'} style={[styles.rapidsettle]} />
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
                                                                        <a href="https://www.facebook.com/"><i id="social-fb" style={{ color: "black" }} class="fa fa-facebook-square fa-3x social"></i></a>
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
                                        </div> : null}
                                </div>

                            </div>
                        </div>

                    </div>


                </RX.View>
            </RX.ScrollView>

        );

    }
}
