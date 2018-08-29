import React from 'react';
import RX from 'reactxp';
import {Nav,NavItem,NavDropdown,MenuItem,Grid,Row,Col,Form,FormGroup,ControlLabel,FormControl,label,Visible,Checkbox,lg,xs} from 'react-bootstrap';

const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#2a647d0a'
    }),
   
navbar: RX.Styles.createViewStyle({
    width: 1440,
  height: 60,
  backgroundColor: '#002d62',
 
}),

dropdown:RX.Styles.createTextStyle({
    width: 220,
height: 32,
borderRadius: 4,
backgroundColor: '#ffffff',
marginLeft: 486,
marginTop: -32,
    
  
}),
gridsecond:RX.Styles.createTextStyle({
   
marginLeft:200,
marginTop: -218,

  
}),
gridthird:RX.Styles.createTextStyle({
   
 marginLeft:500,
 marginTop: -218,
 }),
 gridfour:RX.Styles.createTextStyle({
   
  marginLeft:750,
  marginTop: -218,
  }),
 innnerGridOne:RX.Styles.createTextStyle({
            
  backgroundColor: '#ffffff',
  }),

 Cid:RX.Styles.createTextStyle({
            
  marginLeft:240,
  marginTop:-140
 }),
RD:RX.Styles.createTextStyle({
            
 marginLeft:553,
 marginTop:-140
 }),
ED:RX.Styles.createTextStyle({
            
marginLeft:813,
marginTop:-140
 }),
 PA:RX.Styles.createTextStyle({
 marginLeft:21,
  }),
  gridContainer:RX.Styles.createTextStyle({          
    display:Grid, 
    GridColumnGap: 50,    
   }),
dropdowndetail:RX.Styles.createTextStyle({
    width: 220,
height: 32,
borderRadius: 4,
backgroundColor: '#ffffff',
marginLeft:730,
    marginTop: -33
  
}),
H2:RX.Styles.createTextStyle({
    marginLeft:-154,
    marginTop: -33
}),
H4:RX.Styles.createTextStyle({
    marginLeft:350
    
  
}),
pastehere: RX.Styles.createTextStyle({
    width: 550,
height: 90,
borderRadius: 9,
marginTop: 20,
marginLeft: 480,
//   borderColor:'black' 
    
}),
B1:RX.Styles.createTextStyle({
    border:1,
     solid :'#000'
    
  
}),
button1: RX.Styles.createButtonStyle({
    backgroundColor: 'rgb(8, 37, 103)',
    borderWidth:1,
    width: 67,
    height: 30,
    // margin: 200,
    marginLeft: 1050,
    padding: 12,
    borderRadius: 8,
    borderColor: 'rgb(8, 37, 103)',
    color:'white'
}),
rejectbutton: RX.Styles.createButtonStyle({
    backgroundColor: 'rgb(8, 37, 103)',
    borderWidth:1,
    width: 67,
    height: 30,
    // margin: 200,
    marginLeft: 372,
    marginTop:39,
    padding: 12,
    borderRadius: 8,
    borderColor: 'rgb(8, 37, 103)',
    color:'white'
}),
approvedbutton: RX.Styles.createButtonStyle({
    backgroundColor: 'rgb(8, 37, 103)',
    borderWidth:1,
    width: 81,
    height: 30,
    // margin: 200,
    marginLeft: 503,
    marginTop:-30,
    padding: 12,
    borderRadius: 8,
    borderColor: 'rgb(8, 37, 103)',
    color:'white'
}),
fieldbutton: RX.Styles.createButtonStyle({
    backgroundColor: 'rgb(8, 37, 103)',
    borderWidth:1,
    width: 147,
    height: 30,
    // margin: 200,
    marginLeft: 50,
    padding: 12,
   
    borderColor: 'rgb(8, 37, 103)',
    color:'white'
}),

logo:RX.Styles.createButtonStyle({
    width: 46,
    height: 42,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    marginLeft: 34,
     
}),

contract: RX.Styles.createViewStyle({
    justifyContent: 'right',
    alignItems: 'left',
    backgroundColor:'#ffffff',
    padding:5,
    flex:1,
   
     flexDirection:'col',
    borderBottomWidth:1,
    borderColor:"#cccccc"
}),


scroll: RX.Styles.createScrollViewStyle({
    alignSelf: 'stretch',
    backgroundColor: '#2a647d0a'
}),
payer: RX.Styles.createViewStyle({
    justifyContent: 'right',
    alignItems: 'left',
    backgroundColor:'#ffffff',
    padding:5,
    flex:1,
   marginLeft :4,
     flexDirection:'col',
    borderBottomWidth:1,
    borderColor:"#cccccc"
}),
}

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
        read:RX.Styles.createScrollViewStyle({
            borderRadius:15,
            width:"100%",
            marginLeft:20,
            align:'center'
        }),
        HomeScrollImageLogo: RX.Styles.createImageStyle({
            width:5000,
            height: 72,
            paddingVertical:20,
            marginLeft:-1200,
            marginTop:12
        }),
        client: RX.Styles.createViewStyle({
            justifyContent: 'left',
            alignItems: 'left',
            backgroundColor:'#ffffff',
            padding:5,
            flex:1,
            flexDirection:'col',
            borderBottomWidth:1,
            borderColor:"#cccccc"
        }),
        clientright: RX.Styles.createViewStyle({
            justifyContent: 'right',
            alignItems: 'left',
            backgroundColor:'#ffffff',
            padding:5,
            flex:1,
           
             flexDirection:'col',
            borderBottomWidth:1,
            borderColor:"#cccccc"
        }),

        contractheadinggrid: RX.Styles.createViewStyle({
           marginTop:-245,
           marginLeft:225,
           color:'black'

        }),

        
        payer: RX.Styles.createViewStyle({
            justifyContent: 'right',
            alignItems: 'left',
            backgroundColor:'#ffffff',
            padding:5,
            flex:1,
           marginLeft :4,
             flexDirection:'col',
            borderBottomWidth:1,
            borderColor:"#cccccc"
        }),
        overall: RX.Styles.createViewStyle({
            justifyContent: 'left',
            alignItems: 'left',
            backgroundColor:'#ffffff',
            padding:5,
            flex:1,
            flexDirection:'col',
            borderBottomWidth:1,
            borderColor:"#cccccc"
        }),    
        gridview: RX.Styles.createTextStyle({
            height: 350,
            marginBottom: 20,
            backgroundColor:'white',
            width: 238,
            color:'white',     
              }),
        payergrid: RX.Styles.createTextStyle({
          border:1,
          height: 230,
          marginTop: 14,
          backgroundColor:'white',
          width: 198,
          color:'white',
             borderColor:'black'   
            }),
            
            contractgrid: RX.Styles.createTextStyle({
            border:1,
            height: 230,
            marginTop: 4,
            marginLeft: 201,
            backgroundColor:'white',
            width: 198,
            color:'white',
            borderColor:'black'   
            }),       
            recordgrid: RX.Styles.createTextStyle({
                border:1,
                height: 230,
                marginTop: 4,
                marginLeft: 487,
                backgroundColor:'white',
                width: 198,
                color:'white',
                borderColor:'black'   
                }),   
                equvation: RX.Styles.createTextStyle({
                    width: 50,
                height: 264,
                borderRadius: 9,
                marginTop: 20,
                marginLeft: 0,
                //   borderColor:'black' 
                    
                }),     
                expirygrid: RX.Styles.createTextStyle({
                    border:1,
                    height: 230,
                    marginTop: 3,
                    marginLeft: 745,
                    backgroundColor:'white',
                    width: 198,
                    color:'white',
                    borderColor:'black'   
                    }),

}

export default class ProviderHistory extends RX.Component{
    constructor(props) {
        super(props);
        this.state = {
               
              
            
        };
    }
    
    render() {
        const state = this.state;
        return (
            <RX.ScrollView style={ styles.scroll }>
                <RX.View style={ styles.navbar }>
               
                {/* <img src="./src/img/rapidqubelogo.png" style={styles.logo}>
                                            </img>
                                            <h4 ><font Color="white">RAPIDSETTLE</font></h4> */}
                                             
                <h4 style={styles.H4}><font Color="white">Search Contract</font></h4> 
                                            <select class="form-control form-control-lg" id="lgFormGroupInput" style={styles.dropdown}>
  <option value="volvo">Provider Name</option>
  <option value="saab">Cauvery</option>
  <option value="saab">Apollo</option>
 
</select>
<select class="form-control form-control-lg" id="lgFormGroupInput" style={styles.dropdowndetail}>
  <option value="volvo">Contract ID</option>
  <option value="saab">C#22214</option>
  <option value="saab">K#20113</option>
</select>
                </RX.View>
                <div class="container">
                
                <div class="col-sm-10">
                <input type="email" style={styles.pastehere} class="form-control form-control-lg" id="lgFormGroupInput" placeholder="Paste Here"/>
      </div>
               
                </div>     
                <RX.Button style={ [styles.button1] }
                 >
                    <RX.Text style={ [styles.buttonText] }>
                        { 'Send' }
                    </RX.Text>
                </RX.Button>

 {/* <Grid>

 <div class="jumbotron" >

 <div class="container">
 <RX.View style={styles.payer }>
 <div class="jumbotron" style={ _styles.SCROLL}> 
   <h2  style={styles.PA}>Payer</h2>
    <div class="form-col">
     <div class="form-group col-md-6">
        <nav class="navigation"style={styles.B1} >
            <ul class="mainmenu">
                <li><a href="">ICICI</a></li>
                <li><a href="">BOB</a></li>
                <li><a href="">INDIAN</a>
                
                </li>
                <li><a href="">State BANk</a></li>
            </ul>
        </nav>
     </div>
    </div>    
</div> 


 <div class="jumbotron" style={ _styles.contract}> 
 <h2>Contract ID</h2>
    <div class="form-col">
     <div class="form-group col-md-6">
     <nav class="navigation">
        <ul class="mainmenu">
            <li><a href="">ICC#123</a></li>
            <li><a href="">BOB#201</a></li>
            <li><a href="">IND#123</a>
            
            </li>
            <li><a href="">STATE#121</a></li>
        </ul>
    </nav>
     </div>
    </div>    
</div> 

</RX.View>
</div>

 </div>
 </Grid> */}

    <Grid>

<div class="jumbotron"> 
<div> 
<nav class="navigation">



<div class="grid-container" style={styles.grid}>
<Grid>
<h3>Payer</h3>  
<div class="form-control form-control-lg" id="lgFormGroupInput" style={_styles.payergrid}> <br></br>

<li><a href="" data-toggle="tooltip" title="Provider Name
Name of the Provider" style={{color:"black" }}>ICICI</a></li><br></br>

<li><a href=""  data-toggle="tooltip" title="Patient-Id
Id of the Patient" style={{color:"black" }}>INDUSIND</a></li><br></br>
<li><a href=""  data-toggle="tooltip" title="Policy Start Date
Start date of the Policy" style={{color:"black" }}>SBI</a></li><br></br>

<li><a href=""  data-toggle="tooltip" title="Policy Start Date
Start date of the Policy" style={{color:"black" }}>Axis</a></li><br></br>

<li><a href=""  data-toggle="tooltip" title="Claim Amount
Claim amount of the Patient" style={{color:"black" }}>Canara</a></li>

 <Grid>


<div class="grid-container"><h3 style={_styles.contractheadinggrid}>ContractID</h3>
<Grid>
 
<div class="form-control form-control-lg" id="lgFormGroupInput" style={_styles.contractgrid}> <br></br>

<li><a href="" data-toggle="tooltip" title="Provider Name
Name of the Provider" style={{color:"black" }}>ICICI</a></li><br></br>

<li><a href=""  data-toggle="tooltip" title="Patient-Id
Id of the Patient" style={{color:"black" }}>INDUSIND</a></li><br></br>
<li><a href=""  data-toggle="tooltip" title="Policy Start Date
Start date of the Policy" style={{color:"black" }}>SBI</a></li><br></br>

<li><a href=""  data-toggle="tooltip" title="Policy Start Date
Start date of the Policy" style={{color:"black" }}>Axis</a></li><br></br>

<li><a href=""  data-toggle="tooltip" title="Claim Amount
Claim amount of the Patient" style={{color:"black" }}>Canara</a></li>

</div>
<br></br>

</Grid>
</div>

</Grid>
</div>
<br></br>

</Grid>

</div>



<Grid>

<div class="grid-container"><h3 style={{marginLeft: 513,marginTop: -287}}>Record Date</h3>
<Grid>
 
<div class="form-control form-control-lg" id="lgFormGroupInput" style={_styles.recordgrid}> <br></br>

<li><a href="" data-toggle="tooltip" title="Provider Name
Name of the Provider" style={{color:"black" }}>ICICI</a></li><br></br>

<li><a href=""  data-toggle="tooltip" title="Patient-Id
Id of the Patient" style={{color:"black" }}>INDUSIND</a></li><br></br>
<li><a href=""  data-toggle="tooltip" title="Policy Start Date
Start date of the Policy" style={{color:"black" }}>SBI</a></li><br></br>

<li><a href=""  data-toggle="tooltip" title="Policy Start Date
Start date of the Policy" style={{color:"black" }}>Axis</a></li><br></br>

<li><a href=""  data-toggle="tooltip" title="Claim Amount
Claim amount of the Patient" style={{color:"black" }}>Canara</a></li>

</div>
<br></br>

</Grid>
</div>

</Grid>

<Grid>

<div class="grid-container"><h3 style={{marginLeft: 798,marginTop: -287}}>Expiry Date</h3>
<Grid>
 
<div class="form-control form-control-lg" id="lgFormGroupInput" style={_styles.expirygrid}> <br></br>

<li><a href="" data-toggle="tooltip" title="Provider Name
Name of the Provider" style={{color:"black" }}>ICICI</a></li><br></br>

<li><a href=""  data-toggle="tooltip" title="Patient-Id
Id of the Patient" style={{color:"black" }}>INDUSIND</a></li><br></br>
<li><a href=""  data-toggle="tooltip" title="Policy Start Date
Start date of the Policy" style={{color:"black" }}>SBI</a></li><br></br>

<li><a href=""  data-toggle="tooltip" title="Policy Start Date
Start date of the Policy" style={{color:"black" }}>Axis</a></li><br></br>

<li><a href=""  data-toggle="tooltip" title="Claim Amount
Claim amount of the Patient" style={{color:"black" }}>Canara</a></li>

</div>
<br></br>

</Grid>
</div>

</Grid>






</nav>
</div>

</div>
<div class="jumbotron">
<h3>Contract Clause</h3>
<input type="email" style={{width: 1050,height: 201}}  id="lgFormGroupInput" placeholder=""/>
<RX.Button style={ [styles.rejectbutton] }>
{'Reject'}
</RX.Button>
<RX.Button style={ [styles.approvedbutton] }
onPress={this.props.onNavigateProviderHistory }>
{'Approved'}
</RX.Button>
</div>
</Grid>
           
            </RX.ScrollView>  
                
        );
     
    }
}