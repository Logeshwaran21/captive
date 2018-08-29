
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

let NavigationRouteId = {
    
    RegisterPage:"RegisterPage",
    ProviderDetails:"ProviderDetails",
    Dashboard:"Dashboard",
    ProviderHistory:"ProviderHistory",
    Userdetails:"Userdetails",
    CreatePolicy:"CreatePolicy",
    Patientdetails:"Patientdetails",
    TPA:"TPA"
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
        this._onPressFifth = this._onPressFifth.bind(this);
        
        this._onPressProviderDetails = this._onPressProviderDetails.bind(this);
        this._onPressDashboard = this._onPressDashboard.bind(this);
        this._onPressProviderHistory = this._onPressProviderHistory.bind(this);
        this._onPressUserdetails = this._onPressUserdetails.bind(this);
        this._onPressCreatePolicy = this._onPressCreatePolicy.bind(this);
        this._onPressPatientdetails = this._onPressPatientdetails.bind(this);
        this._onPressTPA = this._onPressTPA.bind(this);
    }

    componentDidMount() {
        this._navigator.immediatelyResetRouteStack([{
            routeId: NavigationRouteId.Userdetails,
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
            
            case NavigationRouteId.RegisterPage:
                return <RegisterPage onNavigateFifth={ this._onPressFifth }/>;

              
                case NavigationRouteId.ProviderDetails:
                return <ProviderDetails onNavigateProviderDetails={ this._onPressProviderDetails }/> 

                case NavigationRouteId.ProviderHistory:
                return <ProviderHistory onNavigateProviderHistory={ this._onPressProviderHistory }/>

                case NavigationRouteId.Dashboard1:
                return <Dashboard onNavigateDashboard={ this._onPressDashboard }/> 

                case NavigationRouteId.Userdetails:
                return <Userdetails onNavigateUserdetails={ this._onPressUserdetails }/> 

                case NavigationRouteId.CreatePolicy:
                return <CreatePolicy onNavigateCreatePolicy={ this._onPressCreatePolicy }/> 

                case NavigationRouteId.Patientdetails:
                return <Patientdetails onNavigatePatientdetails={ this._onPressPatientdetails }/>

                case NavigationRouteId.TPA:
                return <TPA onNavigateTPA={ this._onPressTPA }/>

        }

        return null;
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
        console.log("token",token)
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
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

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

    _onPressUserdetails(resJson1) {
       console.log("res",resJson1)
        this._navigator.push({
            routeId: NavigationRouteId.UserHistory,
            // sceneConfigType: "Fade",
            resJson1:resJson1,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressCreatePolicy(token) {
        console.log("token",token)
        this._navigator.push({
            routeId: NavigationRouteId.Dashboard,
            // sceneConfigType: "Fade",
            token:token,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressPatientdetails(token) {
        console.log("token",token)
        this._navigator.push({
            routeId: NavigationRouteId.Dashboard1,
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
};
