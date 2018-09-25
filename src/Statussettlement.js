import React from 'react';
import RX from 'reactxp';
import { Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, label, Visible, Checkbox, lg, xs } from 'react-bootstrap';
/*const {
Welcome
} = TodoStyles;*/
// var DatePicker = require("react-bootstrap-date-picker");

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

var namefun
var result
var App
export default class StatusSettlement extends RX.Component {
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
            console.log("Bulk Data =======>", responseJson)
            var res = responseJson
            var bulkdata = res.message

                this.props.onNavigateStatussettlement(bulkdata)
        })

    }


    componentDidMount() {


    }
    // onchangeStatusSettlement() {
    //     console.log(result)
    //     this.probs.onNavigateTable(result)
    // }


    //  App = React.createClass({
    //   getInitialState: function(){
    //     var value = new Date().toISOString();
    //     return {
    //       value: value
    //     }
    //   },
    //   handleChange: function(value, formattedValue) {
    //     this.setState({
    //       value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
    //       formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    //     });
    //   },
    //   componentDidUpdate: function(){
    //     // Access ISO String and formatted values from the DOM.
    //     var hiddenInputElement = document.getElementById("example-datepicker");
    //     console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
    //     console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
    //   },
    //   render: function(){
    //     return <FormGroup>
    //       <ControlLabel>Label</ControlLabel>
    //       <DatePicker id="example-datepicker" value={this.state.value} onChange={this.handleChange} />
    //       <HelpBlock>Help</HelpBlock>
    //     </FormGroup>;
    //   }
    // });

    render() {
        result = this.props.navigatorRoute.result

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
                                <li class="active" onClick={() => this.onChangeGetRBPR()}  ><a href="#" style={{ color: "orange" }}>Retrieve bulk records<span class="sr-only">(current)</span></a></li>


                            </ul>

                        </div>
                    </div>
                </div>
            </RX.ScrollView>
        )
    }
}
