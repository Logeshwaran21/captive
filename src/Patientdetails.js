import React from 'react';

import RX from 'reactxp';
import styling from './AppStyles';
import { Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, label, Visible, Checkbox, lg, xs } from 'react-bootstrap';

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
    pd: RX.Styles.createViewStyle({
        fontSize: 16,
        color: 'BLACK',
        fontWeight: 'bold',
        marginLeft: 436
    }),
    pacdet: RX.Styles.createViewStyle({
        fontSize: 16,
        color: 'BLACK',
        fontWeight: 'bold',
        marginLeft: 429
    }),
    treatment: RX.Styles.createViewStyle({
        fontSize: 16,
        color: 'BLACK',
        fontWeight: 'bold',
        marginLeft: 456
    }),
    but: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 92,
        height: 30,
        // margin: 200,
        marginLeft: 383,
        marginTop: 39,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: 'white'
    }),

    navrqlogo: RX.Styles.createViewStyle({
        height: 20,
        width: '30%',
        marginTop: '5',
        marginBottom: -20,
        marginRight: 1200
    }),


    navwelcome: RX.Styles.createTextStyle({
        fontSize: 15,
        marginRight: 1050,
        color: 'white',
        marginTop: '5'
    }),

    sidenavbar: RX.Styles.createTextStyle({
        fontSize: 15,
        marginRight: 1150,
        color: 'white',
        marginTop: -56,
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
    search: RX.Styles.createTextStyle({
        width: 500,
        height: 40,

        backgroundColor: '#ffffff',
        borderSolid: '#dbdbdb'

    }),

    pageAlign: RX.Styles.createScrollViewStyle({
        backgroundColor: '#ffffff',
        justifyContent: 'center'

    }),
    flute: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        padding: 11,
        alignSelf: 'center',
    }),
    head: RX.Styles.createScrollViewStyle({
        fontSize: 25,
        color: 'red',
        alignSelf: 'center',
        textalign: 'center',
        justifyContent: 'center',

    }),
    //    
    dropdown: RX.Styles.createTextStyle({

        width: 117,
        marginTop: 23,
        marginLeft: 150,
        height: 40,
        borderRadius: 4,
        backgroundColor: '#ffffff',
        borderSolid: '#dbdbdb'
    }),
    searchdetails: RX.Styles.createViewStyle({
        width: 164,
        marginLeft: 368,
        marginTop: -38
    }),
    providerlogo: RX.Styles.createTextStyle({
        width: 49,
        // height: 49,
        marginLeft: 1400

    }),
    record: RX.Styles.createTextStyle({
        width: 860,
        backgroundColor: '#ffffff',
        marginLeft: 89

    }),
    grid1: RX.Styles.createTextStyle({

        height: 249,
        width: 198,
        marginTop: 73,
        marginLeft: 13

    }),
    topClaims: RX.Styles.createTextStyle({
        width: 860,
        backgroundColor: '#ffffff',
        height: 283,
        marginTop: 40

    }),
    providerdiv: RX.Styles.createTextStyle({
        backgroundColor: '#ffffff',
        width: 250,

        marginTop: 70
        // marginBottom:-50
    }),
    // searchdetails: RX.Styles.createViewStyle({
    //   width: 164,
    //   marginLeft: 368,
    //   marginTop: -38
    // }),
    image: RX.Styles.createViewStyle({
        height: 50,
        width: 150,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        marginLeft: -56
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


export default class Patientdetails extends RX.Component {
    constructor(props) {
        super(props);
        this.state = {

        },
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
        console.log("arjun")
        return fetch('http://localhost:8082/submitClaim', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },

            body: JSON.stringify({
                "patientData": [{
                    "PATEINT_DETAILS": [{
                        "NAME": this.state.name,
                    }, {
                        "AGE": this.state.age,
                    },
                    {
                        "DOA": this.state.doa,
                    },
                    {
                        "REF_DOC": this.state.refdoc,
                    },
                    {
                        "IPD_No": this.state.ipdno,
                    },
                    {
                        "MLC": this.state.mlc,
                    },
                    {
                        "SEX": this.state.sex,
                    },
                    {
                        "doj": this.state.doj
                    },
                    {
                        "DOD": this.state.dod
                    }
                    ]
                },

                {
                    "Treatment": [{
                        "DAIGONIS": this.state.daigonis,
                    },
                    {
                        "Cheif_Complaints_On_Admission": this.state.CheifComplaints,
                    },
                    {
                        "Past_History_with_Allergy": this.state.PastHistorywithAllergy,
                    },
                    {
                        "Personal_History": this.state.PersonalHistory,
                    },
                    {
                        "Family_History": this.state.FamilyHistory,
                    },
                    {
                        "Menstrual_History": this.state.MenstrualHistory,
                    },
                    {
                        "Obstretric_History": this.state.ObstretricHistory,
                    },
                    {
                        "Genral_Examination": this.state.GenralExamination,
                    },
                    {
                        "Systematic_Examination": this.state.SystematicExamination
                    }
                    ]
                }, {
                    "Package_details": [{
                        "Investigations": this.state.Investigations,
                    },
                    {
                        "BaBys_Details": this.state.BabysDetails,
                    },
                    {
                        "Course_in_Hospital_And_condition": this.state.coursehospitalcondition,
                    },
                    {
                        "Treatment_Given": this.state.TreatmentGiven,
                    },
                    {
                        "Treatment_Adviced": this.state.TreatmentAdviced,
                    },
                    {
                        "Follow_Up_Visit": this.state.FollowUpVisit,
                    },
                    {
                        "Procedure_done": this.state.productdone
                    }
                    ]
                }],

                "TotalClaimedAmount": this.state.TotalClaimedAmount,
                "status": this.state.status,
                "HospitalName": this.state.HospitalName,
                "submitID": ""
            }
            ),
        }).then((result) => result.json()).then((responseJson) => {

            var res = responseJson.submitID;
            console.log("arjun------------>", res)
            swal("Your Submit ID:", res);

            // var resJson1 = JSON.stringify(res)
            // console.log(resJson1)
        })
    }
    onChangePost() {

        this.props.onNavigatePush(PatientDetail);
    }

    // onChangename = (value) => {
    //     console.log(value)
    //     this.setState({name: value});
    //     console.log(this.state.name,"name");
    // }


    componentDidMount() {




    }



    //patient details---------------

    onChangename = (value) => {
        console.log(value)
        this.setState({ name: value });
        console.log(this.state.name, "name");
    }

    onChangeage = (value) => {
        this.setState({ age: value });
        console.log(this.state.age, "age");
    }
    onChangedoa = (value) => {
        this.setState({ doa: value });
        console.log(this.state.doa, "doa");
    }
    onChangerefdoc = (value) => {
        this.setState({ refdoc: value });
        console.log(this.state.refdoc, "REF DOC");
    }
    onChangeipdno = (value) => {
        this.setState({ ipdno: value });
        console.log(this.state.ipdno, "ipdno");
    }
    onChangemlc = (value) => {
        this.setState({ mlc: value });
        console.log(this.state.mlc, "mlc");
    }
    onChangesex = (value) => {
        this.setState({ sex: value });
        console.log(this.state.sex, "sex");
    }
    onChangedoj = (value) => {
        this.setState({ doj: value });
        console.log(this.state.doj, "doj");
    }
    onChangedod = (value) => {
        this.setState({ dod: value });
        console.log(this.state.dod, "dod");
    }
    //----------------------------------------------------
    //Treatment-------------------------------------------
    onChangedaigonis = (value) => {
        this.setState({ daigonis: value });
        console.log(this.state.daigonis, "daigonis");
    }

    onChangeCheifComplaints = (value) => {
        this.setState({ CheifComplaints: value });
        console.log(this.state.CheifComplaints, "CheifComplaints");
    }

    onChangePastHistorywithAllergy = (value) => {
        this.setState({ PastHistorywithAllergy: value });
        console.log(this.state.PastHistorywithAllergy, "PastHistorywithAllergy");
    }
    onChangedPersonalHistory = (value) => {
        this.setState({ PersonalHistory: value });
        console.log(this.state.PersonalHistory, "PersonalHistory");
    }

    onChangeFamilyHistory = (value) => {
        this.setState({ FamilyHistory: value });
        console.log(this.state.FamilyHistory, "FamilyHistory");
    }

    onChangeMenstrualHistory = (value) => {
        this.setState({ MenstrualHistory: value });
        console.log(this.state.MenstrualHistory, "MenstrualHistory");
    }
    onChangeObstretricHistory = (value) => {
        this.setState({ ObstretricHistory: value });
        console.log(this.state.ObstretricHistory, "ObstretricHistory");
    }
    onChangeGenralExamination = (value) => {
        this.setState({ GenralExamination: value });
        console.log(this.state.GenralExamination, "GenralExamination");
    }
    onChangeSystematicExamination = (value) => {
        this.setState({ SystematicExamination: value });
        console.log(this.state.SystematicExamination, "SystematicExamination");
    }
    //----------------------------------------------------------------------------
    //package---------------------------------------------------------------------
    onChangeInvestigations = (value) => {
        this.setState({ Investigations: value });
        console.log(this.state.Investigations, "Investigations");
    }
    onChangeBabysDetails = (value) => {
        this.setState({ BabysDetails: value });
        console.log(this.state.BabysDetails, "BabysDetails");
    }
    onChangecoursehospitalcondition = (value) => {
        this.setState({ coursehospitalcondition: value });
        console.log(this.state.coursehospitalcondition, "coursehospitalcondition");
    }
    onChangeTreatmentGiven = (value) => {
        this.setState({ TreatmentGiven: value });
        console.log(this.state.TreatmentGiven, "TreatmentGiven");
    }
    onChangeTreatmentAdviced = (value) => {
        this.setState({ TreatmentAdviced: value });
        console.log(this.state.TreatmentAdviced, "TreatmentAdviced");
    }
    onChangeFollowUpVisit = (value) => {
        this.setState({ FollowUpVisit: value });
        console.log(this.state.FollowUpVisit, "FollowUpVisit");
    }
    onChangeproductdone = (value) => {
        this.setState({ productdone: value });
        console.log(this.state.productdone, "productdone");
    }
    //-----------------------------------------------------------------------------------
    onChangeTotalClaimedAmount = (value) => {
        this.setState({ TotalClaimedAmount: value });
        console.log(this.state.TotalClaimedAmount, "TotalClaimedAmount");
    }
    onChangestatus = (value) => {
        this.setState({ status: value });
        console.log(this.state.status, "status");
    }
    onChangeHospitalName = (value) => {
        this.setState({ HospitalName: value });
        console.log(this.state.HospitalName, "HospitalName");
    }

    //-------------------------------------------------------------------------------------------










    render() {
        return (

            <RX.ScrollView style={styles.scroll}>
                <RX.View style={styles.navcontainer}>
                    <RX.Image source={'./src/img/rqlogo.png'} style={[styles.navrqlogo]} />
                    <RX.Text style={styles.navwelcome}>
                        RAPID SETTLE
                      </RX.Text>
                </RX.View>
                <RX.View >
                    <RX.View style={_styles.client}>
                        <h2>PATIENT DATA</h2>
                    </RX.View>
                    <RX.View style={_styles.client}>
                        <div class="jumbotron" style={_styles.SCROLL}>
                            <form>
                                <div class="form-row">

                                    <label for="inputEmail4" style={styles.pd}>PATIENT DETAILS</label>
                                </div>

                            </form>
                            <br>
                            </br>
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="inputPassword4" style={styling.siDeText}>NAME :</label>



                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder=""
                                            value={this.state.name}
                                            onChangeText={this.onChangename}
                                        // defaultValue={ this.state.inputValue }
                                        />
                                    </div>




                                    <div class="form-group col-md-4">
                                        <label for="inputEmail4" style={styling.siDeText}>AGE</label>


                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder=""
                                            value={this.state.age}
                                            onChangeText={this.onChangeage}
                                        // defaultValue={ this.state.inputValue }
                                        />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputPassword4" style={styling.siDeText}>DOA</label>


                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder=""
                                            value={this.state.doa}
                                            onChangeText={this.onChangedoa}
                                        // defaultValue={ this.state.inputValue }
                                        />
                                    </div>
                                </div>
                            </form>

                            <form>


                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="inputEmail4" style={styling.siDeText}>REF_DOC</label>


                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder=""
                                            value={this.state.refdoc}
                                            onChangeText={this.onChangerefdoc}
                                        // defaultValue={ this.state.inputValue }
                                        />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputPassword4" style={styling.siDeText}>IPD_NO</label>



                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder=""
                                            value={this.state.ipdno}
                                            onChangeText={this.onChangeipdno}
                                        // defaultValue={ this.state.inputValue }
                                        />

                                    </div>


                                    <div class="form-group col-md-4">
                                        <label for="inputEmail4" style={styling.siDeText}>MLC</label>


                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder=""
                                            value={this.state.mlc}
                                            onChangeText={this.onChangemlc}
                                        // defaultValue={ this.state.inputValue }
                                        />

                                    </div>
                                </div>
                            </form>
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="inputPassword4" style={styling.siDeText}>SEX</label>

                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder=""
                                            value={this.state.sex}
                                            onChangeText={this.onChangesex}
                                        // defaultValue={ this.state.inputValue }
                                        />

                                    </div>


                                    <div class="form-group col-md-4">
                                        <label for="inputPassword4" style={styling.siDeText}>DOJ</label>



                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder=""
                                            value={this.state.doj}
                                            onChangeText={this.onChangedoj}
                                        // defaultValue={ this.state.inputValue }
                                        />

                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputPassword4" style={styling.siDeText}>DOD</label>


                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder=""
                                            value={this.state.dod}
                                            onChangeText={this.onChangedod}
                                        // defaultValue={ this.state.inputValue }
                                        />

                                    </div>

                                </div>
                            </form>


                            <RX.View style={_styles.client}>
                                <div class="jumbotron" style={_styles.SCROLL}>

                                    <form>
                                        <div class="form-row">

                                            <label for="inputEmail4" style={styles.treatment}>TREATMENT</label>
                                        </div>

                                    </form>
                                    <form>

                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4" style={styling.siDeText}>DAIGONIS</label>


                                                <RX.TextInput
                                                    style={styling.Form}
                                                    placeholder=" "
                                                    value={this.state.daigonis}
                                                    onChangeText={this.onChangedaigonis}
                                                // defaultValue={ this.state.inputValue }
                                                />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4" style={styling.siDeText}>Cheif Complaints On Admission :</label>
                                                <RX.TextInput
                                                    style={styling.Form}
                                                    placeholder=""
                                                    value={this.state.CheifComplaints}
                                                    onChangeText={this.onChangeCheifComplaints}
                                                // defaultValue={ this.state.inputValue }
                                                />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4" style={styling.siDeText}>Past History with Allergy:</label>

                                                <RX.TextInput
                                                    style={styling.Form}
                                                    placeholder=" "
                                                    value={this.state.PastHistorywithAllergy}
                                                    onChangeText={this.onChangePastHistorywithAllergy}
                                                // defaultValue={ this.state.inputValue }
                                                />
                                            </div>


                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4" style={styling.siDeText}>Personal History</label>




                                                <RX.TextInput
                                                    style={styling.Form}
                                                    placeholder=""
                                                    value={this.state.PersonalHistory}
                                                    onChangeText={this.onChangedPersonalHistory}
                                                // defaultValue={ this.state.inputValue }
                                                />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4" style={styling.siDeText}>Family History</label>



                                                <RX.TextInput
                                                    style={styling.Form}
                                                    placeholder=""
                                                    value={this.state.FamilyHistory}
                                                    onChangeText={this.onChangeFamilyHistory}
                                                // defaultValue={ this.state.inputValue }
                                                />
                                            </div>

                                        </div>


                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4" style={styling.siDeText}>Menstrual History</label>

                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder=""
                                                value={this.state.MenstrualHistory}
                                                onChangeText={this.onChangeMenstrualHistory}
                                            // defaultValue={ this.state.inputValue }
                                            />

                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4" style={styling.siDeText}>Obstretric History</label>

                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder=""
                                                value={this.state.ObstretricHistory}
                                                onChangeText={this.onChangeObstretricHistory}
                                            // defaultValue={ this.state.inputValue }
                                            />

                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4" style={styling.siDeText}>Genral Examination</label>

                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder=""
                                                value={this.state.GenralExamination}
                                                onChangeText={this.onChangeGenralExamination}
                                            // defaultValue={ this.state.inputValue }
                                            />

                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4" style={styling.siDeText}>Systematic Examination</label>

                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder=""
                                                value={this.state.SystematicExamination}
                                                onChangeText={this.onChangeSystematicExamination}
                                            // defaultValue={ this.state.inputValue }
                                            />

                                        </div>
                                    </form>
                                </div>
                            </RX.View>
                            <RX.View style={_styles.client}>
                                <div class="jumbotron" style={{ width: 1129 }}>
                                    <form>
                                        <div class="form-row">

                                            <label for="inputEmail4" style={styles.pacdet}>PACKAGE DETAILS</label>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4" style={styling.siDeText}>Investigations</label>

                                                <RX.TextInput
                                                    style={styling.Form}
                                                    placeholder=""
                                                    value={this.state.Investigations}
                                                    onChangeText={this.onChangeInvestigations}
                                                // defaultValue={ this.state.inputValue }
                                                />

                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4" style={styling.siDeText}>BaBys Details</label>
                                                <RX.TextInput
                                                    style={styling.Form}
                                                    placeholder=" "
                                                    value={this.state.BabysDetails}
                                                    onChangeText={this.onChangeBabysDetails}
                                                // defaultValue={ this.state.inputValue }
                                                />

                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4" style={styling.siDeText}>Course in Hospital And condition </label>

                                                <RX.TextInput
                                                    style={styling.Form}
                                                    placeholder=""
                                                    value={this.state.coursehospitalcondition}
                                                    onChangeText={this.onChangecoursehospitalcondition}
                                                // defaultValue={ this.state.inputValue }
                                                />

                                            </div>
                                        </div>


                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="inputPassword4" style={styling.siDeText}>Treatment Given</label>

                                                    <RX.TextInput
                                                        style={styling.Form}
                                                        placeholder=""
                                                        value={this.state.TreatmentGiven}
                                                        onChangeText={this.onChangeTreatmentGiven}
                                                    // defaultValue={ this.state.inputValue }
                                                    />
                                                </div>

                                                <div class="form-group col-md-6">
                                                    <label for="inputPassword4" style={styling.siDeText}>Treatment Adviced</label>

                                                    <RX.TextInput
                                                        style={styling.Form}
                                                        placeholder=""
                                                        value={this.state.TreatmentAdviced}
                                                        onChangeText={this.onChangeTreatmentAdviced}
                                                    // defaultValue={ this.state.inputValue }
                                                    />
                                                </div>
                                            </div>
                                        </form>

                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4" style={styling.siDeText}>Follow Up Visit</label>

                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder=""
                                                value={this.state.FollowUpVisit}
                                                onChangeText={this.onChangeFollowUpVisit}
                                            // defaultValue={ this.state.inputValue }
                                            />

                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4" style={styling.siDeText}>Procedure done</label>

                                            <RX.TextInput
                                                style={styling.Form}
                                                placeholder=""
                                                value={this.state.productdone}
                                                onChangeText={this.onChangeproductdone}
                                            // defaultValue={ this.state.inputValue }
                                            />

                                        </div>

                                    </form>
                                </div>
                            </RX.View>


                            <div class="jumbotron" style={_styles.SCROLL}>
                                <label for="inputPassword4" style={styling.siDeText}>TotalClaimedAmount</label>

                                <RX.TextInput
                                    style={styling.Form}
                                    placeholder="Enter your Claim amount"
                                    value={this.state.TotalClaimedAmount}
                                    onChangeText={this.onChangeTotalClaimedAmount}
                                // defaultValue={ this.state.inputValue }
                                />
                                <label for="inputPassword4" style={styling.siDeText}>status</label>

                                <RX.TextInput
                                    style={styling.Form}
                                    placeholder=""
                                    value={this.state.status}
                                    onChangeText={this.onChangestatus}
                                // defaultValue={ this.state.inputValue }
                                />
                                <label for="inputPassword4" style={styling.siDeText}>HospitalName</label>

                                <RX.TextInput
                                    style={styling.Form}
                                    placeholder=""
                                    value={this.state.HospitalName}
                                    onChangeText={this.onChangeHospitalName}
                                // defaultValue={ this.state.inputValue }
                                />
                                <RX.Button style={styles.but} onPress={() => this.onChangePost()} >
                                    {'Submit'}

                                </RX.Button>
                            </div>
                        </div>
                    </RX.View>

                </RX.View>


            </RX.ScrollView>

        );

    }
} 