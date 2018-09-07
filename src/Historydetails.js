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
    jumbotron: RX.Styles.createViewStyle({
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#82eec6c7',
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
    }),
    but: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 66,
        height: 30,
        // margin: 200,
        marginLeft: 154,
        marginTop: -31,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
    }),
    pvbut: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 66,
        height: 30,
        // margin: 200,
        marginLeft: 180,
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
        marginLeft: 57
    }),
    pvform: RX.Styles.createButtonStyle({
        marginLeft: 24,
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
    dcid: RX.Styles.createButtonStyle({
        marginLeft: 87
    }),
    dcform: RX.Styles.createButtonStyle({
        marginLeft: 51,
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
    dcbut: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 66,
        height: 30,
        // margin: 200,
        marginLeft: 210,
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
        marginLeft: 128
    }),
    claform: RX.Styles.createButtonStyle({
        marginLeft: 88,
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
        marginLeft: 249,
        marginTop: -31,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
    }),
    stid: RX.Styles.createButtonStyle({
        marginLeft: 135
    }),
    stform: RX.Styles.createButtonStyle({
        marginLeft: 115,
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
    stbut: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 66,
        height: 30,
        // margin: 200,
        marginLeft: 272,
        marginTop: -31,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
    }),


    nxtbut: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 92,
        height: 30,
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',
        // margin: 200,
        marginLeft: 524,
        marginTop: -31,
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
        backgroundColor: 'blue'
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


export default class Historydetails extends RX.Component {
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

    componentDidMount() {

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
                <RX.View >
                    <div className="jumbotron" style={styles.jumbotron} >
                        <div class="form-group col-md-2" >
                            <label for="inputPassword4" style={styles.pvid}>Submit Id :{this.state.suggestion}</label>
                            <RX.TextInput
                                style={styling.Form}
                                placeholder=""
                                value={this.state.NAME}
                                onChangeText={this.onChangeNAME}
                            // defaultValue={ this.state.inputValue }
                            />
                            <RX.Button style={styles.but} onPress={() => this.onChangePost()}>
                                {'Submit'}

                            </RX.Button>
                        </div>

                        <div class="form-group col-md-2">
                            <label for="inputPassword4" style={styles.pvid}>Provider ID :{this.state.suggestion}</label>

                            <RX.TextInput
                                style={styles.pvform}
                                placeholder=""
                                value={this.state.NAME}
                                onChangeText={this.onChangeNAME}
                            // defaultValue={ this.state.inputValue }
                            />
                            <RX.Button style={styles.pvbut} onPress={() => this.onChangePost()}>
                                {'Submit'}

                            </RX.Button>
                        </div>

                        <div class="form-group col-md-2">
                            <label for="inputPassword4" style={styles.dcid}>Discharge:{this.state.suggestion}</label>

                            <RX.TextInput
                                style={styles.dcform}
                                placeholder=""
                                value={this.state.NAME}
                                onChangeText={this.onChangeNAME}
                            // defaultValue={ this.state.inputValue }
                            />
                            <RX.Button style={styles.dcbut} onPress={() => this.onChangePost()}>
                                {'Submit'}

                            </RX.Button>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputPassword4" style={styles.claid}>Claim:{this.state.suggestion}</label>

                            <RX.TextInput
                                style={styles.claform}
                                placeholder=""
                                value={this.state.NAME}
                                onChangeText={this.onChangeNAME}
                            // defaultValue={ this.state.inputValue }
                            />
                            <RX.Button style={styles.clabut} onPress={() => this.onChangePost()}>
                                {'Submit'}

                            </RX.Button>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputPassword4" style={styles.stid}>Settlement:{this.state.suggestion}</label>

                            <RX.TextInput
                                style={styles.stform}
                                placeholder=""
                                value={this.state.NAME}
                                onChangeText={this.onChangeNAME}
                            // defaultValue={ this.state.inputValue }
                            />
                            <RX.Button style={styles.stbut} onPress={() => this.onChangePost()}>
                                {'Submit'}

                            </RX.Button>
                        </div>



                    </div>
                </RX.View>
            </RX.ScrollView>
        )
    }
}

