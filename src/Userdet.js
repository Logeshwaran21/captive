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
        marginLeft: -79,
        marginTop: -112,
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
    subbut: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 66,
        height: 30,
        // margin: 200,
        marginLeft: -467,
        marginTop: -125,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
    }),
    subid: RX.Styles.createButtonStyle({
        marginLeft: 3
    }),
    subform: RX.Styles.createButtonStyle({
        marginLeft: 10,
        display: 'block',
        width: '80%',
        height: 34,
        // padding: 6px 12px;
        fontSize: 14,
        // line: 1.42857143;
        color: "#555",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,

    }),
    pvbut: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 66,
        height: 30,
        // margin: 200,
        marginLeft: -75,
        marginTop: -31,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
    }),
    pvid: RX.Styles.createButtonStyle({
        marginLeft: 90
    }),
    pvform: RX.Styles.createButtonStyle({
        marginLeft: 80,
        display: 'block',
        width: '80%',
        height: 34,
        // padding: 6px 12px;
        fontSize: 14,
        // line: 1.42857143;
        color: "#555",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,

    }),
    clabut: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 66,
        height: 30,
        // margin: 200,
        marginLeft: 310,
        marginTop: -31,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
    }),
    claid: RX.Styles.createButtonStyle({
        marginLeft: 160
    }),
    claform: RX.Styles.createButtonStyle({
        marginLeft: 140,
        display: 'block',
        width: '80%',
        height: 34,
        // padding: 6px 12px;
        fontSize: 14,
        // line: 1.42857143;
        color: "#555",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,

    }),
    setbut: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 66,
        height: 30,
        // margin: 200,
        marginLeft: 670,
        marginTop: -29,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
    }),
    setid: RX.Styles.createButtonStyle({
        marginLeft: 200
    }),
    setform: RX.Styles.createButtonStyle({
        marginLeft: 200,
        display: 'block',
        width: '80%',
        height: 34,
        // padding: 6px 12px;
        fontSize: 14,
        // line: 1.42857143;
        color: "#555",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,

    }),
    jumbotron: RX.Styles.createViewStyle({
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#82eec6c7',
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
    }),



};



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

    componentDidMount() {


    }
    onChangePost = () => {
        console.log("welcome")

        return fetch('http://localhost:8082/retrieveClaim', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },

            body: JSON.stringify({

                "userId": this.state.userId

            }),
        }).then((result) => result.json()).then((responseJson) => {
            var NAME = responseJson.result[0].Records.keys.NAME
            var NAME = NAME
            this.setState({ NAME: NAME })
            var AGE = responseJson.result[0].Records.keys.AGE;
            var AGE = AGE
            this.setState({ AGE: AGE })
            // console.log('hello------->', res)
            // swal(res)
        })
    }
    onChangename = (value) => {
        this.setState({ userId: value });
        console.log(this.state.userId, "userId");
    }
    subdetail = () => {

        this.setState({ subiddetail: true })
        // this.setState({ aboutus: false })

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
                    <div className="jumbotron" style={styles.jumbotron}>
                        <div class="form-group col-md-2">
                            <label for="inputPasswo rd4" style={styles.subid}>SubmitId:</label>
                            <RX.TextInput
                                style={styles.subform}
                                placeholder=""
                                value={this.state.userId}
                                onChangeText={this.onChangename}
                            // defaultValue={ this.state.inputValue }
                            />


                        </div>

                        <div class="form-group col-md-2">
                            <label for="inputPassword4" style={styles.pvid}>PolicyID:{this.state.suggestion}</label>
                            <form>
                                <RX.TextInput
                                    style={styles.pvform}
                                    placeholder=""
                                    value={this.state.policyid}
                                    onChangeText={this.onChangeNAME}
                                // defaultValue={ this.state.inputValue }
                                />
                            </form>


                        </div>
                        <div>

                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputPassword4" style={styles.claid}>claim:{this.state.suggestion}</label>
                            <RX.TextInput
                                style={styles.claform}
                                placeholder=""
                                value={this.state.claim}
                                onChangeText={this.onChangeNAME}
                            // defaultValue={ this.state.inputValue }
                            />
                            {/* <RX.Button style={styles.clabut} onPress={() => this.onChangePost()}>
                                {'Submit'}

                            </RX.Button> */}
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputPassword4" style={styles.setid}>settlement:{this.state.suggestion}</label>
                            <RX.TextInput
                                style={styles.setform}
                                placeholder=""
                                value={this.state.settlement}
                                onChangeText={this.onChangeNAME}
                            // defaultValue={ this.state.inputValue }
                            />
                            {/* <RX.Button style={styles.setbut} onPress={() => this.onChangePost()}>
                                {'Submit'}
                            </RX.Button> */}
                        </div>




                    </div>
                    <RX.Button style={styles.subbut} onPress={() => { this.onChangePost(), this.subdetail() }}>
                        {'Submit'}
                    </RX.Button>
                    <RX.Button style={styles.pvbut} onPress={() => this.onChangePost1()}>
                        {'Submit'}

                    </RX.Button>
                    <RX.Button style={styles.clabut} onPress={() => this.onChangePost2()}>
                        {'Submit'}

                    </RX.Button>
                    <RX.Button style={styles.setbut} onPress={() => this.onChangePost3()}>
                        {'Submit'}

                    </RX.Button>
                    <div class="container">

                        <div class="row">
                            <div class="col-sm-3 col-md-2 sidebar" style={styles.sidenavbar}>
                                <ul class="nav nav-sidebar">
                                    <li class="active" onClick={() => this.policyIds()} ><a href="#" style={{ color: "orange" }}>Create Policy<span class="sr-only">(current)</span></a></li>
                                    <li onClick={() => this.gethelp()} ><a href="#" style={{ color: "orange" }}>Get Help!</a></li>
                                    <li onClick={() => this.aboutus()} ><a href="#" style={{ color: "orange" }}>About Us</a></li>
                                </ul>
                            </div>
                            {this.state.subiddetail ? <div>
                                <h3>Name:{this.state.NAME}</h3>
                                <h3>Age:{this.state.AGE}</h3>
                            </div> : null}
                        </div>

                    </div>

                </RX.View>
            </RX.ScrollView>
        )
    }
}