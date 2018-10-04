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
        width: 72,
        height: 5,
        marginLeft: 1035,
        marginTop:-34,
        marginBottom: -23,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: "white",
        textAlign:"center"
    }),
    pack: RX.Styles.createButtonStyle({
        marginLeft: 654,
        marginTop: -295
    }),
    treat: RX.Styles.createButtonStyle({
        marginLeft: 335,
        marginTop: -276
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

        marginLeft: 50,
        width: 829,
        height: 900,
        font: 400,
        marginTop: 22
    }),
    divpolicyrules: RX.Styles.createTextStyle({

        backgroundColor: "#80808080",
        width: 948,
        height: 300,
        marginRight: 328,
        marginTop: 123
    }),

    details: RX.Styles.createTextStyle({

        backgroundColor: "#80808080",
        width: 997,
        height: 437,
        marginLeft: -34,
        marginTop: 88
    }),

    heading: RX.Styles.createTextStyle({
        marginLeft: 276,

    }),
    policyheading: RX.Styles.createTextStyle({
        marginLeft: 335,

    }),
};

var resJson1
var res
var Policyid
var responseJson
var result
var products
export default class CreatePolicy extends RX.Component {
    constructor(props) {
        super(props);
        propsresult = this.props.navigatorRoute.bulkdata
        console.log("Props console:", propsresult)
        var allressult=propsresult
        console.log("sample",allressult)
        //this.setstate({ products: propsresult })
        this.state = {
            // products: [{ id: 1, title: 'Etherum', body: '123' }, { id: 2, title: 'Hyperledger', body: '123' },
            // { id: 3, title: 'Blockchain', body: '123' }, { id: 4, title: 'composer', body: '123' }]
            propsresult: propsresult

        };

        console.log("state console:", propsresult)

    }

    renderProducts() {
        console.log("hello")
        return this.state.propsresult.map(autoApproval => {
            return (
                <tr key={autoApproval.submitID}>
                 <td>{autoApproval.Record.submitID}</td>
                    <td>{autoApproval.Record.patientData.NAME}</td>
                    <td>{autoApproval.Record.patientData.AGE}</td>
                    <td>{autoApproval.Record.patientData.SEX}</td>
                    <td>{autoApproval.Record.patientData.REF_DOC}</td>
                    <td>{autoApproval.Record.patientData.claimAmount}</td>
                    <td>{autoApproval.Record.status}</td>
                </tr>
            );
        })
    }
    //   renderProducts() {
    //     return this.state.products.map(product => {
    //       return (
    //         <tr key={product.id}>
    //           <td>{product.id}</td>
    //           <td>{product.title}</td>
    //           <td>{product.body}</td>
    //         </tr>
    //       );
    //     })
    //   }



    componentDidMount() {

    }


    // console.log("resultrender", result)
    render() {



        return (


            <RX.ScrollView style={styles.scroll}>
                <RX.View style={styles.navcontainer}>
                    <RX.Image source={'./src/img/rqlogo.png'} style={[styles.navrqlogo]} />
                    <RX.Text style={styles.navwelcome}>
                        RAPID SETTLES
    </RX.Text>
                </RX.View>
                <div class="container">
                    <h1>Claim Reports</h1>
                    <RX.Button
                    style={ [styles.button1] }
                   
                    onPress={this.props.onNavigateStatusSettlement}
                >Home</RX.Button>
                </div>
                <RX.View>
                    <div className="container">
                       
                        <br />
                        <br />
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Reference Doctor</th>
                                    <th>Claim Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.renderProducts()}
                            </tbody>
                        </table>
                    </div>





                </RX.View>
            </RX.ScrollView>

        );

    }
}