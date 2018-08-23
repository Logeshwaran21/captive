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

        return fetch('http://35.236.167.82:8082/retrieveClaim', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },

            body: JSON.stringify({

                "userId": this.state.userHistoryDetails

            }),
        }).then((result) => result.json()).then((responseJson) => {
            var res = responseJson.result;
            var resJson1 = JSON.stringify(res)
            console.log(resJson1)
            swal(resJson1)




            // this.probs(resJson1)
            // this.props.__onPressUserdetails(resJson1)
            // { resJson1 }
            // { <div>{resJson1}</div> }


        })
        // onChangePost().then(resJson1 => console.log(resJson1));
    }

    // onchangedet = (resJson1) => {
    //     // var data = this.refs("display") = resJson1

    //     // this.refs("display").value = resJson1
    //     // var resp = this.refs("id")
    //     // var s = "data is:" + resp.resJson1;
    //     console.log(data)
    // }
    onChangeGet = () => {
        console.log("hiiii")

        fetch('http://35.236.167.82:8082/RetrieveBulkPatientRecords', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }


        }).then((response) => response.json()).then((responseJson) => {

            var res = responseJson
            var responseJson = JSON.stringify(res)
            console.log("arjun------------>", responseJson)
            swal("Your Submit ID:", responseJson);

            // var resJson1 = JSON.stringify(res)
            // console.log(resJson1)
        })

    }













    componentDidMount() {
        // this.onChangePost = () => {
        //     console.log("hiiii")

        //     return fetch('http://35.236.167.82:8082/retrieveClaim', {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'

        //         },

        //         body: JSON.stringify({

        //             "userId": this.state.userHistoryDetails

        //         }),
        //     }).then((result) => result.json()).then((responseJson) => {
        //         var response = responseJson.result
        //         var res = responseJson.result[0].Records.TotalClaimedAmount
        //         var res1 = responseJson.result[0].Records.HospitalName
        //         var resJson1 = JSON.stringify(res)
        //         var resJson2 = JSON.stringify(res1)
        //         var resJson3 = JSON.stringify(response)
        //         // Policyid =res[0].Records
        //         // Policyid =res[0].Records.policyID
        //         //  var record=resJson1.Records
        //         // console.log(res[0].Records.policyID)
        //         console.log(resJson3)

        //         // console.log(resJson1)
        //         // console.log(resJson2)

        //         var patient = ["TotalClaim Amount:" + "" + resJson1, "\n",
        //         "HospitalName:" + resJson2]
        //         // //its right         // swal({
        //         // //     title:"user details",
        //         // //     text:
        //         // //     "TotalClaimAmount:"+resJson1,"Hospital Name :":resJson2

        //         // // })
        //         swal({
        //             title: "user details",
        //             text: "" + patient

        //         })


        //     })

        // }


    }
    // onChangemethod = () => {
    //     // var message = this.refs("display") = response;
    //     // console.log("arjun------------->", message)

    // }
    onChangeuserId = (value) => {
        this.setState({ userHistoryDetails: value });
        console.log("userId");
        console.log(this.state.userHistoryDetails, "userId");
    }
    userId1 = () => {

        this.setState({ userId: true })
        this.setState({ allHistory: false })

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

                <RX.View>

                    <div class="container">

                        <div class="row">
                            <div class="col-sm-3 col-md-2 sidebar" style={styles.sidenavbar}>
                                <ul class="nav nav-sidebar">
                                    <li class="active" onClick={() => this.userId1()} ><a href="#" style={{ color: "orange" }}>User History <span class="sr-only">(current)</span></a></li>
                                    {/* <RX.Button onClick={() => this.onChangeGet()} style={{ color: "orange" }}>All History</RX.Button> */}
                                    <RX.Button style={{ color: "orange" }} onPress={() => (this.onChangeGet())} refs="id" >
                                        {'All History'}
                                    </RX.Button>
                                </ul>
                            </div>

                            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" style={styles.dashboard}>

                                <br></br>
                                <div class="container">
                                    {this.state.userId ?
                                        <div class="col-xs-6 col-sm-3 placeholder">
                                            <div class="container" style={styles.userIddiv}>
                                                <RX.Button style={styles.button1} onPress={() => (this.onChangePost())} refs="id" >
                                                    {'Submit'}
                                                </RX.Button>

                                                {/* {resJson1}

                                                {console.log(resJson1)} */}
                                                <label for="lgFormGroupInput" style={styles.sideText} class="col-sm-2 col-form-label col-form-label-lg">Enter User Identification Number:</label>
                                                <div class="col-sm-10">
                                                    <RX.TextInput style={styles.InputSelectorCopy} placeholder="" value={this.state.userHistoryDetails} onChangeText={this.onChangeuserId} />
                                                    {/* {console.log('Your input value is: ' + this.response)} */}
                                                    {/* <div>
                                                        {resJson3.map((item, index) => (
                                                            <View >
                                                                <Text>Hospital Name:{item.HospitalName}</Text>
                                                                <Text>TotalClaimAmount : {item.TotalClaimedAmount}</Text>
                                                            </View>
                                                        ))
                                                        }
                                                    </div> */}
                                                    {/* {resJson3.map((item, index) => (
                                                        <RX.View>
                                                            <RX.Text>HospitalName: {item.HospitalName}
                                                            </RX.Text>
                                                        </RX.View>
                                                    ))
                                                    } */}


                                                    {/* <div>
                                                        {/* <p ref="display" /> */}



                                                    {/* <ul>
                                                            {this.props.resJson1.map(item => (
                                                                <li key={item.TotalClaimedAmount}>{item.HospitalName}</li>
                                                            ))}
                                                        </ul>

                                                    </div> */} */}



                                                    {/* <RX.View >
                                                        <RX.Text style={{ fontSize: 20 }}>
                                                            {/* <RX.TextInput style={styles.InputSelectorCopy} placeholder="" value={this.state.resJson3} /> */}
                                                    {/* {this.state.resJson3}
                                                        </RX.Text>
                                                    </RX.View> */}










                                                    {/* {console.log(resJson1)} */}
                                                </div>
                                            </div>
                                        </div> : null}

                                    {this.state.allHistory ?

                                        <div class="col-xs-6 col-sm-3 placeholder">
                                            <div class="container" style={styles.allHistorydiv}>


                                                <label for="lgFormGroupInput" style={styles.sideText} class="col-sm-2 col-form-label col-form-label-lg">Enter Unique Identification Number</label>
                                                <div class="col-sm-10">

                                                    <input type="email" style={styles.InputSelectorCopy} id="lgFormGroupInput" placeholder="" />


                                                </div>


                                            </div>



                                        </div> : null}

                                </div>
                            </div>

                        </div>



                        {/* <div>
                            <RX.view>
                                <RX.Text>
                                    {resJson1}
                                </RX.Text>
                            </RX.view>
                        </div> */}

                    </div>


                </RX.View>
            </RX.ScrollView>

        );

    };
    // React.render(
    //     { resJson1 }
    // )
}   
