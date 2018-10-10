import React from 'react';
import RX from 'reactxp';

import { Navigator } from 'reactxp-navigation';


import RegisterPage from './RegisterPage'

import ProviderDetails from './ProviderDetails'
import Dashboard from './Dashboard'
import ProviderHistory from './ProviderHistory'
import Userdetails from './Userdetails'
import CreatePolicy from './CreatePolicy'
import Patientdetails from './Patientdetails'
import TPA from './TPA'
import AutoApproval from './AutoApproval'
import StatusSettlement from './StatusSettlement'
// import Table from './Table'
import WaitingForTPA from './WaitingForTPA'
<<<<<<< HEAD
import Login from './Login'
import Notification from './Notification'
import CaptivePolicy from './CaptivePolicy'
=======

>>>>>>> 09b397a7f9c0c15c99af0526071bbdeccc582ed6

let NavigationRouteId = {

    RegisterPage: "RegisterPage",
    ProviderDetails: "ProviderDetails",
    Dashboard: "Dashboard",
    ProviderHistory: "ProviderHistory",
    Userdetails: "Userdetails",
    CreatePolicy: "CreatePolicy",
    Patientdetails: "Patientdetails",
    TPA: "TPA",
    AutoApproval: "AutoApproval",
    StatusSettlement: "StatusSettlement",
<<<<<<< HEAD
     WaitingForTPA: "WaitingForTPA",
    Login:"Login",
    Notification:"Notification",
    CaptivePolicy:"CaptivePolicy"
=======
    // Table: "Table",
    WaitingForTPA: "WaitingForTPA"
>>>>>>> 09b397a7f9c0c15c99af0526071bbdeccc582ed6
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
        this._onPressRegisterPage = this._onPressRegisterPage.bind(this);
=======
        this._onPressFifth = this._onPressFifth.bind(this);
>>>>>>> 09b397a7f9c0c15c99af0526071bbdeccc582ed6

        this._onPressProviderDetails = this._onPressProviderDetails.bind(this);
        this._onPressDashboard = this._onPressDashboard.bind(this);
        this._onPressProviderHistory = this._onPressProviderHistory.bind(this);
        this._onPressUserdetails = this._onPressUserdetails.bind(this);
        this._onPressAutoApprovalstatus = this._onPressAutoApprovalstatus.bind(this);
<<<<<<< HEAD
        this._onPressNotify = this._onPressNotify.bind(this);
=======
>>>>>>> 09b397a7f9c0c15c99af0526071bbdeccc582ed6
        this._onPressPatientdetails = this._onPressPatientdetails.bind(this);
        this._onPressTPA = this._onPressTPA.bind(this);
        this._onPressAutoApproval = this._onPressAutoApproval.bind(this);
        this._onPressStatusSettlement = this._onPressStatusSettlement.bind(this);
        this._onPressCreatePolicyRBD = this._onPressCreatePolicyRBD.bind(this);
        // this._onPressTable = this._onPressTable.bind(this);
        this._onPressWaitingForTPA = this._onPressWaitingForTPA.bind(this);
        this._onPressCreatePolicyWFTPA = this._onPressCreatePolicyWFTPA.bind(this);
<<<<<<< HEAD
        this._onPressCreatePolicylogout =this._onPressCreatePolicylogout.bind(this);
        this._onPressLoginHome = this._onPressLoginHome.bind(this);
        this._onPressLogin = this._onPressLogin.bind(this);
        this._onPressNotification= this._onPressNotification.bind(this);
        this._onPressCaptivePolicy= this._onPressCaptivePolicy.bind(this);
        this._onPresspolicyDetails= this._onPresspolicyDetails.bind(this);
=======

>>>>>>> 09b397a7f9c0c15c99af0526071bbdeccc582ed6



    }

    componentDidMount() {
        this._navigator.immediatelyResetRouteStack([{
            routeId: NavigationRouteId.RegisterPage,
            sceneConfigType: "Fade"
        }]);
    }

    render() {
        return (
            <Navigator
                ref={this._onNavigatorRef}
                renderScene={this._renderScene}
                cardStyle={styles.navCardStyle}
            />
        );
    };
    _onNavigatorRef(navigator) {
        console.log(navigator, "navigator");

        this._navigator = navigator;
    }


    _renderScene(navigatorRoute) {
        console.log(navigatorRoute, "navigatorRoute");
        var user = { name: "test" }
        switch (navigatorRoute.routeId) {

            case NavigationRouteId.RegisterPage:
<<<<<<< HEAD
                return <RegisterPage onNavigateRegisterPage={this._onPressRegisterPage} navigatorRoute={navigatorRoute} />;


            case NavigationRouteId.ProviderDetails:
                return <ProviderDetails onNavigateProviderDetails={this._onPressProviderDetails} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.ProviderHistory:
                return <ProviderHistory onNavigateProviderHistory={this._onPressProviderHistory} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.Dashboard1:
                return <Dashboard onNavigateDashboard={this._onPressDashboard} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.Userdetails:
                return <Userdetails onNavigateUserdetails={this._onPressUserdetails} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.CreatePolicy:
                return <CreatePolicy onNavigateCreatePolicyCaptivePolicy={this._onPresspolicyDetails} onNavigateNotify={this._onPressNotify} onNavigateAutoApprovalstatus={this._onPressAutoApprovalstatus} onNavigateCreatePolicyWFTPA={this._onPressCreatePolicyWFTPA} onNavigateCreatePolicyRBD={this._onPressCreatePolicyRBD} onNavigateCreatePolicylogout={this._onPressCreatePolicylogout} navigatorRoute={navigatorRoute} />
               
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

                case NavigationRouteId.Login:
                return <Login onNavigateLogin={this._onPressLogin} onNavigateLoginHome={this._onPressLoginHome} navigatorRoute={navigatorRoute} />

                case NavigationRouteId.Notification:
                return <Notification onNavigateNotification={this._onPressNotification} navigatorRoute={navigatorRoute} />

                case NavigationRouteId.CaptivePolicy:
                return <CaptivePolicy onNavigateCaptivePolicy={this._onPressCaptivePolicy} navigatorRoute={navigatorRoute} />
=======
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

            // case NavigationRouteId.Table:
            //     return <Table onNavigateTable={this._onPressTable} navigatorRoute={navigatorRoute} />


            case NavigationRouteId.WaitingForTPA:
                return <WaitingForTPA onNavigateWaitingForTPA={this._onPressWaitingForTPA} navigatorRoute={navigatorRoute} />


>>>>>>> 09b397a7f9c0c15c99af0526071bbdeccc582ed6


        }

        return null;
    }

<<<<<<< HEAD
    
    _onPressLogin(res) {
        // this._navigator.pop();
        console.log("app",res)
        this._navigator.push({
            routeId: NavigationRouteId.CreatePolicy,
            // sceneConfigType: "Fade",
            res:res,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressLoginHome() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.RegisterPage,
            // sceneConfigType: "Fade",
=======
    // _onPressTable() {
    //     // this._navigator.pop();
    //     this._navigator.push({
    //         routeId: NavigationRouteId.ProviderDetails,
    //         // sceneConfigType: "Fade",
    //         customSceneConfig: {
    //             hideShadow: true
    //         }
    //     });
    // }
    _onPressWaitingForTPA() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.CreatePolicy,
            // sceneConfigType: "Fade",
>>>>>>> 09b397a7f9c0c15c99af0526071bbdeccc582ed6
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
<<<<<<< HEAD
    _onPressWaitingForTPA() {
=======
    _onPressFifth() {
>>>>>>> 09b397a7f9c0c15c99af0526071bbdeccc582ed6
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.CreatePolicy,
            // sceneConfigType: "Fade",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressRegisterPage() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.Login,
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
    

    _onPressDashboard(token) {
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

    _onPressUserdetails(resJson1) {
        console.log("res", resJson1)
        this._navigator.push({
            routeId: NavigationRouteId.UserHistory,
            // sceneConfigType: "Fade",
            resJson1: resJson1,
<<<<<<< HEAD
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

    _onPressNotify(res) {
        console.log("res", res)
        this._navigator.push({
            routeId: NavigationRouteId.Notification,
            // sceneConfigType: "Fade",
            res: res,
=======
>>>>>>> 09b397a7f9c0c15c99af0526071bbdeccc582ed6
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

<<<<<<< HEAD
    _onPresspolicyDetails(bulkdata) {
        console.log("bulkdata", bulkdata)
        this._navigator.push({
            routeId: NavigationRouteId.CaptivePolicy,
            // sceneConfigType: "Fade",
=======
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
>>>>>>> 09b397a7f9c0c15c99af0526071bbdeccc582ed6
            bulkdata: bulkdata,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

<<<<<<< HEAD
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
    _onPressCreatePolicylogout(res) {
        console.log("res", res)
        this._navigator.push({
            routeId: NavigationRouteId.Login,
            // sceneConfigType: "Fade",
            res: res,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
=======
>>>>>>> 09b397a7f9c0c15c99af0526071bbdeccc582ed6
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

    _onPressTPA(token) {
        console.log("token", token)
        this._navigator.push({
            routeId: NavigationRouteId.Dashboard1,
            token: token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressAutoApproval(token) {
        console.log("token", token)
        this._navigator.push({
            routeId: NavigationRouteId.CreatePolicy,
            token: token,
<<<<<<< HEAD
=======
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressStatusSettlement(token) {
        console.log("token", token)
        this._navigator.push({
            routeId: NavigationRouteId.CreatePolicy,
            token: token,
>>>>>>> 09b397a7f9c0c15c99af0526071bbdeccc582ed6
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressNotification(res) {
        console.log("res", res)
        this._navigator.push({
            routeId: NavigationRouteId.CreatePolicy,
            res: res,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressCaptivePolicy(res) {
        console.log("res", res)
        this._navigator.push({
            routeId: NavigationRouteId.CreatePolicy,
            res: res,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressStatusSettlement(token) {
        console.log("token", token)
        this._navigator.push({
            routeId: NavigationRouteId.CreatePolicy,
            token: token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
};