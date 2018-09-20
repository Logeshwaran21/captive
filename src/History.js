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
    searchinput: RX.Styles.createTextStyle({
        fontSize: 15,
        marginRight: 10,
        color: 'white',
        marginTop: '5'
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
        marginTop: 0,
        color: 'white',
        // marginTop:-56,
        width: 200,
        height: 620,
        backgroundColor: '#242536'
    }),



    rapidsettle: RX.Styles.createTextStyle({

        width: 1191,
        height: 160,
        marginLeft: -147
    }),
    dcform: RX.Styles.createButtonStyle({
        marginLeft: 341,
        display: 'block',
        width: '38%',
        height: 34,
        marginTop: 21,
        // padding: 6px 12px;
        fontSize: 14,
        // line: 1.42857143;
        color: "#555",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,

    }),
    but: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 66,
        height: 30,
        // margin: 200,
        marginLeft: 810,
        marginTop: -31,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
    }),
    Autoapprovalstyle: RX.Styles.createButtonStyle({
        marginLeft: 64,
        marginTop: 40
    }),
    all: RX.Styles.createButtonStyle({
        marginLeft: 271,
        marginTop: 40
    }),
    TPAapprovalstyle: RX.Styles.createButtonStyle({
        marginLeft: 72,
        marginTop: 40
    }),
    jumbotron: RX.Styles.createViewStyle({
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#82eec6c7',
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
        marginLeft: 169,
        marginTop: 0
    }),
    tabel1: RX.Styles.createViewStyle({
        borderWidth: 1,
        borderRadius: 8,
        width: 24
        // backgroundColor: '#82eec6c7',
        // justifyContent: 'center',
        // textAlign: 'CENTER',
        // alignSelf: 'center',
        // marginLeft: 169,
        // marginTop: -467
    }),
    tabel1: RX.Styles.createViewStyle({
        borderWidth: 1,
        borderRadius: 8,
        width: 96
        // backgroundColor: '#82eec6c7',
        // justifyContent: 'center',
        // textAlign: 'CENTER',
        // alignSelf: 'center',
        // marginLeft: 169,
        // marginTop: -467
    }),
    nametabel: RX.Styles.createViewStyle({
        borderWidth: 1,
        borderRadius: 8,
        width: 30
        // backgroundColor: '#82eec6c7',
        // justifyContent: 'center',
        // textAlign: 'CENTER',
        // alignSelf: 'center',
        // marginLeft: 169,
        // marginTop: -467
    }),
    tabel2: RX.Styles.createViewStyle({
        borderWidth: 1,
        borderRadius: 8,
        width: 20
        // backgroundColor: '#82eec6c7',
        // justifyContent: 'center',
        // textAlign: 'CENTER',
        // alignSelf: 'center',
        // marginLeft: 169,
        // marginTop: -467
    }),



};



export default class status extends RX.Component {
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
    onChangeGetRBPR = () => {
        console.log("Going to Retrievebulk records")

        fetch('http://localhost:8082/RetrieveBulkPatientRecords', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }


        }).then((response) => response.json()).then((responseJson) => {

            var res = responseJson
            // var responseJson = JSON.stringify(res)
            console.log("Retrieve bulk Records======>", res)
            // swal("List of Records:", responseJson);


            var bulkdata = res.message

            //===========================Retrieve Bulk name start====================
            console.log("Hellooooo===>", bulkdata)
            var retrievebulkname;
            var Rbulkname = bulkdata.map(Rbname => {
                return retrievebulkname = Rbname.Record.patientData.NAME + " " + "\n"
                console.log("Rbulkname===>", retrievebulkname)
            })

            console.log("hellobulkname======>", Rbulkname)
            this.setState({ Rbulkname: Rbulkname })
            //===========================Retrieve Bulk name end====================

            //===========================Retrieve Bulk AGE start====================
            console.log("Hellooooo===>", bulkdata)
            var retrievebulkAGE;
            var RbulkAGE = bulkdata.map(RbAGE => {
                return retrievebulkAGE = RbAGE.Record.patientData.AGE + " " + "\n"
                console.log("RbulkAGE===>", retrievebulkAGE)
            })

            console.log("hellobulkAGE======>", RbulkAGE)
            this.setState({ RbulkAGE: RbulkAGE })
            //===========================Retrieve Bulk AGE end====================

            //===========================Retrieve Bulk Gender start====================
            console.log("Hellooooo===>", bulkdata)
            var retrievebulkGender;
            var RbulkGender = bulkdata.map(RbGender => {
                return retrievebulkGender = RbGender.Record.patientData.SEX + " " + "\n"
                console.log("RbulkGender===>", retrievebulkGender)
            })

            console.log("hellobulkGender======>", RbulkGender)
            this.setState({ RbulkGender: RbulkGender })
            //===========================Retrieve Bulk Gender end====================

            //=========================== Retrieve Bulk status start====================
            var bulkstatusdata
            var Rbulkstatus = bulkdata.map(bstatus => {
                return bulkstatusdata = bstatus.Record.status + " " + "\n"
                console.log("Retrieve bulk status", bulkstatusdata)
            })
            console.log("rbulkstatusrecord", Rbulkstatus)
            this.setState({ Rbulkstatus: Rbulkstatus })
            //=========================== Retrieve Bulk status end====================

            //=========================== Retrieve Bulk submitID start====================
            var bulksubmitIDdata
            var RbulksubmitID = bulkdata.map(bsubmitID => {
                return bulksubmitIDdata = bsubmitID.Record.submitID + " " + "\n"
                console.log("Retrieve bulk submitID", bulksubmitIDdata)
            })
            console.log("rbulksubmitIDrecord", RbulksubmitID)
            this.setState({ RbulksubmitID: RbulksubmitID })
            //=========================== Retrieve Bulk submitID end====================
        })

    }

    onChangeGet5 = () => {
        console.log("akash")

        fetch('http://localhost:8082/StatusSettlement', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }


        }).then((result) => result.json()).then((result) => {
            console.log("Bulk Data =======>", result)
            var res = result.patients
            // var result = JSON.stringify(res)
            console.log("StatusSettlement======>", res)

            //============================Bulk Name start=============================================           
            let lengthname = res.length;
            console.log("Namelength========>", lengthname);
            var bulknamevalue = res;
            console.log("arjun========>", bulknamevalue)
            this.setState({ bulknamevalue: bulknamevalue })


            const bulkusername = bulknamevalue.map(bname => {
                // console.log(tst.name);

                return val = bname.patientData.NAME + "\n"

            });
            console.log("Bulk User NAme--------->", bulkusername)
            this.setState({ bulkusername: bulkusername })



            //============================Bulk Name END=============================================  

            //============================Bulk submitID start=============================================    
            const bulksubmitID = bulknamevalue.map(bsubmitid => {
                // console.log(tst.submitID);
                return val = bsubmitid.submitID + " " + "\n"
            });
            console.log("Bulk submit ID--------->", bulksubmitID)
            this.setState({ bulksubmitID: bulksubmitID })
            //============================Bulk subitid END=============================================  

            //============================Bulk Status start=============================================   

            const bulklist = bulknamevalue.map(tst => {
                // console.log(tst.submitID);
                return val = tst.status + " "
            });
            console.log("Bulk status--------->", bulklist)
            this.setState({ bulklist: bulklist })
            let length = bulklist.length;
            console.log(length);

            for (let i = 0; i < length; i++) {
                // console.log(`${bulklist[i]}`);
                // var lengthdata = {${bulklist[i]}}
                var lengthdata = bulklist[i]
                console.log("hi=======>", lengthdata);

            }
            // return lengthdata
            console.log("helloooooooo=======>", lengthdata)


            this.setState({ lengthdata: lengthdata })
            //============================Bulk Status END=============================================   
        })

    }
    onChangeGetWFA = () => {
        console.log("akash")

        fetch('http://localhost:8082/waitingforapproval', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }


        }).then((result) => result.json()).then((result) => {

            var res = result
            // var result = JSON.stringify(res)
            console.log("hiiii", res)
            let sample = res.patients;
            console.log("WaitingsubmitID", sample)
            //============================Waiting for aprroval Name Start============================================= 
            let waitbulkname
            const wbulkname = sample.map(waitingbulkname => {
                return waitbulkname = waitingbulkname.patientData.NAME + "\n"

            })
            console.log("waitingforapprovalname", wbulkname)
            this.setState({ wbulkname: wbulkname })
            //============================Waiting for aprroval Name END============================================= 

            //============================Waiting for aprroval AGE Start============================================= 
            let waitbulkAGE
            const wbulkAGE = sample.map(waitingbulkAGE => {
                return waitbulkAGE = waitingbulkAGE.patientData.AGE + "\n"

            })
            console.log("waitingforapprovalAGE", wbulkAGE)
            this.setState({ wbulkAGE: wbulkAGE })
            //============================Waiting for aprroval AGE END=============================================

            //============================Waiting for aprroval SEX Start============================================= 
            let waitbulkSEX
            const wbulkSEX = sample.map(waitingbulkSEX => {
                return waitbulkSEX = waitingbulkSEX.patientData.SEX + "\n"

            })
            console.log("waitingforapprovalSEX", wbulkSEX)
            this.setState({ wbulkSEX: wbulkSEX })
            //============================Waiting for aprroval SEX END============================================= 

            //============================Waiting for aprroval Status Start============================================= 
            let waitbulkstatus
            const wbulkstatus = sample.map(tst => {
                return waitbulkstatus = tst.status + "\n"
            })
            console.log("waitingforapprovalstatus", wbulkstatus)
            this.setState({ wbulkstatus: wbulkstatus })
            //============================Waiting for aprroval Status END============================================= 

            //============================Waiting for aprroval Submit Start============================================= 
            let waitbulkSubmit
            const wbulkSubmit = sample.map(tst => {
                return waitbulkSubmit = tst.submitID + "\n"
            })
            console.log("waitingforapprovalSubmit", wbulkSubmit)
            this.setState({ wbulkSubmit: wbulkSubmit })
            //============================Waiting for aprroval Submit END============================================= 


        })

    }


    componentDidMount() {


    }
    allFunction() {
        this.setState({ all: true })
        this.setState({ autoApproval: false })
        this.setState({ tpaApproval: false })
    }
    autoApprovalFunction() {
        this.setState({ all: false })
        this.setState({ autoApproval: true })
        this.setState({ tpaApproval: false })
    }
    tpaApprovalFunction() {
        this.setState({ all: false })
        this.setState({ autoApproval: false })
        this.setState({ tpaApproval: true })
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

                <div class="container">

                    <div class="row">
                        <div class="col-sm-3 col-md-2 sidebar" style={styles.sidenavbar}>
                            <ul class="nav nav-sidebar">
                                <li class="active" onClick={() => this.statusIds()} ><a href="#" style={{ color: "orange" }}>Status<span class="sr-only">(current)</span></a></li>


                            </ul>
                        </div>
                        <div>
                            <RX.TextInput
                                style={styles.dcform}
                                placeholder="Search..."
                                value={this.state.NAME}
                                onChangeText={this.onChangeNAME}
                                className="fa fa-search white-text"
                            // defaultValue={ this.state.inputValue }
                            />
                            <i class="fa fa-search white-text" aria-hidden="true"></i>
                            <RX.Button style={styles.but} onPress={() => this.onChangePost()}>
                                {'Submit'}

                            </RX.Button>
                            {/* <RX.Button style={styles.all} type="radio" onPress={() => this.onChangePost()} data-toggle="tab">
                                {'Submit'}

                            </RX.Button> */}
                            <div id="tab" class="btn-group" data-toggle="buttons-radio">
                                <a href="#prices2" style={styles.all} onClick={() => { this.allFunction(), this.onChangeGetRBPR() }} class="btn btn-large btn-info active" data-toggle="tab">All</a>

                                <a href="#features2" style={styles.Autoapprovalstyle} onClick={() => { this.autoApprovalFunction(), this.onChangeGet5() }} class="btn btn-large btn-info" data-toggle="tab">Auto APPROval</a>
                                <a href="#requests2" style={styles.TPAapprovalstyle} onClick={() => { this.tpaApprovalFunction(), this.onChangeGetWFA() }} class="btn btn-large btn-info" data-toggle="tab">TPA Approval</a>

                            </div>
                        </div>

                        {this.state.all ?
                            <div>
                                <div class="jumbotron" style={styles.jumbotron}>

                                    <div class="container">
                                        <div class="row">
                                            <table class="table table-bordered">



                                                {/* <tr>
                                                    <th style={styles.tabel1}>Name</th>
                                                    <th style={styles.tabel1}>Age</th>
                                                    <th style={styles.tabel1}>Gender</th>
                                                    <th style={styles.tabel1}>Approved status</th>
                                                    <th style={styles.tabel2}>Patient submit ID</th>
                                                </tr> */}

                                                {/* <tr>
                                                    <td>{this.state.Rbulkname}</td>
                                                    <td>{this.state.RbulkAGE}</td>
                                                    <td>{this.state.RbulkGender}</td>
                                                    <td>{this.state.Rbulkstatus}</td>
                                                    <td>{this.state.RbulksubmitID}</td>

                                                </tr> */}
                                            </table>
                                        </div>
                                    </div>
                                    {/* {this.state.patients} */}
                                    {/* {this.state.submitID} */}
                                    {/* <table>
                                        <tr>
                                            <th>Submit ID</th>
                                            <th>Lastname</th> 
                                            <th>name</th> 

                                        </tr>
                                        <tr>
                                            <td>{this.state.bulklist}</td>
                                        </tr>
                                    </table> */}
                                </div>
                            </div>
                            : null}
                        {this.state.autoApproval ?
                            <div>
                                <div class="jumbotron" style={styles.jumbotron}>

                                    <div class="container">
                                        <div class="row">
                                            <table class="table table-bordered">


                                                <tr>
                                                    <th style={styles.nametabel}>Name</th>
                                                    <th style={styles.tabel1}>Approved status</th>
                                                    <th style={styles.tabel2}>Patient submit ID</th>
                                                </tr>
                                                {/* <div style={styles.tabel1}> */}
                                                {this.state.bulknamevalue.map((listValue, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{listValue.submitID}</td>
                                                            <td>{listValue.status}</td>
                                                        </tr>
                                                    );
                                                })
                                                }

                                                {/* <tr>
                                                    <td>{this.state.bulkusername}</td>
                                                    <td>{this.state.bulklist}</td>
                                                    <td>{this.state.bulksubmitID}</td>

                                                </tr> */}
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div> : null}
                        {this.state.tpaApproval ?
                            <div>
                                <div class="jumbotron" style={styles.jumbotron}>

                                    <div class="container">
                                        <div class="row">
                                            <table class="table table-bordered">

                                                <tr>
                                                    <th style={styles.nametabel}>Name</th>
                                                    <th style={styles.tabel1}>Age</th>
                                                    <th style={styles.tabel1}>Gender</th>
                                                    <th style={styles.tabel1}>Approved status</th>
                                                    <th style={styles.tabel2}>Patient submit ID</th>
                                                </tr>
                                                {/* <div style={styles.tabel1}> */}
                                                <tr>
                                                    <td>{this.state.wbulkname}</td>
                                                    <td>{this.state.wbulkAGE}</td>
                                                    <td>{this.state.wbulkSEX}</td>
                                                    <td>{this.state.wbulkstatus}</td>
                                                    <td>{this.state.wbulkSubmit}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    {/* {this.state.patients} */}
                                    {/* {this.state.submitID} */}
                                    {/* <table>
                                        <tr>
                                        <th>Submit ID</th>
                                        <th>Lastname</th> 
                                        <th>name</th> 

                                        </tr>
                                        <tr>
                                        <td>{this.state.bulklist}</td>
                                        </tr>
                                        </table> */}
                                </div>
                            </div>
                            : null}

                    </div>
                </div>
            </RX.ScrollView>
        )
    }
}