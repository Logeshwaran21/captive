import React from 'react';
import RX from 'reactxp';
import styling from './AppStyles';
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
    medinput: RX.Styles.createViewStyle({
        display: 'block',
        width: '185px',
        height: 34,
        // padding: 6px 12px;
        fontSize: 14,
        // line: 1.42857143;
        color: "#555",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        marginLeft: -53
    }),
    sexinput: RX.Styles.createViewStyle({
        display: 'block',
        width: '80%',
        height: 34,
        marginLeft: -397,
        // padding: 6px 12px;
        fontSize: 14,
        // line: 1.42857143;
        color: "#555",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,

    }),
    dodinput: RX.Styles.createViewStyle({
        display: 'block',
        width: '80px',
        height: 34,
        marginLeft: 200,
        marginTop: 30,
        // padding: 6px 12px;
        fontSize: 14,
        // line: 1.42857143;
        color: "#555",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,

    }),
    sexname: RX.Styles.createTextStyle({
        fontSize: 16,
        marginLeft: -347,
        marginTop: 28,
        color: 'black',
        fontWeight: 'bold',

    }),
    // button1: RX.Styles.createButtonStyle({
    //     backgroundColor: 'rgb(8, 37, 103)',
    //     borderWidth:1,
    //     width:110,
    //    height:5,
    //     marginLeft:220,
    //     marginBottom:-23, 
    //     padding: 12,
    //     borderRadius: 8,
    //     borderColor: 'rgb(8, 37, 103)',
    // }),
    button1: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 72,
        height: 5,
        marginLeft: 351,
        marginTop: 0,
        marginBottom: -23,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: "white"
    }),

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
        height: 900,
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
    InputSelectorCopy: RX.Styles.createTextStyle({
        marginLeft: -68,
        marginTop: 0,
        borderWidth: 1,
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
        marginLeft: 1
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
        marginTop: -282,
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
        marginLeft: -26,
        width: 350,
        marginTop: 70,
        backgroundColor: 'white'

    }),
    nxtbut: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 132,
        height: 30,
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
        // margin: 200,
        marginLeft: 175,
        marginTop: 46,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: 'white'
    }),

    Buttonnxt: RX.Styles.createButtonStyle({

        marginLeft: 251,
        marginTop: -25,

    }),

    treatmentnxtbut: RX.Styles.createButtonStyle({

        marginLeft: 304,
        marginTop: 54,
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 132,
        height: 30,
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: 'white'
    }),

    patientDetailsPD: RX.Styles.createViewStyle({
        width: 570,
        height: 534,
        marginTop: -8,
        marginLeft: 81,
        background: "#80808080"
    }),
    patientDetailsT: RX.Styles.createViewStyle({
        width: 606,
        height: 654,
        marginTop: -8,
        marginLeft: 81,
        background: "#80808080"
    }),
    patientDetails: RX.Styles.createViewStyle({
        width: 680,
        height: 611,
        marginTop: -8,
        marginLeft: 81,
        background: "#80808080"
    }),
    patientDetailsCD: RX.Styles.createViewStyle({
        width: 532,
        height: 420,
        marginTop: -8,
        marginLeft: 81,
        background: "#80808080"
    }),
    policyIddiv: RX.Styles.createViewStyle({

        marginTop: -258,

    }),

    claimfields: RX.Styles.createViewStyle({
        width: 131,
        height: 35,
        // marginTop: -8,
        marginLeft: 247,
        borderRadius: 4
        // background:"#5558589e"
    }),
    claimsubmit: RX.Styles.createViewStyle({
        // width: 131,
        // height: 35,
        marginTop: -19,
        marginLeft: 407,

        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 132,
        height: 30,
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: 'white'
    }),

    claimnext: RX.Styles.createViewStyle({
        // width: 131,
        // height: 35,
        marginTop: -31,
        marginLeft: 649,

        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 132,
        height: 30,
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: 'white'
    }),

    previouspage: RX.Styles.createViewStyle({
        // width: 131,
        // height: 35,
        marginTop: -28,
        marginLeft: 64,

        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 132,
        height: 30,
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: 'white'
    }),
    previouspageCD: RX.Styles.createViewStyle({
        // width: 131,
        // height: 35,
        marginTop: -28,
        marginLeft: 215,

        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 132,
        height: 30,
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: 'white'
    }),
    divpolicyrules: RX.Styles.createTextStyle({

        backgroundColor: "#80808080",
        width: 948,
        height: 300,
        marginRight: 328,
        marginTop: 123
    }),
    policyrules: RX.Styles.createTextStyle({

        marginLeft: 50,
        width: 829,
        height: 900,
        font: 400,
        marginTop: 22
    }),
    details: RX.Styles.createTextStyle({

        backgroundColor: "#80808080",
        width: 997,
        height: 490,
        marginLeft: -34,
        marginTop: -149
    }),
    heading: RX.Styles.createTextStyle({
        marginLeft: 276,

    }),
    pack: RX.Styles.createButtonStyle({
        marginLeft: 654,
        marginTop: -295
    }),
    treat: RX.Styles.createButtonStyle({
        marginLeft: 335,
        marginTop: -276
    }),
    siDeText: RX.Styles.createTextStyle({
        fontSize: 16,
        color: 'Black',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 31

    }),
    siDeTextCD: RX.Styles.createTextStyle({
        fontSize: 18,
        color: 'Black',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 31

    }),
    siDeTextPD: RX.Styles.createTextStyle({
        fontSize: 16,
        marginLeft: 34,
        color: 'Black',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 31

    }),
    siDeTextT: RX.Styles.createTextStyle({
        fontSize: 16,
        marginLeft: 33,
        color: 'Black',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 31

    }),
    Form: RX.Styles.createViewStyle({
        display: 'block',
        width: '85%',
        height: 34,
        // padding: 6px 12px;
        fontSize: 14,
        // line: 1.42857143;
        color: "#555",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        marginLeft: 32
    }),
    FormCD: RX.Styles.createViewStyle({
        display: 'block',
        width: '91%',
        height: 34,
        // padding: 6px 12px;
        fontSize: 14,
        // line: 1.42857143;
        color: "#555",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        marginLeft: 32
    }),
    FormPD: RX.Styles.createViewStyle({
        display: 'block',
        width: '91%',
        height: 34,
        // padding: 6px 12px;
        fontSize: 14,
        // line: 1.42857143;
        color: "#555",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        marginLeft: 32
    }),
    Form1: RX.Styles.createViewStyle({
        display: 'block',
        width: '91%',
        height: 34,
        // padding: 6px 12px;
        fontSize: 14,
        // line: 1.42857143;
        color: "#555",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        marginLeft: 32
    }),
    userlabel: RX.Styles.createTextStyle({
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 0

    }),
    userIddiv: RX.Styles.createTextStyle({
        marginTop: -258,


    }),

};
const _styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#ffffff'
    }),
    roundButton: RX.Styles.createViewStyle({
        margin: 16,
        borderRadius: 16,
        backgroundColor: '#ff0000ab',
        justifyContent: 'CENTER'
    }),
    read: RX.Styles.createScrollViewStyle({
        borderRadius: 15,
        width: "100%",
        marginLeft: 20,
        align: 'center'
    }),
    HomeScrollImageLogo: RX.Styles.createImageStyle({
        width: 5000,
        height: 72,
        paddingVertical: 20,
        marginLeft: -1200,
        marginTop: 12
    }),
    client: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor: '#ffffff',
        padding: 5,
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: "#cccccc"
    }),



}


var params = [];
var value = [];
var responseJson;
var policy;

export default class CreatePolicy extends RX.Component {
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

    onChangePost = () => {



        console.log("hiiiiii")
        return fetch('http://localhost:8082/createpolicy', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },

            body: JSON.stringify({

                "policyID": this.state.policyId,
                "rules": [this.state.rules]
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

    onChangePost1 = () => {
        console.log("arjun")
        return fetch('http://localhost:8082/submitClaim', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },

            body: JSON.stringify({
                "NAME": this.state.NAME,
                "AGE": this.state.AGE,
                "DOA": this.state.DOA,
                "REF_DOC": this.state.REF_DOC,
                "IPD_No": this.state.IPD_No,
                "MLC": this.state.MLC,
                "SEX": this.state.SEX,
                "DOD": this.state.DOD,
                "DAIGONIS": this.state.DAIGONIS,
                "Cheif_Complaints_On_Admission": this.state.Cheif_Complaints_On_Admission,
                "Past_History_with_Allergy": this.state.Past_History_with_Allergy,
                "Personal_History": this.state.Personal_History,
                "Family_History": this.state.Family_History,
                "Menstrual_History": this.state.Menstrual_History,
                "Obstretric_History": this.state.Obstretric_History,
                "Genral_Examination": this.state.Genral_Examination,
                "Systematic_Examination": this.state.Systematic_Examination,
                "Investigations": this.state.Investigations,
                "BaBys_Details": this.state.BaBys_Details,
                "Course_in_Hospital_And_condition": this.state.Course_in_Hospital_And_condition,
                "Treatment_Given": this.state.Treatment_Given,
                "Treatment_Adviced": this.state.Treatment_Adviced,
                "Follow_Up_Visit": this.state.Follow_Up_Visit,
                "Procedure_done": this.state.Procedure_done,
                "HospitalName": this.state.HospitalName,
                "submitID": "",
                "status": this.state.status,
                "claimAmount": this.state.claimAmount,
                "policyId": this.state.policyId
            }
            ),
        }).then((result) => result.json()).then((responseJson) => {
            var res = responseJson.submitID;
            var data = responseJson.rs[0].message
            console.log("arjun------------>", res);
            console.log("logesh------------>", data);
            var val = "SubmitId: " + res + "\n" + "Message: " + data


            swal("Your Submit ID:", val);

            // var resJson1 = JSON.stringify(res)
            // console.log(resJson1)
        })
    }
    // onChangePost1() {

    //     this.props.onNavigatePush(PatientDetail);
    // }
    onChangePost3 = () => {
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
            var res1 = responseJson.result[0].Records.keys.NAME;
            console.log(res1)
            var resJson1 = JSON.stringify(res)
            console.log(resJson1)
            var name = res1
            this.setState({ name: name })

            var AGE = responseJson.result[0].Records.keys.AGE;
            var AGE = AGE
            this.setState({ AGE: AGE })

            var DOA = responseJson.result[0].Records.keys.DOA;
            var DOA = DOA
            this.setState({ DOA: DOA })

            var REF_DOC = responseJson.result[0].Records.keys.REF_DOC;
            var REF_DOC = REF_DOC
            this.setState({ REF_DOC: REF_DOC })

            var IPD_No = responseJson.result[0].Records.keys.IPD_No;
            var IPD_No = IPD_No
            this.setState({ IPD_No: IPD_No })

            var MLC = responseJson.result[0].Records.keys.MLC;
            var MLC = MLC
            this.setState({ MLC: MLC })

            var SEX = responseJson.result[0].Records.keys.SEX;
            var SEX = SEX
            this.setState({ SEX: SEX })

            var DOD = responseJson.result[0].Records.keys.DOD;
            var DOD = DOD
            this.setState({ DOD: DOD })

            var DAIGONSIS = responseJson.result[0].Records.keys.DAIGONIS;
            var DAIGONSIS = DAIGONSIS
            this.setState({ DAIGONSIS: DAIGONSIS })

            var Cheif_Complaints_On_Admission = responseJson.result[0].Records.keys.Cheif_Complaints_On_Admission;
            var Cheif_Complaints_On_Admission = Cheif_Complaints_On_Admission
            this.setState({ Cheif_Complaints_On_Admission: Cheif_Complaints_On_Admission })

            var Past_History_with_Allergy = responseJson.result[0].Records.keys.Past_History_with_Allergy;
            var Past_History_with_Allergy = Past_History_with_Allergy
            this.setState({ Past_History_with_Allergy: Past_History_with_Allergy })

            var Personal_History = responseJson.result[0].Records.keys.Personal_History;
            var Personal_History = Personal_History
            this.setState({ Personal_History: Personal_History })

            var Family_History = responseJson.result[0].Records.keys.Family_History;
            var Family_History = Family_History
            this.setState({ Family_History: Family_History })

            var Menstrual_History = responseJson.result[0].Records.keys.Menstrual_History;
            var Menstrual_History = Menstrual_History
            this.setState({ Menstrual_History: Menstrual_History })

            var Obstretric_History = responseJson.result[0].Records.keys.Obstretric_History;
            var Obstretric_History = Obstretric_History
            this.setState({ Obstretric_History: Obstretric_History })

            var Genral_Examination = responseJson.result[0].Records.keys.Genral_Examination;
            var Genral_Examination = Genral_Examination
            this.setState({ Genral_Examination: Genral_Examination })

            var Systematic_Examination = responseJson.result[0].Records.keys.Systematic_Examination;
            var Systematic_Examination = Systematic_Examination
            this.setState({ Systematic_Examination: Systematic_Examination })

            var Investigations = responseJson.result[0].Records.keys.Investigations;
            var Investigations = Investigations
            this.setState({ Investigations: Investigations })

            var BaBys_Details = responseJson.result[0].Records.keys.BaBys_Details;
            var BaBys_Details = BaBys_Details
            this.setState({ BaBys_Details: BaBys_Details })

            var Course_in_Hospital_And_condition = responseJson.result[0].Records.keys.Course_in_Hospital_And_condition;
            var Course_in_Hospital_And_condition = Course_in_Hospital_And_condition
            this.setState({ Course_in_Hospital_And_condition: Course_in_Hospital_And_condition })

            var Treatment_Given = responseJson.result[0].Records.keys.Treatment_Given;
            var Treatment_Given = Treatment_Given
            this.setState({ Treatment_Given: Treatment_Given })

            var Treatment_Adviced = responseJson.result[0].Records.keys.Treatment_Adviced;
            var Treatment_Adviced = Treatment_Adviced
            this.setState({ Treatment_Adviced: Treatment_Adviced })

            var Follow_Up_Visit = responseJson.result[0].Records.keys.Follow_Up_Visit;
            var Follow_Up_Visit = Follow_Up_Visit
            this.setState({ Follow_Up_Visit: Follow_Up_Visit })

            var Procedure_done = responseJson.result[0].Records.keys.Procedure_done;
            var Procedure_done = Procedure_done
            this.setState({ Procedure_done: Procedure_done })

            var policyId = responseJson.result[0].Records.keys.policyId;
            var policyId = policyId
            this.setState({ policyId: policyId })

            var HospitalName = responseJson.result[0].Records.keys.HospitalName;
            var HospitalName = HospitalName
            this.setState({ HospitalName: HospitalName })

            var status = responseJson.result[0].Records.keys.status;
            var status = status
            this.setState({ status: status })

            var claimAmount = responseJson.result[0].Records.keys.claimAmount;
            var claimAmount = claimAmount
            this.setState({ claimAmount: claimAmount })

            var tpastatus = responseJson.result[1].Records.status;
            var tpastatus = tpastatus
            this.setState({ tpastatus: tpastatus })

            var singledata = resJson1 + "\n"
            this.setState({ singledata: singledata })







            var singledata = resJson1 + "\n"
            this.setState({ singledata: singledata })
            // swal("User Details:", resJson1);
        })

    }
    onChangePost4 = () => {


        return fetch('http://localhost:8082/retrieveClaim', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },

            body: JSON.stringify({

                "userId": this.state.userHistoryDetails1

            }),
        }).then((result) => result.json()).then((responseJson) => {
            var res = responseJson.result[0].Records.policyID
            var rules = responseJson.result[0].Records.policys.rules
            var rules = rules
            this.setState({ rules: rules })

            var resJson1 = JSON.stringify(res)
            console.log(resJson1)
            var data = resJson1
            var userdata = data
            this.setState({ userdata: userdata })

            var tpastatus = responseJson.result[1].Records.status
            var tpastatus = tpastatus
            this.setState({ tpastatus: tpastatus })
        })

    }


    onChangeGet5 = () => {


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

    handleNameChange = (evt) => {
        this.setState({ name: evt.target.value });
    }

    handleShareholderNameChange = (idx) => (evt) => {
        const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
            if (idx !== sidx) return shareholder;
            return { ...shareholder, name: evt.target.value };
        });

        this.setState({ shareholders: newShareholders });
    }

    handleSubmit = (evt) => {
        const { name, shareholders } = this.state;
        alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
    }

    handleAddShareholder = () => {
        this.setState({ shareholders: this.state.shareholders.concat([{ name: '' }]) });
    }

    handleRemoveShareholder = (idx) => () => {
        this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
    }



    componentDidMount() {


    }





    onChangepolicyId = (value) => {
        this.setState({ policyId: value });
        console.log(this.state.policyId, "policyId");
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


    ////SUBMIT CLAIM////

    onChangeNAME = (value) => {
        console.log(value)
        this.setState({ NAME: value });
        console.log(this.state.NAME, "NAME");
    }

    onChangeage = (value) => {
        this.setState({ AGE: value });
        console.log(this.state.AGE, "AGE");
    }
    onChangeDOA = (value) => {
        this.setState({ DOA: value });
        console.log(this.state.DOA, "DOA");
    }
    onChangeREF_DOC = (value) => {
        this.setState({ REF_DOC: value });
        console.log(this.state.REF_DOC, "REF DOC");
    }
    onChangeIPD_No = (value) => {
        this.setState({ IPD_No: value });
        console.log(this.state.IPD_No, "IPD_No");
    }
    onChangeMLC = (value) => {
        this.setState({ MLC: value });
        console.log(this.state.MLC, "MLC");
    }
    onChangeSEX = (value) => {
        this.setState({ SEX: value });
        console.log(this.state.SEX, "SEX");
    }
    // onChangedoj = (value) => {
    //     this.setState({ doj: value });
    //     console.log(this.state.doj, "doj");
    // }
    onChangeDOD = (value) => {
        this.setState({ DOD: value });
        console.log(this.state.DOD, "DOD");
    }
    //----------------------------------------------------
    //Treatment-------------------------------------------
    onChangeDAIGONIS = (value) => {
        this.setState({ DAIGONIS: value });
        console.log(this.state.DAIGONIS, "DAIGONIS");
    }

    onChangeCheif_Complaints_On_Admission = (value) => {
        this.setState({ Cheif_Complaints_On_Admission: value });
        console.log(this.state.Cheif_Complaints_On_Admission, "Cheif_Complaints_On_Admission");
    }

    onChangePast_History_with_Allergy = (value) => {
        this.setState({ Past_History_with_Allergy: value });
        console.log(this.state.Past_History_with_Allergy, "Past_History_with_Allergy");
    }
    onChangedPersonal_History = (value) => {
        this.setState({ Personal_History: value });
        console.log(this.state.Personal_History, "Personal_History");
    }

    onChangeFamily_History = (value) => {
        this.setState({ Family_History: value });
        console.log(this.state.Family_History, "Family_History");
    }

    onChangeMenstrual_History = (value) => {
        this.setState({ Menstrual_History: value });
        console.log(this.state.Menstrual_History, "Menstrual_History");
    }
    onChangeObstretric_History = (value) => {
        this.setState({ Obstretric_History: value });
        console.log(this.state.Obstretric_History, "Obstretric_History");
    }
    onChangeGenral_Examination = (value) => {
        this.setState({ Genral_Examination: value });
        console.log(this.state.Genral_Examination, "Genral_Examination");
    }
    onChangeSystematic_Examination = (value) => {
        this.setState({ Systematic_Examination: value });
        console.log(this.state.Systematic_Examination, "Systematic_Examination");
    }
    //----------------------------------------------------------------------------
    //package---------------------------------------------------------------------
    onChangeInvestigations = (value) => {
        this.setState({ Investigations: value });
        console.log(this.state.Investigations, "Investigations");
    }
    onChangeBaBys_Details = (value) => {
        this.setState({ BaBys_Details: value });
        console.log(this.state.BaBys_Details, "BaBys_Details");
    }
    onChangeCourse_in_Hospital_And_condition = (value) => {
        this.setState({ Course_in_Hospital_And_condition: value });
        console.log(this.state.Course_in_Hospital_And_condition, "Course_in_Hospital_And_condition");
    }
    onChangeTreatment_Given = (value) => {
        this.setState({ Treatment_Given: value });
        console.log(this.state.Treatment_Given, "Treatment_Given");
    }
    onChangeTreatment_Adviced = (value) => {
        this.setState({ Treatment_Adviced: value });
        console.log(this.state.Treatment_Adviced, "Treatment_Adviced");
    }
    onChangeFollow_Up_Visit = (value) => {
        this.setState({ Follow_Up_Visit: value });
        console.log(this.state.Follow_Up_Visit, "Follow_Up_Visit");
    }
    onChangeProcedure_done = (value) => {
        this.setState({ Procedure_done: value });
        console.log(this.state.Procedure_done, "Procedure_done");
    }
    //-----------------------------------------------------------------------------------
    onChangeclaimAmount = (value) => {
        this.setState({ claimAmount: value });
        console.log(this.state.claimAmount, "claimAmount");
    }
    onChangestatus = (value) => {
        this.setState({ status: value });
        console.log(this.state.status, "status");
    }
    onChangeHospitalName = (value) => {
        this.setState({ HospitalName: value });
        console.log(this.state.HospitalName, "HospitalName");
    }
    onChangepolicyId1 = (value) => {
        this.setState({ policyId: value });
        console.log(this.state.policyId, "policyId");
    }

    //USER HISTORY ------------------------------------------------------------------------------------>

    onChangeuserId = (value) => {
        this.setState({ userHistoryDetails: value });

        console.log("userId");
        console.log(this.state.userHistoryDetails, "userId");
    }
    onChangeuserId1 = (value) => {
        this.setState({ userHistoryDetails1: value });

        console.log("userId");
        console.log(this.state.userHistoryDetails1, "userId");
    }
    //Add Rules----------------------------------------------
    handleNameChange = (evt) => {
        this.setState({ name: evt.target.value });
    }

    handleShareholderNameChange = (idx) => (evt) => {
        const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
            if (idx !== sidx) return shareholder;
            return { ...shareholder, name: evt.target.value };
        });

        this.setState({ shareholders: newShareholders });
    }

    handleSubmit = (evt) => {
        const { name, shareholders } = this.state;
        alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
    }

    handleAddShareholder = () => {
        this.setState({ shareholders: this.state.shareholders.concat([{ name: '' }]) });
    }

    handleRemoveShareholder = (idx) => () => {
        this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
    }
    //------------------------------end--------------------------

    // onclick()
    // { 
    //     handleAddShareholder();
    //     add();
    // }

    // add() {
    //     const documents = this.state.documents.concat(DocumentInput);
    //     this.setState({ documents });
    //   }


    policyIds = () => {

        this.setState({ policyIds: true })
        this.setState({ patientDetails: false })
        this.setState({ treatment: false })
        this.setState({ packageDetails: false })
        this.setState({ claimDetails: false })
        this.setState({ userId: false })
        this.setState({ userId1: false })
        this.setState({ bulkdata: false })
        this.setState({ policyandrules: false })
        this.setState({ policyandrules1: false })
        this.setState({ aboutus: false })

    }
    patientDetails = () => {

        this.setState({ policyIds: false })
        this.setState({ patientDetails: true })
        this.setState({ treatment: false })
        this.setState({ packageDetails: false })
        this.setState({ claimDetails: false })
        this.setState({ userId: false })
        this.setState({ userId1: false })
        this.setState({ bulkdata: false })
        this.setState({ policyandrules: false })
        this.setState({ policyandrules1: false })
        this.setState({ aboutus: false })

    }
    treatment = () => {

        this.setState({ policyIds: false })
        this.setState({ patientDetails: false })
        this.setState({ treatment: true })
        this.setState({ packageDetails: false })
        this.setState({ claimDetails: false })
        this.setState({ userId: false })
        this.setState({ userId1: false })
        this.setState({ bulkdata: false })
        this.setState({ policyandrules: false })
        this.setState({ policyandrules1: false })
        this.setState({ aboutus: false })

    }
    packageDetails = () => {

        this.setState({ policyIds: false })
        this.setState({ patientDetails: false })
        this.setState({ treatment: false })
        this.setState({ packageDetails: true })
        this.setState({ claimDetails: false })
        this.setState({ userId: false })
        this.setState({ userId1: false })
        this.setState({ bulkdata: false })
        this.setState({ policyandrules: false })
        this.setState({ policyandrules1: false })
        this.setState({ aboutus: false })

    }
    claimDetails = () => {

        this.setState({ policyIds: false })
        this.setState({ patientDetails: false })
        this.setState({ treatment: false })
        this.setState({ packageDetails: false })
        this.setState({ claimDetails: true })
        this.setState({ userId: false })
        this.setState({ userId1: false })
        this.setState({ bulkdata: false })
        this.setState({ policyandrules: false })
        this.setState({ policyandrules1: false })
        this.setState({ aboutus: false })

    }
    userId = () => {

        this.setState({ policyIds: false })
        this.setState({ patientDetails: false })
        this.setState({ treatment: false })
        this.setState({ packageDetails: false })
        this.setState({ claimDetails: false })
        this.setState({ userId: true })
        this.setState({ userId1: false })
        this.setState({ bulkdata: false })
        this.setState({ policyandrules: false })
        this.setState({ policyandrules1: false })
        this.setState({ aboutus: false })

    }
    userId1 = () => {

        this.setState({ policyIds: false })
        this.setState({ patientDetails: false })
        this.setState({ treatment: false })
        this.setState({ packageDetails: false })
        this.setState({ claimDetails: false })
        this.setState({ userId: false })
        this.setState({ userId1: true })
        this.setState({ bulkdata: false })
        this.setState({ policyandrules: false })
        this.setState({ policyandrules1: false })
        this.setState({ aboutus: false })

    }
    bulkdata = () => {

        this.setState({ policyIds: false })
        this.setState({ patientDetails: false })
        this.setState({ treatment: false })
        this.setState({ packageDetails: false })
        this.setState({ claimDetails: false })
        this.setState({ userId: false })
        this.setState({ userId1: false })
        this.setState({ bulkdata: true })
        this.setState({ policyandrules: false })
        this.setState({ policyandrules1: false })
        this.setState({ aboutus: false })

    }
    policyandrules = () => {

        this.setState({ policyIds: false })
        this.setState({ patientDetails: false })
        this.setState({ treatment: false })
        this.setState({ packageDetails: false })
        this.setState({ claimDetails: false })
        this.setState({ userId: false })
        this.setState({ userId1: true })
        this.setState({ bulkdata: false })
        this.setState({ policyandrules: true })
        this.setState({ policyandrules1: false })
        this.setState({ aboutus: false })

    }
    policyandrules1 = () => {

        this.setState({ policyIds: false })
        this.setState({ patientDetails: false })
        this.setState({ treatment: false })
        this.setState({ packageDetails: false })
        this.setState({ claimDetails: false })
        this.setState({ userId: true })
        this.setState({ userId1: false })
        this.setState({ bulkdata: false })
        this.setState({ policyandrules: false })
        this.setState({ policyandrules1: true })
        this.setState({ aboutus: false })

    }
    aboutus = () => {

        this.setState({ policyIds: false })
        this.setState({ patientDetails: false })
        this.setState({ treatment: false })
        this.setState({ packageDetails: false })
        this.setState({ claimDetails: false })
        this.setState({ userId: false })
        this.setState({ userId1: false })
        this.setState({ bulkdata: false })
        this.setState({ policyandrules: false })
        this.setState({ policyandrules1: false })
        this.setState({ aboutus: true })

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
                                    <li class="active" onClick={() => this.policyIds()} ><a href="#" style={{ color: "orange" }}>Create Policy<span class="sr-only">(current)</span></a></li>
                                    <li onClick={() => this.patientDetails()} ><a href="#" style={{ color: "orange" }}>Discharge Summary</a></li>
                                    <li onClick={() => this.userId()} ><a href="#" style={{ color: "orange" }}>User History <span class="sr-only">(current)</span></a></li>
                                    <li onClick={() => this.userId1()} ><a href="#" style={{ color: "orange" }}>Policy Details<span class="sr-only">(current)</span></a></li>
                                    <li onClick={() => this.bulkdata()} ><a href="#" style={{ color: "orange" }}>All History <span class="sr-only">(current)</span></a></li>
                                    <li onClick={() => this.aboutus()} ><a href="#" style={{ color: "orange" }}>About Us</a></li>
                                </ul>
                            </div>

                            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" style={styles.dashboard}>

                                <br></br>
                                <div class="container">
                                    {this.state.policyIds ?

                                        <div class="col-xs-6 col-sm-3 placeholder">



                                            <div class="container" style={styles.policyIddiv}>

                                                <div style={{ marginTop: 69 }}>
                                                    <label for="lgFormGroupInput" style={styles.policyId} styles={{ marginLeft: 115 }} class="col-sm-2 col-form-label col-form-label-lg">Policy ID:</label>

                                                    <RX.TextInput type="email" style={styles.policyIdTextBox} value={this.state.policyId} onChangeText={this.onChangepolicyId} id="lgFormGroupInput" placeholder="" />
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
                                                    <div style={styles.opeartorspanel}>
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
                                                <form onSubmit={this.handleSubmit}>
                                                    <br></br>
                                                    <div>
                                                        <RX.Button style={[styles.submitbutton]} onPress={() => this.onChangePost()} >
                                                            <RX.Text style={[styles.button1Text]} style={{ color: "white" }}>
                                                                {'Validate & Submit'}
                                                            </RX.Text>
                                                        </RX.Button>
                                                    </div>


                                                    <div>


                                                        {this.state.shareholders.map((shareholder, idx) => (
                                                            <div className="shareholder" style={{ marginLeft: 276 }}>
                                                                <label for="lgFormGroupInput" style={styles.policyId}>Rules:</label>
                                                                <RX.TextInput type="email" value={this.state.rules} value={this.state.expression} name="mytext[]" style={styles.rulestextbox} onChangeText={this.onChangerules} id="lgFormGroupInput" placeholder="" />
                                                                {/*  
        <RX.TextInput
          type="text"
          placeholder=""
          style={styles.rulesIdTextBox}
value={this.state.rules}
          value={this.state.expression}
          onChangeText={this.onChangerules}
        /> */}
                                                                <div id="container"></div>

                                                                <button type="button" onClick={this.handleRemoveShareholder(idx)} className="small">Delete</button>

                                                                <button type="button" onClick={this.onclick} className="small">Add Rule</button> </div>
                                                            //   <RX.Button style={styles.nxtbut} onClick={this.handleAddShareholder}
                                                        ))}


                                                    </div>
                                                </form>






                                                <br></br>


                                                <div style={styles.rulesdiv}>
                                                    <br></br>

                                                    <br></br>
                                                    {/* <RX.Button style={[styles.submitbutton]} onPress={() => this.onChangePost()} >
                                                        <RX.Text style={[styles.button1Text]} style={{ color: "white" }}>
                                                            {'Validate & Submit'}
                                                        </RX.Text>
                                                    </RX.Button> */}


                                                </div>

                                            </div>
                                        </div>


                                        : null}



                                    {this.state.patientDetails ?
                                        <div>
                                            <h2 style={{ marginLeft: 300, marginTop: -291 }}><strong>
                                                Discharge Summary</strong></h2>



                                            <div class="jumbotron" style={styles.patientDetails}>
                                                <form>
                                                    <h3 className="text-center font-weight-bold pt-4 pb-5" style={{ marginTop: -11 }}><strong>PATIENT DETAILS</strong></h3>
                                                </form>
                                                <br>
                                                </br>
                                                <form>
                                                    <div>
                                                        <div>
                                                            <label for="inputPassword4" style={styles.siDeText}>Name</label>
                                                            <RX.TextInput
                                                                style={styles.Form}
                                                                placeholder=""
                                                                value={this.state.NAME}
                                                                onChangeText={this.onChangeNAME}

                                                            />
                                                        </div>




                                                        <div >
                                                            <label for="inputEmail4" style={styles.siDeText}>Age</label>


                                                            <RX.TextInput
                                                                style={styles.Form}
                                                                placeholder=""
                                                                value={this.state.AGE}
                                                                onChangeText={this.onChangeage}

                                                            />
                                                        </div>
                                                        <div >
                                                            <label for="inputPassword4" style={styles.siDeText}>Date of Admission</label>


                                                            <RX.TextInput
                                                                style={styles.Form}
                                                                placeholder=""
                                                                value={this.state.DOA}
                                                                onChangeText={this.onChangeDOA}

                                                            />
                                                        </div>
                                                        {/* </div>
                                                </form> */}

                                                        {/* <form>
                                                    <div> */}
                                                        <div>
                                                            <label for="inputEmail4" style={styles.siDeText}>Reference Doctor</label>


                                                            <RX.TextInput
                                                                style={styles.Form}
                                                                placeholder=""
                                                                value={this.state.REF_DOC}
                                                                onChangeText={this.onChangeREF_DOC}

                                                            />
                                                        </div>
                                                        <div>
                                                            <label for="inputPassword4" style={styles.siDeText}>IPD number</label>



                                                            <RX.TextInput
                                                                style={styles.Form}
                                                                placeholder=""
                                                                value={this.state.IPD_No}
                                                                onChangeText={this.onChangeIPD_No}

                                                            />

                                                        </div>


                                                        <div>
                                                            <label for="inputEmail4" style={styles.siDeText}>Medico Legal Certificate</label>


                                                            <RX.TextInput
                                                                style={styles.Form}
                                                                placeholder=""
                                                                value={this.state.MLC}
                                                                onChangeText={this.onChangeMLC}

                                                            />

                                                        </div>
                                                        {/* </div>
                                                </form> */}
                                                        {/* <form>
                                                    <div> */}
                                                        <div>
                                                            <label for="" style={styles.siDeText}>Sex</label>

                                                            <RX.TextInput
                                                                style={styles.Form}
                                                                placeholder=""
                                                                value={this.state.SEX}
                                                                onChangeText={this.onChangeSEX}

                                                            />

                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label for="" style={styles.siDeText}>Date of Discharge</label>
                                                        <RX.TextInput
                                                            style={styles.Form}
                                                            placeholder=""
                                                            value={this.state.DOD}
                                                            onChangeText={this.onChangeDOD}

                                                        />
                                                    </div>
                                                </form>

                                                <RX.Button style={styles.nxtbut} onPress={() => this.treatment()} >
                                                    {'Next'}

                                                </RX.Button>
                                            </div>     </div> : null}

                                    {this.state.treatment ?
                                        <div>
                                            <h2 className="text-center font-weight-bold pt-4 pb-5" style={{ marginLeft: -356, marginTop: -288 }}><strong>
                                                Discharge Summary</strong></h2>

                                            <div class="jumbotron" style={styles.patientDetailsT}>

                                                <form>
                                                    <div >

                                                        <h3 className="text-center font-weight-bold pt-4 pb-5" style={{ marginTop: -11 }}><strong>TREATMENT</strong></h3>
                                                    </div>

                                                </form>
                                                <form>

                                                    <div>
                                                        <div>
                                                            <label for="" style={styles.siDeTextT}>Diagnosis</label>


                                                            <RX.TextInput
                                                                style={styles.Form1}
                                                                placeholder=" "
                                                                value={this.state.DAIGONIS}
                                                                onChangeText={this.onChangeDAIGONIS}

                                                            />
                                                        </div>
                                                        <div>
                                                            <label for="" style={styles.siDeTextT}>Cheif Complaints On Admission :</label>
                                                            <RX.TextInput
                                                                style={styles.Form1}
                                                                placeholder=""
                                                                value={this.state.Cheif_Complaints_On_Admission}
                                                                onChangeText={this.onChangeCheif_Complaints_On_Admission}

                                                            />
                                                        </div>
                                                        <div >
                                                            <label for="" style={styles.siDeTextT}>Past History with Allergy:</label>

                                                            <RX.TextInput
                                                                style={styles.Form1}
                                                                placeholder=" "
                                                                value={this.state.Past_History_with_Allergy}
                                                                onChangeText={this.onChangePast_History_with_Allergy}

                                                            />
                                                        </div>


                                                        <div>
                                                            <label for="inputPassword4" style={styles.siDeTextT}>Personal History</label>




                                                            <RX.TextInput
                                                                style={styles.Form1}
                                                                placeholder=""
                                                                value={this.state.Personal_History}
                                                                onChangeText={this.onChangedPersonal_History}

                                                            />
                                                        </div>

                                                        <div>
                                                            <label for="" style={styles.siDeTextT}>Family History</label>



                                                            <RX.TextInput
                                                                style={styles.Form1}
                                                                placeholder=""
                                                                value={this.state.Family_History}
                                                                onChangeText={this.onChangeFamily_History}

                                                            />
                                                        </div>

                                                    </div>


                                                    <div>
                                                        <label for="" style={styles.siDeTextT}>Menstrual History</label>

                                                        <RX.TextInput
                                                            style={styles.Form1}
                                                            placeholder=""
                                                            value={this.state.Menstrual_History}
                                                            onChangeText={this.onChangeMenstrual_History}

                                                        />

                                                    </div>
                                                    <div>
                                                        <label for="" style={styles.siDeTextT}>Obstretric History</label>

                                                        <RX.TextInput
                                                            style={styles.Form1}
                                                            placeholder=""
                                                            value={this.state.Obstretric_History}
                                                            onChangeText={this.onChangeObstretric_History}

                                                        />

                                                    </div>
                                                    <div>
                                                        <label for="" style={styles.siDeTextT}>Genral Examination</label>

                                                        <RX.TextInput
                                                            style={styles.Form1}
                                                            placeholder=""
                                                            value={this.state.Genral_Examination}
                                                            onChangeText={this.onChangeGenral_Examination}

                                                        />

                                                    </div>
                                                    <div>
                                                        <label for="" style={styles.siDeTextT}>Systematic Examination</label>

                                                        <RX.TextInput
                                                            style={styles.Form1}
                                                            placeholder=""
                                                            value={this.state.Systematic_Examination}
                                                            onChangeText={this.onChangeSystematic_Examination}

                                                        />

                                                    </div>

                                                </form>

                                                <RX.Button style={styles.treatmentnxtbut} onPress={() => this.packageDetails()} >
                                                    {'Next'}

                                                </RX.Button>
                                                <RX.Button style={styles.previouspage} onPress={() => this.patientDetails()} >
                                                    {'Previous'}

                                                </RX.Button>

                                            </div></div> : null}



                                    {this.state.packageDetails ?
                                        <div>
                                            <h2 className="text-center font-weight-bold pt-4 pb-5" style={{ marginLeft: -384, marginTop: -287 }}><strong>
                                                Discharge Summary</strong></h2>
                                            <div class="jumbotron" style={styles.patientDetailsPD}>
                                                <form>
                                                    <div class="form-row">

                                                        <h3 className="text-center font-weight-bold pt-4 pb-5" style={{ marginTop: -11 }}><strong>PACKAGE DETAILS</strong></h3>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <label for="" style={styles.siDeText}>Investigations</label>

                                                            <RX.TextInput
                                                                style={styles.FormPD}
                                                                placeholder=""
                                                                value={this.state.Investigations}
                                                                onChangeText={this.onChangeInvestigations}

                                                            />

                                                        </div>

                                                        <div>
                                                            <label for="" style={styles.siDeTextPD}>Baby's Details</label>
                                                            <RX.TextInput
                                                                style={styles.FormPD}
                                                                placeholder=" "
                                                                value={this.state.BaBys_Details}
                                                                onChangeText={this.onChangeBaBys_Details}

                                                            />

                                                        </div>
                                                        <div >
                                                            <label for="inputPassword4" style={styles.siDeTextPD}>Course in Hospital And condition </label>

                                                            <RX.TextInput
                                                                style={styles.FormPD}
                                                                placeholder=""
                                                                value={this.state.Course_in_Hospital_And_condition}
                                                                onChangeText={this.onChangeCourse_in_Hospital_And_condition}

                                                            />

                                                        </div>
                                                    </div>


                                                    <form>
                                                        <div>
                                                            <div>
                                                                <label for="inputPassword4" style={styles.siDeTextPD}>Treatment Given</label>

                                                                <RX.TextInput
                                                                    style={styles.FormPD}
                                                                    placeholder=""
                                                                    value={this.state.Treatment_Given}
                                                                    onChangeText={this.onChangeTreatment_Given}

                                                                />
                                                            </div>

                                                            <div>
                                                                <label for="inputPassword4" style={styles.siDeTextPD}>Treatment Adviced</label>

                                                                <RX.TextInput
                                                                    style={styles.FormPD}
                                                                    placeholder=""
                                                                    value={this.state.Treatment_Adviced}
                                                                    onChangeText={this.onChangeTreatment_Adviced}

                                                                />
                                                            </div>
                                                        </div>
                                                    </form>

                                                    <div>
                                                        <label for="inputPassword4" style={styles.siDeTextPD}>Follow Up Visit</label>

                                                        <RX.TextInput
                                                            style={styles.FormPD}
                                                            placeholder=""
                                                            value={this.state.Follow_Up_Visit}
                                                            onChangeText={this.onChangeFollow_Up_Visit}

                                                        />

                                                    </div>
                                                    <div>
                                                        <label for="inputPassword4" style={styles.siDeTextPD}>Procedure done</label>

                                                        <RX.TextInput
                                                            style={styles.FormPD}
                                                            placeholder=""
                                                            value={this.state.Procedure_done}
                                                            onChangeText={this.onChangeProcedure_done}

                                                        />

                                                    </div>

                                                </form>

                                                <RX.Button style={styles.treatmentnxtbut} onPress={() => this.claimDetails()} >
                                                    {'Next'}

                                                </RX.Button>
                                                <RX.Button style={styles.previouspage} onPress={() => this.treatment()} >
                                                    {'Previous'}

                                                </RX.Button>
                                            </div></div> : null}


                                    {this.state.claimDetails ?
                                        <div >
                                            <h2 className="text-center font-weight-bold pt-4 pb-5" style={{ marginLeft: -408, marginTop: -293 }}><strong>
                                                Discharge Summary</strong></h2>
                                            <div class="jumbotron" style={styles.patientDetailsCD}>
                                                <div class="form-row">

                                                    <h3 className="text-center font-weight-bold pt-4 pb-5" style={{ marginTop: -11 }}><strong>CLAIM DETAILS</strong></h3>
                                                </div>
                                                <label for="inputPassword4" style={styles.siDeTextCD}>Claim Amount</label>

                                                <RX.TextInput
                                                    style={styles.FormCD}
                                                    placeholder="Enter your Claim amount"
                                                    value={this.state.claimAmount}
                                                    onChangeText={this.onChangeclaimAmount}

                                                />
                                                <label for="inputPassword4" style={styles.siDeTextCD}>Status</label>

                                                <RX.TextInput
                                                    style={styles.FormCD}
                                                    placeholder=""
                                                    value={this.state.status}
                                                    onChangeText={this.onChangestatus}

                                                />
                                                <label for="inputPassword4" style={styles.siDeTextCD}>Hospital Name</label>

                                                <RX.TextInput
                                                    style={styles.FormCD}
                                                    placeholder=""
                                                    value={this.state.HospitalName}
                                                    onChangeText={this.onChangeHospitalName}

                                                />
                                                <label for="inputPassword4" style={styles.siDeTextCD}>Policy Id</label>

                                                <RX.TextInput
                                                    style={styles.FormCD}
                                                    placeholder=""
                                                    value={this.state.policyId}
                                                    onChangeText={this.onChangepolicyId1}

                                                /> </div>


                                            <RX.Button style={styles.claimsubmit} onPress={() => this.onChangePost1()}>
                                                {'Submit'}

                                            </RX.Button>

                                            {/* <RX.Button style={styles.nxtbut}   onPress={this.props.onNavigatePatientdetails }>
                           {'Next'}

                       </RX.Button> */}
                                            {/* <RX.Button style={styles.claimnext} onPress={() => this.claimDetails()} >
                                                {'Home'}

                                            </RX.Button> */}
                                            <RX.Button style={styles.previouspageCD} onPress={() => this.packageDetails()} >
                                                {'Previous'}

                                            </RX.Button>
                                        </div> : null}


                                    {this.state.userId ?

                                        <div class="col-xs-6 col-sm-3 placeholder">

                                            <div class="container" style={styles.userIddiv}>
                                                <RX.Button style={styles.button1} onPress={() => (this.onChangePost3(), this.policyandrules1())} refs="id" >
                                                    {'Submit'}
                                                </RX.Button>

                                                <label for="lgFormGroupInput" style={styles.userlabel} class="col-sm-2 col-form-label col-form-label-lg">Enter User Identification Number:</label>
                                                <div class="col-sm-10">
                                                    <RX.TextInput style={styles.InputSelectorCopy} placeholder="" value={this.state.userHistoryDetails} onChangeText={this.onChangeuserId} />


                                                </div>
                                            </div>
                                            <div>

                                            </div>

                                        </div> : null}

                                    {this.state.userId1 ?

                                        <div class="col-xs-6 col-sm-3 placeholder">

                                            <div class="container" style={styles.userIddiv}>
                                                <RX.Button style={styles.button1} onPress={() => (this.onChangePost4(), this.policyandrules())} refs="id" >
                                                    {'Submit'}
                                                </RX.Button>

                                                <label for="lgFormGroupInput" style={styles.sideText} class="col-sm-2 col-form-label col-form-label-lg">Enter PolicyID Number:</label>
                                                <div class="col-sm-10">
                                                    <RX.TextInput style={styles.InputSelectorCopy} placeholder="" value={this.state.userHistoryDetails1} onChangeText={this.onChangeuserId1} />
                                                    <div>

                                                    </div>



                                                </div>

                                            </div>
                                            <br></br>
                                            <br></br>

                                        </div> : null}


                                    {this.state.bulkdata ?
                                        <div>
                                            <RX.Button onPress={() => (this.onChangeGet5())} ><a style={{ color: "blue", marginTop: -10 }}><b>Click here view Entire User Details :</b><br></br><br></br>{this.state.bulkdata} <span class="sr-only">(current)</span></a></RX.Button>

                                        </div>


                                        : null}

                                    {this.state.policyandrules ?

                                        <div class="container" style={styles.divpolicyrules}>
                                            <div style={styles.policyheading}>
                                                <h3><b><u>User Policy Details:</u></b></h3>
                                            </div>
                                            <div style={styles.policyrules}>

                                                <ul class="list-group text-center">
                                                    <li class="list-group-item"><h4><b>PolicyID:</b></h4>{this.state.userdata} </li>
                                                    <li class="list-group-item"><h4><b>Rules:</b></h4>{this.state.rules} </li>

                                                </ul>

                                            </div>

                                        </div> : null}

                                    {this.state.policyandrules1 ?

                                        <div style={styles.details}>
                                            <br></br>
                                            <div style={styles.heading}>
                                                <h2><u>Discharge Summary Report:</u></h2>
                                            </div>
                                            <br></br>
                                            <form>

                                                <div class="container" style={{ marginTop: 23 }} >
                                                    <h3 style={{ marginTop: 23 }} >PATIENT DETAILS</h3>
                                                    <label>Name :   {this.state.name} </label><br></br>
                                                    <label> Age    : {this.state.AGE} </label><br></br>
                                                    <label> Date of Admission    :  {this.state.DOA} </label><br></br>
                                                    <label> Reference Doctor: {this.state.REF_DOC}  </label><br></br>
                                                    <label>In-Patient Department No  : {this.state.IPD_No}  </label><br></br>
                                                    <label> Medico Legal Case    :  {this.state.MLC}  </label><br></br>
                                                    <label> Sex    : {this.state.SEX}  </label><br></br>
                                                    {/* <label> NomineName    :  {this.state.NomineName}  </label><br></br> */}
                                                </div>
                                                <div class="container" style={styles.treat}>
                                                    <h3 style={{ marginTop: 56 }} >TREATMENT</h3>
                                                    <label>Diagnosis   :  {this.state.DAIGONSIS}</label> <br></br>
                                                    <label> Cheif Complaints on Admission:  {this.state.Cheif_Complaints_On_Admission}  </label> <br></br>
                                                    <label> Past History with Allergy    : {this.state.Past_History_with_Allergy} </label> <br></br>
                                                    <label> Personal History:  {this.state.Personal_History}  </label> <br></br>
                                                    <label>Family History  :  {this.state.Family_History}  </label> <br></br>
                                                    <label> Menstrual History    :  {this.state.Menstrual_History}  </label> <br></br>
                                                    <label> Obstretric History    :  {this.state.Obstretric_History}  </label> <br></br>
                                                    <label> Genral Examination    :  {this.state.Genral_Examination}  </label> <br></br>
                                                    <label> Systematic Examination    :  {this.state.Systematic_Examination}  </label> <br></br>
                                                </div>
                                                <div class="container" style={styles.pack}>
                                                    <h3 style={{ marginTop: 23 }} >PACKAGE DETAILS</h3>
                                                    <label> Investigations    :  {this.state.Investigations}  </label> <br></br>
                                                    <label> Baby's Details    :  {this.state.BaBys_Details}  </label> <br></br>
                                                    <label> Course in Hospital And condition    :  {this.state.Course_in_Hospital_And_condition}  </label> <br></br>
                                                    <label> Treatment Given    :  {this.state.Treatment_Given}  </label> <br></br>
                                                    <label> Follow Up Visit    :  {this.state.Follow_Up_Visit}  </label> <br></br>
                                                    <label> policy Id    :  {this.state.policyId}  </label> <br></br>
                                                    <label> Hospital Name    :  {this.state.HospitalName}  </label> <br></br>
                                                    <label> Status    :  {this.state.status}  </label> <br></br>
                                                    <label> Claim Amount    :  {this.state.claimAmount}  </label> <br></br>
                                                </div>
                                                <div style={{ marginTop: 24 }}>
                                                    <b>Claim Status:</b>{this.state.tpastatus}
                                                </div>
                                            </form>
                                        </div> : null}





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

