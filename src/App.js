import React from 'react';
import RX from 'reactxp';

import { Navigator } from 'reactxp-navigation';


import RegisterPage from './RegisterPage'

import ProviderDetails from './ProviderDetails'
<<<<<<< HEAD
=======
import Dashboard from './Dashboard'
import ProviderHistory from './ProviderHistory'
import Userdetails from './Userdetails'
import CreatePolicy from './CreatePolicy'
<<<<<<< HEAD
import Patientdetails from './Patientdetails'
import TPA from './TPA'
import History from './History'
import StatusSettlement from './StatusSettlement'

let NavigationRouteId = {
    
    RegisterPage:"RegisterPage",
    ProviderDetails:"ProviderDetails",
    Dashboard:"Dashboard",
    ProviderHistory:"ProviderHistory",
    Userdetails:"Userdetails",
    CreatePolicy:"CreatePolicy",
    Patientdetails:"Patientdetails",
    TPA:"TPA",
    History:"History",
    StatusSettlement:"StatusSettlement"
=======
>>>>>>> d5c372e28c2caf03713c99495e1952970049bacc
import Dashboard from './Dashboard'
import ProviderHistory from './ProviderHistory'
import Userdetails from './Userdetails'
import CreatePolicy from './CreatePolicy'
import Patientdetails from './Patientdetails'
import TPA from './TPA'
import AutoApproval from './AutoApproval'
import StatusSettlement from './StatusSettlement'

import WaitingForTPA from './WaitingForTPA'


let NavigationRouteId = {

    RegisterPage: "RegisterPage",
    ProviderDetails: "ProviderDetails",
    Dashboard: "Dashboard",
    ProviderHistory: "ProviderHistory",
    Userdetails: "Userdetails",
    CreatePolicy: "CreatePolicy",
    Patientdetails: "Patientdetails",
    TPA: "TPA",
<<<<<<< HEAD
    AutoApproval: "AutoApproval",
    StatusSettlement: "StatusSettlement",

    WaitingForTPA: "WaitingForTPA"
=======
    Userdet: "Userdet",
    All: "All",
    History: "History",
    Table: "Table",
    Statussettlement: "Statussettlement"
>>>>>>> d173e8cd17751ae74db1e4e625d2301d07436c63
>>>>>>> d5c372e28c2caf03713c99495e1952970049bacc
};

const styles = {
    // Standard navigator style should be an object. So we have to disable caching here.
    navCardStyle: RX.Styles.createViewStyle({
        backgroundColor: '#f5fcff'
    }, false)
};

export default class App extends RX.Component {
    _navigator;

    constructor(props) {
        super(props);
        this._onNavigatorRef = this._onNavigatorRef.bind(this);
        this._renderScene = this._renderScene.bind(this);
<<<<<<< HEAD
        this._onPressFifth = this._onPressFifth.bind(this);
=======
<<<<<<< HEAD
        this._onPressFifth = this._onPressFifth.bind(this);
        
        this._onPressProviderDetails = this._onPressProviderDetails.bind(this);
        this._onPressDashboard = this._onPressDashboard.bind(this);
        this._onPressProviderHistory = this._onPressProviderHistory.bind(this);
        this._onPressUserdetails = this._onPressUserdetails.bind(this);
        this._onPressCreatePolicy = this._onPressCreatePolicy.bind(this);
        this._onPressPatientdetails = this._onPressPatientdetails.bind(this);
        this._onPressTPA = this._onPressTPA.bind(this);
        this._onPressHistory = this._onPressHistory.bind(this);
        this._onPressStatusSettlement = this._onPressStatusSettlement.bind(this);
        this._onPressCreatePolicyRBD = this._onPressCreatePolicyRBD.bind(this);
       
=======
>>>>>>> d5c372e28c2caf03713c99495e1952970049bacc

        this._onPressProviderDetails = this._onPressProviderDetails.bind(this);
        this._onPressDashboard = this._onPressDashboard.bind(this);
        this._onPressProviderHistory = this._onPressProviderHistory.bind(this);
        this._onPressUserdetails = this._onPressUserdetails.bind(this);
        this._onPressAutoApprovalstatus = this._onPressAutoApprovalstatus.bind(this);
        this._onPressPatientdetails = this._onPressPatientdetails.bind(this);
        this._onPressTPA = this._onPressTPA.bind(this);
        this._onPressAutoApproval = this._onPressAutoApproval.bind(this);
        this._onPressStatusSettlement = this._onPressStatusSettlement.bind(this);
        this._onPressCreatePolicyRBD = this._onPressCreatePolicyRBD.bind(this);

        this._onPressWaitingForTPA = this._onPressWaitingForTPA.bind(this);
        this._onPressCreatePolicyWFTPA = this._onPressCreatePolicyWFTPA.bind(this);




>>>>>>> d173e8cd17751ae74db1e4e625d2301d07436c63
    }

    componentDidMount() {
        this._navigator.immediatelyResetRouteStack([{
<<<<<<< HEAD
            routeId: NavigationRouteId.CreatePolicy,
=======
<<<<<<< HEAD
            routeId: NavigationRouteId.CreatePolicy,
=======
            routeId: NavigationRouteId.Statussettlement,
>>>>>>> d173e8cd17751ae74db1e4e625d2301d07436c63
>>>>>>> d5c372e28c2caf03713c99495e1952970049bacc
            sceneConfigType: "Fade"
        }]);
    }

    render() {
        return (
            <Navigator
                ref={ this._onNavigatorRef }
                renderScene={ this._renderScene }
                cardStyle={ styles.navCardStyle }
            />
        );
    };
    _onNavigatorRef(navigator) {
        console.log(navigator,"navigator");

        this._navigator = navigator;
    }

  
    _renderScene(navigatorRoute) {
        console.log(navigatorRoute,"navigatorRoute");
        var user ={name:"test"}
        switch (navigatorRoute.routeId) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
            
            case NavigationRouteId.RegisterPage:
                return <RegisterPage onNavigateFifth={ this._onPressFifth } navigatorRoute={navigatorRoute}/>;

              
                case NavigationRouteId.ProviderDetails:
                return <ProviderDetails onNavigateProviderDetails={ this._onPressProviderDetails } navigatorRoute={navigatorRoute}/> 

                case NavigationRouteId.ProviderHistory:
                return <ProviderHistory onNavigateProviderHistory={ this._onPressProviderHistory } navigatorRoute={navigatorRoute}/>

                case NavigationRouteId.Dashboard1:
                return <Dashboard onNavigateDashboard={ this._onPressDashboard } navigatorRoute={navigatorRoute}/> 

                case NavigationRouteId.Userdetails:
                return <Userdetails onNavigateUserdetails={ this._onPressUserdetails } navigatorRoute={navigatorRoute}/> 

                case NavigationRouteId.CreatePolicy:
                return <CreatePolicy onNavigateCreatePolicy={ this._onPressCreatePolicy} onNavigateCreatePolicyRBD={ this._onPressCreatePolicyRBD}  navigatorRoute={navigatorRoute}/> 

                case NavigationRouteId.Patientdetails:
                return <Patientdetails onNavigatePatientdetails={ this._onPressPatientdetails } navigatorRoute={navigatorRoute}/>
=======
            case NavigationRouteId.Patientdetails:
                return <Patientdetails onNavigatePatientdetails={this._onPressPatientdetails} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.Userdetails:
                return <Userdetails onNavigateUserdetails={this._onPressUserdetails} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.CreatePolicy:
                return <CreatePolicy onNavigateCreatePolicy={this._onPressCreatePolicy} navigatorRoute={navigatorRoute} />
>>>>>>> d5c372e28c2caf03713c99495e1952970049bacc

            case NavigationRouteId.RegisterPage:
                return <RegisterPage onNavigateFifth={this._onPressFifth} navigatorRoute={navigatorRoute} />;


            case NavigationRouteId.ProviderDetails:
                return <ProviderDetails onNavigateProviderDetails={this._onPressProviderDetails} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.ProviderHistory:
                return <ProviderHistory onNavigateProviderHistory={this._onPressProviderHistory} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.Dashboard1:
                return <Dashboard onNavigateDashboard={this._onPressDashboard} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.Userdetails:
                return <Userdetails onNavigateUserdetails={this._onPressUserdetails} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.CreatePolicy:
                return <CreatePolicy onNavigateAutoApprovalstatus={this._onPressAutoApprovalstatus} onNavigateCreatePolicyRBD={this._onPressCreatePolicyRBD} onNavigateCreatePolicyWFTPA={this._onPressCreatePolicyWFTPA} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.Patientdetails:
                return <Patientdetails onNavigatePatientdetails={this._onPressPatientdetails} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.TPA:
                return <TPA onNavigateTPA={this._onPressTPA} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.AutoApproval:
                return <AutoApproval onNavigateAutoApproval={this._onPressAutoApproval} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.StatusSettlement:
                return <StatusSettlement onNavigateStatusSettlement={this._onPressStatusSettlement} navigatorRoute={navigatorRoute} />




            case NavigationRouteId.WaitingForTPA:
                return <WaitingForTPA onNavigateWaitingForTPA={this._onPressWaitingForTPA} navigatorRoute={navigatorRoute} />


<<<<<<< HEAD
=======
            case NavigationRouteId.Statussettlement:
                return <Statussettlement onNavigateStatussettlement={this._onPressStatussettlement} navigatorRoute={navigatorRoute} />
>>>>>>> d173e8cd17751ae74db1e4e625d2301d07436c63

                case NavigationRouteId.TPA:
                return <TPA onNavigateTPA={ this._onPressTPA } navigatorRoute={navigatorRoute}/>

                case NavigationRouteId.History:
                return <History onNavigateHistory={ this._onPressHistory } navigatorRoute={navigatorRoute}/>
>>>>>>> d5c372e28c2caf03713c99495e1952970049bacc

                case NavigationRouteId.StatusSettlement:
                return <StatusSettlement onNavigateStatusSettlement={ this._onPressStatusSettlement } navigatorRoute={navigatorRoute}/>

        }

        return null;
    }


    _onPressWaitingForTPA() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            // sceneConfigType: "Fade",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressFifth() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            // sceneConfigType: "Fade",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressProviderDetails(token) {
        console.log("token", token)
        this._navigator.push({
            routeId: NavigationRouteId.ProviderHistory,
            // sceneConfigType: "Fade",
            token: token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }



    _onPressProviderHistory(token) {
        console.log("token", token)
        this._navigator.push({
            routeId: NavigationRouteId.Dashboard1,
            // sceneConfigType: "Fade",
            token: token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

<<<<<<< HEAD
    _onPressDashboard(token) {
        console.log("token", token)
=======
<<<<<<< HEAD
    
    _onPressFifth() {
=======
    _onPressTPA() {
        // this._navigator.pop();
>>>>>>> d5c372e28c2caf03713c99495e1952970049bacc
        this._navigator.push({
            routeId: NavigationRouteId.Dashboard1,
            // sceneConfigType: "Fade",
            token: token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressUserdetails(resJson1) {
        console.log("res", resJson1)
        this._navigator.push({
            routeId: NavigationRouteId.UserHistory,
            // sceneConfigType: "Fade",
            resJson1: resJson1,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressAutoApprovalstatus(res) {
        console.log("res", res)
        this._navigator.push({
            routeId: NavigationRouteId.AutoApproval,
            // sceneConfigType: "Fade",
            res: res,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressCreatePolicyRBD(bulkdata) {
        console.log("APP bulkdata", bulkdata)
        this._navigator.push({
            routeId: NavigationRouteId.StatusSettlement,
            // sceneConfigType: "Fade",
            bulkdata: bulkdata,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressCreatePolicyWFTPA(res) {
        console.log("res", res)
        this._navigator.push({
            routeId: NavigationRouteId.WaitingForTPA,
            // sceneConfigType: "Fade",
            res: res,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }


















    // _onPressAutoApproval(res) {
    //     console.log("res",res)
    //     this._navigator.push({
    //         routeId: NavigationRouteId.StatusSettlement,
    //         // sceneConfigType: "Fade",
    //         res:res,
    //         customSceneConfig: {
    //             hideShadow: true
    //         }
    //     });
    // }

    _onPressPatientdetails(token) {
        console.log("token", token)
        this._navigator.push({
            routeId: NavigationRouteId.Userdetails,
            token: token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
<<<<<<< HEAD

    _onPressTPA(token) {
        console.log("token", token)
        this._navigator.push({
            routeId: NavigationRouteId.Dashboard1,
            token: token,
=======
    _onPressCreatePolicy() {
>>>>>>> d173e8cd17751ae74db1e4e625d2301d07436c63
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            // sceneConfigType: "Fade",
>>>>>>> d5c372e28c2caf03713c99495e1952970049bacc
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
<<<<<<< HEAD

    _onPressAutoApproval(token) {
        console.log("token", token)
        this._navigator.push({
            routeId: NavigationRouteId.CreatePolicy,
            token: token,
=======
<<<<<<< HEAD
   
    _onPressProviderDetails(token) {
        console.log("token",token)
=======
    _onPressUserdetails(resJson1) {
        console.log("responseMessage", resJson1)
        // this._navigator.pop();
>>>>>>> d173e8cd17751ae74db1e4e625d2301d07436c63
        this._navigator.push({
            routeId: NavigationRouteId.ProviderHistory,
            // sceneConfigType: "Fade",
            token:token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

   

    _onPressProviderHistory(token) {
        console.log("token",token)
        this._navigator.push({
            routeId: NavigationRouteId.Dashboard1,
            // sceneConfigType: "Fade",
            token:token,
>>>>>>> d5c372e28c2caf03713c99495e1952970049bacc
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

<<<<<<< HEAD
    _onPressStatusSettlement(token) {
        console.log("token", token)
        this._navigator.push({
            routeId: NavigationRouteId.CreatePolicy,
            token: token,
=======
    _onPressDashboard(token) {
        console.log("token",token)
        this._navigator.push({
            routeId: NavigationRouteId.Dashboard1,
            // sceneConfigType: "Fade",
            token:token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

<<<<<<< HEAD
    _onPressUserdetails(resJson1) {
       console.log("res",resJson1)
=======
    _onPressPatientdetails() {
        // this._navigator.pop();
>>>>>>> d173e8cd17751ae74db1e4e625d2301d07436c63
        this._navigator.push({
            routeId: NavigationRouteId.UserHistory,
            // sceneConfigType: "Fade",
            resJson1:resJson1,
>>>>>>> d5c372e28c2caf03713c99495e1952970049bacc
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
<<<<<<< HEAD
=======

    _onPressCreatePolicy(res) {
        console.log("res",res)
        this._navigator.push({
            routeId: NavigationRouteId.History,
            // sceneConfigType: "Fade",
            res:res,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressCreatePolicyRBD(bulkdata) {
        console.log("APP bulkdata",bulkdata)
        this._navigator.push({
            routeId: NavigationRouteId.StatusSettlement,
            // sceneConfigType: "Fade",
            bulkdata:bulkdata,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    // _onPressAutoApproval(res) {
    //     console.log("res",res)
    //     this._navigator.push({
    //         routeId: NavigationRouteId.StatusSettlement,
    //         // sceneConfigType: "Fade",
    //         res:res,
    //         customSceneConfig: {
    //             hideShadow: true
    //         }
    //     });
    // }

    _onPressPatientdetails(token) {
        console.log("token",token)
        this._navigator.push({
            routeId: NavigationRouteId.Userdetails,
            token:token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressTPA(token) {
        console.log("token",token)
        this._navigator.push({
            routeId: NavigationRouteId.Dashboard1,
            token:token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressHistory(token) {
        console.log("token",token)
        this._navigator.push({
            routeId: NavigationRouteId.CreatePolicy,
            token:token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressStatusSettlement(token) {
        console.log("token",token)
        this._navigator.push({
            routeId: NavigationRouteId.CreatePolicy,
            token:token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
>>>>>>> d5c372e28c2caf03713c99495e1952970049bacc
};
