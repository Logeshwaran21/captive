import React from 'react';
import RX from 'reactxp';
import { Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, label, Visible, Checkbox, lg, xs } from 'react-bootstrap';
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
        marginBottom: -27,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
    }),
    button2: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 110,
        height: 5,
        marginLeft: 350,
        marginBottom: -23,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
    }),
    validatebutton: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 110,
        height: 5,
        marginLeft: 280,
        marginBottom: -23,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
    }),
    // validatebutton: RX.Styles.createButtonStyle({
    //     backgroundColor: 'rgb(8, 37, 103)',
    //     borderWidth: 1,
    //     width: 110,
    //     height: 5,
    //     marginLeft: 356,
    //     marginBottom: -23,
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
    }),
    button2Text: RX.Styles.createTextStyle({
        fontSize: 14,
        color: 'white',
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
        borderRadius: 8,
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

};

var params = [];
var value = [];
var policyId = "";
var policy;
var rules = [];

export default class Createpolicy extends RX.Component {
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

        console.log("hitting")
        policy = this.state.policyID

        return fetch('http://35.236.167.82:8082/createpolicy', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },

            body: JSON.stringify({


                "policyID": String(this.state.policyID),
                "rules": [this.state.rules],
            }),
        }).then((response) => response.json()).then((responseJson) => {

            var res = responseJson;
            var responseJson = JSON.stringify(res)

            swal("Policy created succesfully", responseJson)
            console.log("response", responseJson)

        })

    }

    onChangePost3 = () => {

        console.log("hitting")
        policy = this.state.policyID

        return fetch('http://localhost:8082/evaluateExpression', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },

            body: JSON.stringify({


                "policyID": String(this.state.policyID),
                "rules": [this.state.rules],
            }),
        }).then((response) => response.json()).then((responseJson) => {

            var res = responseJson;
            var responseJson = JSON.stringify(res)

            swal("Policy created succesfully", responseJson)
            console.log("response", responseJson)

        })

    }




    onChangePost2 = () => {
        console.log("akash")

        return fetch('http://localhost:8082/validateClaim', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },

            body: JSON.stringify({


                "policyId": this.state.userId,
                "params": ["claimAmount", "maxclim"],
                "value": [this.state.claimamount, this.state.maxclaim]


            }),
        }).then((response) => response.json()).then((responseJson) => {

            var res = responseJson;
            var responseJson = JSON.stringify(res)

            swal("Validated succesfully", responseJson)
            console.log("validate", responseJson)

        })

    }
    vf
    onChangepolicyId = (value) => {
        this.setState({ policyID: value });
        console.log(this.state.policyID, "policyID");
    }
    onChangerules = (value) => {
        this.setState({ rules: value });
        console.log(this.state.rules, "rules");
    }
    onChangeuserId = (value) => {
        this.setState({ userId: value });
        console.log(this.state.userId, "userId");
    }
    onChangeclaimamount = (value) => {
        this.setState({ claimamount: value });
        console.log(this.state.claimamount, "claimamount");
    }
    onChangemaxclaim = (value) => {
        this.setState({ maxclaim: value });
        console.log(this.state.maxclaim, "maxclaim");
    }

    componentDidMount() {


    }
    policyId = () => {

        this.setState({ policyId: true })
        this.setState({ validate: false })

    }
    validate = () => {

        this.setState({ policyId: false })
        this.setState({ validate: true })

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

                <RX.View>

                    <div class="container">

                        <div class="row">
                            <div class="col-sm-3 col-md-2 sidebar" style={styles.sidenavbar}>
                                <ul class="nav nav-sidebar">
                                    <li class="active" onClick={() => this.policyId()} ><a href="#" style={{ color: "orange" }}>Create Policy<span class="sr-only">(current)</span></a></li>
                                    <li onClick={() => this.validate()} ><a href="#" style={{ color: "orange" }}>Validate</a></li>
                                </ul>
                            </div>

                            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" style={styles.dashboard}>

                                <br></br>
                                <div class="container">
                                    {this.state.policyId ?

                                        <div class="col-xs-6 col-sm-3 placeholder">



                                            <div class="container" style={styles.policyIddiv}>


                                                <label for="lgFormGroupInput" style={styles.policyId} onChangeText={this.onChangepolicyId} class="col-sm-2 col-form-label col-form-label-lg">Enter Policy Identification Number</label>
                                                <div class="col-sm-10">
                                                    <RX.TextInput type="email" style={styles.policyIdTextBox} onChangeText={this.onChangepolicyId} value={this.state.policyID} id="lgFormGroupInput" placeholder="hello" />
                                                </div>

                                            </div>
                                            <br></br>
                                            <div class="container">
                                                <label for="lgFormGroupInput" style={styles.rules} class="col-sm-2 col-form-label col-form-label-lg">Rules</label>
                                                <div class="col-sm-10">
                                                    <RX.TextInput type="email" style={styles.rulesTextBox} value={this.state.rules} onChangeText={this.onChangerules} id="lgFormGroupInput" placeholder="" />
                                                </div>
                                            </div>
                                            <br></br>
                                            <RX.Button style={[styles.button1]} onPress={() => this.onChangePost()}>
                                                <RX.Text style={[styles.button1Text]}>
                                                    {'validate'}
                                                </RX.Text>
                                            </RX.Button>
                                            <RX.Button style={[styles.button2]} onPress={() => this.onChangePost()}>
                                                <RX.Text style={[styles.button2Text]}>
                                                    {'Submit'}
                                                </RX.Text>
                                            </RX.Button>
                                        </div> : null}
                                    {this.state.validate ?

                                        <div class="col-xs-6 col-sm-3 placeholder">
                                            <div class="container" style={styles.validatediv}>
                                                <div class="container">
                                                    <label for="lgFormGroupInput" style={styles.sideText} class="col-sm-2 col-form-label col-form-label-lg">Enter Policy Identification Number</label>
                                                    <div class="col-sm-10">
                                                        <RX.TextInput type="email" style={styles.InputSelectorCopy} value={this.state.userId} onChangeText={this.onChangeuserId} id="lgFormGroupInput" placeholder="" />
                                                    </div> </div>
                                                <br></br>
                                                <div class="container">
                                                    <label for="lgFormGroupInput" style={styles.sideText} class="col-sm-2 col-form-label col-form-label-lg">Claim Amount</label>
                                                    <div class="col-sm-10">

                                                        <RX.TextInput type="email" style={styles.InputSelectorCopy} value={this.state.claimamount} onChangeText={this.onChangeclaimamount} id="lgFormGroupInput" placeholder="" />

                                                    </div>
                                                </div>
                                                <br></br>

                                                <div class="container">
                                                    <label for="lgFormGroupInput" style={styles.sideText} class="col-sm-2 col-form-label col-form-label-lg">Maximum Claim</label>
                                                    <div class="col-sm-10">

                                                        <RX.TextInput type="email" style={styles.InputSelectorCopy} value={this.state.maxclaim} onChangeText={this.onChangemaxclaim} id="lgFormGroupInput" placeholder="" />

                                                    </div>
                                                </div>

                                            </div>
                                            <br></br>

                                            <RX.Button style={[styles.validatebutton]} onPress={() => this.onChangePost2()}>
                                                <RX.Text style={[styles.button1Text]}>
                                                    {'Submit'}
                                                </RX.Text>
                                            </RX.Button>


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