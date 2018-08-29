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
    InputSelectorCopy: RX.Styles.createTextStyle({

        borderWidth: 1,
    }),
    sideText: RX.Styles.createTextStyle({

    }),
    allHistorybtn: RX.Styles.createTextStyle({

        marginLeft: 16

    }),
    policyrules: RX.Styles.createTextStyle({

        marginLeft: 90,
        width:500, 
        height:900,
        font:400,
        marginTop:70
    }),
    divpolicyrules: RX.Styles.createTextStyle({

       backgroundColor:"rgb(8, 37, 103)",
       width:700,
       height:300,
       marginRight: 328,
    marginTop: 123
    }),
};

var resJson1
var res
var Policyid
var responseJson
export default class Userdetails extends RX.Component {
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
        console.log("hiiii")

        return fetch('http://localhost:8082/retrieveClaim', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },

            body: JSON.stringify({

                "userId": this.state.userHistoryDetails

            }),
        }).then((result) => result.json()).then((responseJson) => {
            var res = responseJson.result[0].Records.policyID
            var rules = responseJson.result[0].Records.policys.rules
            var rules = rules
            this.setState({ rules: rules })
            // var formula = responseJson.result[0].Records
            // var formula = formula
            // this.setState({ formula: formula })
            var resJson1 = JSON.stringify(res)
            console.log(resJson1)
            var data = resJson1
            var userdata = data
            this.setState({ userdata: userdata })
        })

    }


    onChangeGet = () => {
      

        fetch('http://localhost:8082/RetrieveBulkPatientRecords', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }


        }).then((response) => response.json()).then((responseJson) => {

            var res = responseJson
            var responseJson = JSON.stringify(res)
            console.log("logesh", responseJson)
            // swal("List of Records:", responseJson);
          
            var bulkdata = responseJson
            this.setState({ bulkdata: bulkdata })


        })

    }

    componentDidMount() {
        (result) => {
            this.setState({
                responseJson

            });
            console.log(result)

        }
    }

    onChangeuserId = (value) => {
        this.setState({ userHistoryDetails: value });

        console.log("userId");
        console.log(this.state.userHistoryDetails, "userId");
    }
    userId1 = () => {

        this.setState({ userId: true })
        this.setState({ bulkdata: false })
this.setState({ policyandrules: false })
    }
    bulkdata = () => {

        this.setState({ userId: false })
        this.setState({ bulkdata: true })
        this.setState({ policyandrules: false })
    }
    policyandrules = () => {

        this.setState({ userId: true })
        this.setState({ bulkdata: false })
        this.setState({ policyandrules: true })
    }

    render() {
        // resJson1 = this.props.navigatorRoute.resJson1
        return (


            <RX.ScrollView style={styles.scroll}>
                <RX.View style={styles.navcontainer}>
                    <RX.Image source={'./src/img/rqlogo.png'} style={[styles.navrqlogo]} />
                    <RX.Text style={styles.navwelcome}>
                        RAPID SETTLE
    </RX.Text>
                </RX.View>
                <RX.View>{res}</RX.View>
                <RX.View>

                    <div class="container">

                        <div class="row">
                            <div class="col-sm-3 col-md-2 sidebar" style={styles.sidenavbar}>
                                <ul class="nav nav-sidebar">
                                    <li onClick={() => this.userId1()} ><a href="#" style={{ color: "orange" }}>User History <span class="sr-only">(current)</span></a></li>
                                    <li onClick={() => this.bulkdata()} ><a href="#" style={{ color: "orange" }}>All History <span class="sr-only">(current)</span></a></li>
                                    
                                </ul>
                            </div>

                            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" style={styles.dashboard}>

                                <br></br>
                                <div class="container">
                                    {this.state.userId ?

                                        <div class="col-xs-6 col-sm-3 placeholder">

                                            <div class="container" style={styles.userIddiv}>
                                                <RX.Button style={styles.button1} onPress={() => (this.onChangePost(),this.policyandrules())} refs="id" >
                                                    {'Submit'}
                                                </RX.Button>

                                                <label for="lgFormGroupInput" style={styles.sideText} class="col-sm-2 col-form-label col-form-label-lg">Enter User Identification Number:</label>
                                                <div class="col-sm-10">
                                                    <RX.TextInput style={styles.InputSelectorCopy} placeholder="" value={this.state.userHistoryDetails} onChangeText={this.onChangeuserId} />
                                                    <div>
                                                       
                                                    </div>
                                                   
                                                   

                                                </div>

                                            </div>
                                            <br></br>
                                            <br></br>
                                           
                                        </div> : null}

                                    {this.state.bulkdata ?
                                        <div class="col-xs-6 col-sm-3 placeholder">

                                            <div class="container">
                                                <div>
                                                    <RX.Button onPress={() => (this.onChangeGet())} ><a style={{ color: "blue" }}><b>Click here view Entire User Details :</b><br></br><br></br>{this.state.bulkdata} <span class="sr-only">(current)</span></a></RX.Button>
                                                   
                                                </div>


                                            </div>
                                        </div> : null}

{this.state.policyandrules ?
 <div class ="container" style={styles.divpolicyrules}>
                                            <div style={styles.policyrules}>
                                            <ul class="list-group text-center">
           <li class="list-group-item"><h4><b>PolicyID:</b></h4>{this.state.userdata} </li>
            <li class="list-group-item"><h4><b>Rules:</b></h4>{this.state.rules} </li>
           
        </ul>
                                             
                                                    </div>
                                            
                                                    </div>: null}

                                </div>
                            </div>

                        </div>




                    </div>


                </RX.View>
            </RX.ScrollView>

        );

    }
}