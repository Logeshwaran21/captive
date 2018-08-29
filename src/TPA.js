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
var bulkdata
export default class RetriveBulkRecords extends RX.Component {
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


    render() {
        fetch('http://localhost:8082/statusSettlement', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }


        }).then((result) => result.json()).then((responseJson) => {


            var s = responseJson.patients[0].HospitalName
            console.log(s)
            // var res = responseJson

            // var valu = responseJson.patients[0].HospitalName
            // console.log(valu)
            // var responseJson = JSON.stringify(res)
            // console.log("arjun------------>", responseJson)
            // var val = responseJson
            var bulkdata = s + "\n"
            this.setState({ bulkdata: bulkdata })


        })


        return (

            <RX.ScrollView style={styles.scroll}>
                <RX.View style={styles.navcontainer}>
                    <RX.Image source={'./src/img/rqlogo.png'} style={[styles.navrqlogo]} />
                    <RX.Text style={styles.navwelcome}>
                        RAPID SETTLE
    </RX.Text>
                </RX.View>

                <RX.View>
                    <div>
                        name: {this.state.bulkdata}
                    </div>
                    {/* {this.state.bulkdata} */}
                </RX.View>
            </RX.ScrollView>

        );

    };
    // React.render(
    //     { resJson1 }
    // )
}   
