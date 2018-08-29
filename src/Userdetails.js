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
        console.log("welcome")

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
            var res = responseJson.result[0].Records.HospitalName;
            var res1 = responseJson.result[0].Records.patientData[0].PATEINT_DETAILS[0].NAME;
            console.log(res1)
            var resJson1 = JSON.stringify(res)
            console.log(resJson1)
            var name = res1
            this.setState({ name: name })

            var AGE = responseJson.result[0].Records.patientData[0].PATEINT_DETAILS[1].AGE;
            var AGE = AGE
            this.setState({ AGE: AGE })

            var DOA = responseJson.result[0].Records.patientData[0].PATEINT_DETAILS[2].DOA;
            var DOA = DOA
            this.setState({ DOA: DOA })

            var REF_DOC = responseJson.result[0].Records.patientData[0].PATEINT_DETAILS[3].REF_DOC;
            var REF_DOC = REF_DOC
            this.setState({ REF_DOC: REF_DOC })

            var IPD_No = responseJson.result[0].Records.patientData[0].PATEINT_DETAILS[4].IPD_No;
            var IPD_No = IPD_No
            this.setState({ IPD_No: IPD_No })

            var MLC = responseJson.result[0].Records.patientData[0].PATEINT_DETAILS[5].MLC;
            var MLC = MLC
            this.setState({ MLC: MLC })

            var SEX = responseJson.result[0].Records.patientData[0].PATEINT_DETAILS[6].SEX;
            var SEX = SEX
            this.setState({ SEX: SEX })

            var doj = responseJson.result[0].Records.patientData[0].PATEINT_DETAILS[7].doj;
            var doj = doj
            this.setState({ doj: doj })

            var DOD = responseJson.result[0].Records.patientData[0].PATEINT_DETAILS[8].DOD;
            var DOD = DOD
            this.setState({ DOD: DOD })

            var DAIGONSIS = responseJson.result[0].Records.patientData[1].Treatment[0].DAIGONIS;
            var DAIGONSIS = DAIGONSIS
            this.setState({ DAIGONSIS: DAIGONSIS })

            var Cheif_Complaints_On_Admission = responseJson.result[0].Records.patientData[1].Treatment[1].Cheif_Complaints_On_Admission;
            var Cheif_Complaints_On_Admission = Cheif_Complaints_On_Admission
            this.setState({ Cheif_Complaints_On_Admission: Cheif_Complaints_On_Admission })

            var Past_History_with_Allergy = responseJson.result[0].Records.patientData[1].Treatment[2].Past_History_with_Allergy;
            var Past_History_with_Allergy = Past_History_with_Allergy
            this.setState({ Past_History_with_Allergy: Past_History_with_Allergy })

            var Personal_History = responseJson.result[0].Records.patientData[1].Treatment[3].Personal_History;
            var Personal_History = Personal_History
            this.setState({ Personal_History: Personal_History })

            var Family_History = responseJson.result[0].Records.patientData[1].Treatment[4].Family_History;
            var Family_History = Family_History
            this.setState({ Family_History: Family_History })

            var Menstrual_History = responseJson.result[0].Records.patientData[1].Treatment[5].Menstrual_History;
            var Menstrual_History = Menstrual_History
            this.setState({ Menstrual_History: Menstrual_History })

            var Obstretric_History = responseJson.result[0].Records.patientData[1].Treatment[6].Obstretric_History;
            var Obstretric_History = Obstretric_History
            this.setState({ Obstretric_History: Obstretric_History })

            var Genral_Examination = responseJson.result[0].Records.patientData[1].Treatment[7].Genral_Examination;
            var Genral_Examination = Genral_Examination
            this.setState({ Genral_Examination: Genral_Examination })

            var Systematic_Examination = responseJson.result[0].Records.patientData[1].Treatment[8].Systematic_Examination;
            var Systematic_Examination = Systematic_Examination
            this.setState({ Systematic_Examination: Systematic_Examination })









            var singledata = resJson1 + "\n"
            this.setState({ singledata: singledata })
            // swal("User Details:", resJson1);
        })

    }


    onChangeGet = () => {
        console.log("hiiii")

        fetch('http://localhost:8082/RetrieveBulkPatientRecords', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }


        }).then((response) => response.json()).then((responseJson) => {

            var res = responseJson
            console.log("Arjunan----->", res)


            var responseJson = JSON.stringify(res)
            console.log("logesh", responseJson)
            var fulldata = res
            console.log("logesh", fulldata)
            // swal("List of Records:", responseJson);

            var bulkdata = responseJson
            this.setState({ bulkdata: bulkdata })


        })

    }
    // logesh {"message":[{"Key":"249","Record":{"created_at":"2018-08-27T07:56:46.374Z","policyID":"249","policys":{"policyID":"249","rules":["Ez8hl7yrf9tjlbzohv6"]}}},{"Key":"367","Record":{"Expenses":5000,"HospitalName":"Apollo","__v":0,"_id":"5b83c6c182874f4d51e315e9","created_at":"2018-08-27T09:39:13.591Z","message":"approved","patientData":[{"PATEINT_DETAILS":[{"NAME":"Saswat"},{"AGE":"23"},{"DOA":"2018-12-12"},{"REF_DOC":"Dr Kar"},{"IPD_No":"1827"},{"MLC":"23t7"},{"SEX":"Male"},{"DOD":"2018-12-13"}]},{"Treatment":[{"DAIGONSIS":"Done"},{"Cheif_Complaints_On_Admission":"Done"},{"Past_History_with_Allergy":"Done"},{"Personal_History":"Done"},{"Family_History":"Done"},{"Menstrual_History":"Done"},{"Obstretric_History":"Done"},{"Genral_Examination":"Done"},{"Systematic_Examination":"Done"}]},{"Package_details":[{"Investigations":"Done"},{"BaBys_Details":"Done"},{"Course_in_Hospital_And_condition":"Done"},{"Treatment_Given":"Done"},{"Treatment_Adviced":"Done"},{"Follow_Up_Visit":"Done"},{"Procedure_done":"Done"}]}],"previousHashes":[],"status":"Auto approved","submitID":"367"}},{"Key":"476","Record":{"AmountPayerWouldPay":"10000","AmountuserHavetopay":"30000","__v":0,"_id":"5b83c3d782874f4d51e315e7","message":"me","status":"Approved","submitID":"476"}},{"Key":"625","Record":{"created_at":"2018-08-27T07:28:21.586Z","policyID":"625","policys":{"policyID":"625","rules":["Ez8hl7yrf9tjlbynyg2"]}}},{"Key":"961","Record":{"created_at":"2018-08-27T06:34:15.114Z","policyID":"961","policys":{"policyID":"961","rules":["Ez8hl7yrf9tjlbwqdfd"]}}}]}

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
                                    <li onClick={() => this.bulkdata()} ><a href="#" style={{ color: "orange" }}>ALL History <span class="sr-only">(current)</span></a></li>
                                    {/* <RX.Button onClick={() => this.onChangeGet()} style={{ color: "orange" }}>All History</RX.Button> */}


                                    {/* <RX.Button style={{ color: "orange" }} onClick={() => this.userId1()} style={styles.allHistorybtn} refs="id" >
                                        {'User History'}
                                    </RX.Button> */}



                                    {/* onPress={() => (this.onChangeGet())} */}

                                    {/* <RX.Button style={{ color: "orange" }} onClick={() => this.bulkdata()} style={styles.allHistorybtn} refs="id" >
                                        {'All History'}
                                    </RX.Button> */}

                                    {/* <li class="active" onPress={() => (this.onChangeGet())} refs="id"><a href="#" style={{ color: "orange" }}>All History</a></li> */}
                                </ul>
                            </div>

                            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" style={styles.dashboard}>

                                <br></br>
                                <div class="container">
                                    {this.state.userId ?

                                        <div class="col-xs-6 col-sm-3 placeholder">

                                            <div class="container" style={styles.userIddiv}>
                                                <RX.Button style={styles.button1} onPress={() => (this.onChangePost(), this.policyandrules())} refs="id" >
                                                    {'Submit'}
                                                </RX.Button>

                                                <label for="lgFormGroupInput" style={styles.sideText} class="col-sm-2 col-form-label col-form-label-lg">Enter User Identification Number:</label>
                                                <div class="col-sm-10">
                                                    <RX.TextInput style={styles.InputSelectorCopy} placeholder="" value={this.state.userHistoryDetails} onChangeText={this.onChangeuserId} />


                                                </div>
                                            </div>
                                            <div>

                                            </div>

                                        </div> : null}

                                    {this.state.bulkdata ?
                                        <div class="col-xs-6 col-sm-3 placeholder">

                                            <div class="container">
                                                <div>
                                                    <RX.Button onPress={() => (this.onChangeGet())} ><a href="#" style={{ color: "blue" }}>click here view Entier User Details :<br></br>{this.state.bulkdata} <span class="sr-only">(current)</span></a></RX.Button>
                                                    {/* User Data:{this.state.bulkdata} */}
                                                </div>


                                            </div>
                                        </div> : null}
                                    {this.state.policyandrules ?
                                        <div>
                                            <form>
                                                <h3>PATEINT_DETAILS</h3>
                                                <label>Name :   {this.state.name} </label><br></br>
                                                <label> AGE    : {this.state.AGE} </label><br></br>
                                                <label> DOA    :  {this.state.DOA} </label><br></br>
                                                <label> REF_DOC: {this.state.REF_DOC}  </label><br></br>
                                                <label>IPD_No  : {this.state.IPD_No}  </label><br></br>
                                                <label> MLC    :  {this.state.MLC}  </label><br></br>
                                                <label> SEX    : {this.state.SEX}  </label><br></br>
                                                <label> DOJ    :  {this.state.doj}  </label><br></br>
                                                <h2>Treatment</h2>
                                                <article>  <label>DAIGONSIS    :  {this.state.DAIGONSIS} <br></br></label></article>
                                                <label> Cheif_Complaints_On_Admission:  {this.state.Cheif_Complaints_On_Admission}  </label>
                                                <label> Past_History_with_Allergy    : {this.state.Past_History_with_Allergy} <br></br></label>
                                                <label> Personal_History:  {this.state.Personal_History}  <br></br></label>
                                                <label>Family_History  :  {this.state.Family_History}  <br></br></label>
                                                <label> Menstrual_History    :  {this.state.Menstrual_History}  <br></br></label>
                                                <label> Obstretric_History    :  {this.state.Obstretric_History}  <br></br></label>
                                                <label> Genral_Examination    :  {this.state.Genral_Examination}  <br></br></label>
                                                <label> Systematic_Examination    :  {this.state.Systematic_Examination}  <br></br></label>
                                            </form>
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
