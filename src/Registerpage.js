

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
    Container: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(213,222,219,0)',
        padding: 5
    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    instructions: RX.Styles.createTextStyle({
        fontSize: 16,
        color: '#aaa',
        marginBottom: 16
    }),
    docLink: RX.Styles.createLinkStyle({
        fontSize: 16,
        color: 'blue',
        marginBottom: 16
    }),
    roundButton: RX.Styles.createViewStyle({
        margin: 16,
        borderRadius: 16,
        backgroundColor: '#ff0000ab',
        justifyContent: 'CENTER'
    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    }),
    editTodoItem: RX.Styles.createViewStyle({
        margin: 15,
        height: 47,
        fontSize: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 16,
        borderWidth: 2,
        bordercolor: '#cccccc'
    }),
    email: RX.Styles.createTextStyle({
        fontSize: 18,
        color: 'Black',
        justifyContent: 'center'
    }),
    password: RX.Styles.createTextStyle({
        fontSize: 18,
        color: 'Black',
        justifyContent: 'center'
    }),
    navrqlogo: RX.Styles.createViewStyle({
        height: 20,
        width: '30%',
        marginTop: '5',
        marginBottom: -20,
        marginRight: 1200
    }),

    dropdown: RX.Styles.createTextStyle({
        fontSize: 14,
        color: '#1a153b',
        // justifyContent: 'center',
        marginLeft: 400,
        width: 354,
        height: 35,
        borderRadius: 4,
        backgroundColor: '#ffffff',
    }),

    navwelcome: RX.Styles.createTextStyle({
        fontSize: 15,
        marginRight: 1050,
        color: 'white',
        marginTop: '5'
    }),
    account: RX.Styles.createTextStyle({
        fontSize: 20,
        color: 'red',
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

    button1Text: RX.Styles.createTextStyle({
        fontSize: 14,
        color: 'white',
        justifyContent: 'center',
        textAlign: 'CENTER',
        alignSelf: 'center',

    }),

    button1: RX.Styles.createButtonStyle({
        backgroundColor: 'rgb(8, 37, 103)',
        borderWidth: 1,
        width: 130,
        height: 5,
        marginLeft: 580,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
    }),
    logo: RX.Styles.createButtonStyle({
        width: 25,
        marginTop: -30,
        float: 'right',
        alignItems: 'right'

    }),
    register: RX.Styles.createImageStyle({
        height: 80,
        width: 110,
        justifyContent: 'center'
    }),
    InputSelectorCopy: RX.Styles.createTextStyle({
        fontSize: 14,
        color: '#1a153b',
        // justifyContent: 'center',
        marginLeft: 400,
        width: 354,
        height: 35,
        // borderRadius: 4,
        backgroundColor: '#ffffff',

    }),

    AddressSelectorCopy: RX.Styles.createTextStyle({
        fontSize: 14,
        color: '#1a153b',
        // justifyContent: 'center',
        marginLeft: 400,
        width: 354,
        height: 85,
        // borderRadius: 4,
        backgroundColor: '#ffffff',

    }),
    DateSelectorCopy: RX.Styles.createTextStyle({
        fontSize: 14,
        color: '#1a153b',
        // justifyContent: 'center',
        marginLeft: 400,
        width: 134,
        height: 35,
        // borderRadius: 4,
        backgroundColor: '#ffffff',

    }),
    StartDate: RX.Styles.createTextStyle({
        fontSize: 14,
        // color: '#1a153b',
        // justifyContent: 'center',
        marginLeft: 400,
        width: 134,
        height: 35,
        // borderRadius: 4,
        // backgroundColor: '#ffffff',

    }),

    Date1SelectorCopy: RX.Styles.createTextStyle({
        fontSize: 14,
        color: '#1a153b',
        // justifyContent: 'center',
        marginLeft: 80,
        width: 134,
        height: 35,
        // borderRadius: 4,
        backgroundColor: '#ffffff',

    }),
    EndDate: RX.Styles.createTextStyle({
        fontSize: 14,
        // color: '#1a153b',
        // justifyContent: 'center',
        marginLeft: 80,
        width: 134,
        height: 35,
        // borderRadius: 4,
        // backgroundColor: '#ffffff',

    }),

    sideText: RX.Styles.createTextStyle({
        width: 434,
        height: 32,
        marginLeft: 400
    }),
    sideMar: RX.Styles.createTextStyle({
        marginTop: 10,
        marginLeft: 30,
        marginRight: 20
    }),

};


export default class RegisterPage extends RX.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: '',
            todofield: '',
            secureTextEntry: true
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
        let animation = RX.Animated.timing(this._translationValue, {
            toValue: 0,
            easing: RX.Animated.Easing.OutBack(),
            duration: 500
        }
        );

        animation.start();
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
                <RX.View style={styles.pageAlign}>
                    <RX.View style={styles.flute}>
                        <RX.Text style={styles.head}>
                            {/* Please Create An Account */}
                        </RX.Text>
                    </RX.View>
                </RX.View>

                <div class="container">
                    <form>
                        <select class="form-control form-control-lg" id="lgFormGroupInput" style={styles.dropdown}>
                            <option value="volvo">Relationship Manager</option>
                            <option value="saab">Current provider</option>
                        </select>
                        <div class="form-group row">

                            <label for="lgFormGroupInput" style={styles.sideText} class="col-sm-2 col-form-label col-form-label-lg">Name</label>

                            <div class="col-sm-10">
                                <input type="email" style={styles.InputSelectorCopy} id="lgFormGroupInput" placeholder="" />
                            </div>
                        </div>
                    </form>
                    <form>
                        <div class="form-group row">
                            <label for="lgFormGroupInput" style={styles.sideText} class="col-sm-2 col-form-label col-form-label-lg">Type Id</label>
                            <div class="col-sm-10">
                                <input type="email" style={styles.InputSelectorCopy} id="lgFormGroupInput" placeholder="" />
                            </div>
                        </div>
                    </form>
                    <form>
                        <div class="form-group row">
                            <label for="lgFormGroupInput" style={styles.sideText} class="col-sm-2 col-form-label col-form-label-lg">Enter Unique Identification Number</label>
                            <div class="col-sm-10">
                                <input type="email" style={styles.InputSelectorCopy} id="lgFormGroupInput" placeholder="" />
                            </div>
                        </div>
                    </form>
                    <form>
                        <div class="form-group row">
                            <label for="lgFormGroupInput" style={styles.sideText} class="col-sm-2 col-form-label col-form-label-lg">Provider Name</label>
                            <div class="col-sm-10">
                                <input type="email" style={styles.InputSelectorCopy} id="lgFormGroupInput" placeholder="" />

                            </div>
                        </div>
                    </form>
                    <form>
                        <div class="form-group row">
                            <label for="lgFormGroupInput" style={styles.sideText} class="col-sm-2 col-form-label col-form-label-lg">Contract Date</label>

                            <div class="col-sm-10">
                                <label for="lgFormGroupInput" style={styles.StartDate} class="col-sm-2 col-form-label col-form-label-lg" id="lgFormGroupInput">Start Date</label>
                                <label for="lgFormGroupInput" style={styles.EndDate} class="col-sm-2 col-form-label col-form-label-lg" id="lgFormGroupInput">End Date</label>
                                <input type="date" style={styles.DateSelectorCopy} id="lgFormGroupInput" ></input>
                                <input type="date" style={styles.Date1SelectorCopy} id="lgFormGroupInput" ></input>

                            </div>
                        </div>
                    </form>
                    <form>
                        <div class="form-group row">
                            <label for="lgFormGroupInput" style={styles.sideText} class="col-sm-2 col-form-label col-form-label-lg">Address</label>
                            <div class="col-sm-10">
                                <input type="email" style={styles.AddressSelectorCopy} id="lgFormGroupInput" placeholder="" />

                            </div>
                        </div>
                    </form>


                </div>

                <RX.Button style={[styles.button1]} onPress={this.props.onNavigateFifth}>


                    <RX.Text style={[styles.button1Text]} >
                        {'Next'}
                    </RX.Text>
                </RX.Button>

            </RX.ScrollView>

        );

    }
}
