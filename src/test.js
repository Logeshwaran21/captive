const words = ['spray', 'span', 'elites', 'exuberant', 'destruction', 'prestent'];
let s = 'sp';
test = `^${s}`;
// search = `/^${s}/`;
// console.log(search);
re = new RegExp();
console.log(re);
const result = words.filter(word => {
    word.sort(-1);
    // console.log(test);
})
console.log(words.sort());

// var re = /hi/g;
// console.log(re.test('hi there!'));
// console.log(RegExp.input );
// console.log(re.test('foo'));
// console.log(RegExp.$_  );
// // console.log(re.test('hi there!'));
// // console.log(re.test('hi there!'));
// //
// //
// // RegExp.$_;
// // re.test('hi world!');
// // RegExp.$_;
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
        marginBottom: -23,
        padding: 12,
        borderRadius: 8,
        borderColor: 'rgb(8, 37, 103)',
        color: "white",
        marginTop:-40,
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



//var filteredresult
var resJson1
var res
var Policyid
var responseJson
var result
var products



export default class Table extends RX.Component {
    constructor(props) {
        super(props);
        tparesult = this.props.navigatorRoute.res
        console.log("Props console:", tparesult)
        //this.setstate({ products: tparesult })
        this.state = {
            // products: [{ id: 1, title: 'Etherum', body: '123' }, { id: 2, title: 'Hyperledger', body: '123' },
            // { id: 3, title: 'Blockchain', body: '123' }, { id: 4, title: 'composer', body: '123' }]
            tparesult: tparesult,
            search:"",
            // filteredresult:""

        };
        // console.log("lolita", filteredresult)
this.sortBy=this.sortBy.bind(this)
        console.log("state console:", tparesult)

    }

sortBy(test){
    console.log("test key",test)
    this.setState({
        
    filteredresult:filteredresult.sort()
   
})
console.log("hiiiii",filteredresult)
}


    updateSearch(event){
       
        this.setState({search:event.target.value.substr(0,20)});
    }

    renderProducts() {
       
        console.log("hello")
      
        return filteredresult.map(tpaApproval => {
  
                
                return (
                    
                    
                    <tr key={tpaApproval.submitID}>
                        <td>{tpaApproval.submitID}</td>
                        <td>{tpaApproval.patientData.NAME}</td>
                        <td>{tpaApproval.patientData.AGE}</td>
                        <td>{tpaApproval.patientData.SEX}</td>
                        <td>{tpaApproval.patientData.REF_DOC}</td>
                        <td>{tpaApproval.claimAmount}</td>
                        <td>{tpaApproval.status}</td>
                      
                    </tr>
                    
                );
            })
          }
        
       
    
 



    componentDidMount() {
        
         

    }
    // console.log("resultrender", result)
    render() {
         filteredresult=this.state.tparesult.filter(
           (tpaApproval)=>{

              
              re = this.state.search
            //   console.log(re,"aksk")
            //  let re = RegExp (tparesult, filter).startsWith(toLowerCase(filter.tparesult));
            test = `^${this.state.search}`;
                return tpaApproval.patientData.NAME.match(test);

                
            }   
        );
        

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
                   
                    onPress={this.props.onNavigateHistory}
                >Home</RX.Button>
                </div>
                <RX.View>
                    <Grid>
                    <div className="container">
                        <br />
                        <br />
                        <input type="text" value={this.state.search} placeholder="What you looking for?" onChange ={this.updateSearch.bind(this)}/>
                        <table className="table" id="myTable">
                            <thead>
                          
                                <tr  class="header" id="row">
                                    <th>ID
                                       
                                    </th>
                                    <th>Name
                                    <RX.Button onPress={()=> (this.sortBy(test))} onChange={this.state.filteredresult} sortBy={this.sortBy.bind(this)}>
                                    
                                            sort
                                            </RX.Button> 
                                            
                                    </th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Reference Doctor</th>
                                    <th>Claim Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                          
                            {/* <div class="embedded-demo" data-options="{ &quot;path&quot;: &quot;/demo/grid-filtering/filter-row/bootstrap3/default/clean&quot;, &quot;frame&quot;: true }"></div>
                            <div class="input-group"><input type="text" class="form-control" placeholder="Filter..." value=""/>
                            </div> */}
                            <tbody>
                            
                                {this.renderProducts()}
                            </tbody>
                        </table>
                    </div>
</Grid>




                </RX.View>
            </RX.ScrollView>

        );

    }
}