
import React from 'react';
import RX from 'reactxp';

import { Navigator } from 'reactxp-navigation';


import Patientdetails from './Patientdetails'
import Userdetails from './Userdetails'
import CreatePolicy from './CreatePolicy'
import Dashboard from './Dashboard'
import ProviderHistory from './ProviderHistory'
import Registerpage from './Registerpage'
import ProviderDetails from './ProviderDetails'
import TPA from './TPA'
import Historydetails from './Historydetails'
import Userdet from './Userdet'
import All from './All'
import History from './History'



let NavigationRouteId = {
    Patientdetails: "Patientdetails",
    Userdetails: "Userdetails",
    CreatePolicy: "CreatePolicy",
    Dashboard: "Dashboard",
    ProviderDetails: "ProviderDetails",
    ProviderHistory: "ProviderHistory",
    Registerpage: "Registerpage",
    TPA: "TPA",
    Historydetails: "Historydetails",
    Userdet: "Userdet",
    All: "All",
    History: "History"
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

        this._onPressPatientdetails = this.__onPressPatientdetails.bind(this);
        this._onPressUserdetails = this.__onPressUserdetails.bind(this);
        this._onPressCreatePolicy = this.__onPressCreatePolicy.bind(this);
        this._onPressDashboard = this.__onPressDashboard.bind(this);
        this._onPressProviderDetails = this.__onPressProviderDetails.bind(this);
        this._onPressProviderHistory = this.__onPressProviderHistory.bind(this);
        this._onPressRegisterpage = this.__onPressRegisterpage.bind(this);
        this._onPressTPA = this.__onPressTPA.bind(this);
        this._onPressHistorydetails = this.__onPressHistorydetails.bind(this);
        this._onPressUserdet = this.__onPressUserdet.bind(this);
        this._onPressAll = this.__onPressAll.bind(this);
        this._onPressHistory = this.__onPressHistory.bind(this);



    }

    componentDidMount() {
        this._navigator.immediatelyResetRouteStack([{
            routeId: NavigationRouteId.History,
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
            case NavigationRouteId.Patientdetails:
                return <Patientdetails onNavigatePatientdetails={this.__onPressPatientdetails} />

            case NavigationRouteId.Userdetails:
                return <Userdetails Userdetails={this.__onPressUserdetails} />

            case NavigationRouteId.CreatePolicy:
                return <CreatePolicy CreatePolicy={this.__onPressCreatePolicy} />


            case NavigationRouteId.Dashboard:
                return <Dashboard Dashboard={this.__onPressDashboard} />

            case NavigationRouteId.ProviderDetails:
                return <ProviderDetails ProviderDetails={this.__onPressProviderDetails} />

            case NavigationRouteId.ProviderHistory:
                return <ProviderHistory ProviderHistory={this.__onPressProviderHistory} />
            case NavigationRouteId.Registerpage:
                return <Registerpage Registerpage={this.__onPressRegisterpage} />
            case NavigationRouteId.TPA:
                return <TPA TPA={this.__onPressTPA} />

            case NavigationRouteId.Historydetails:
                return <Historydetails Historydetails={this.__onPressHistorydetails} />

            case NavigationRouteId.Userdet:
                return <Userdet Userdet={this.__onPressUserdet} />

            case NavigationRouteId.All:
                return <All All={this.__onPressAll} />

            case NavigationRouteId.History:
                return <History History={this.__onPressHistory} />


        }

        return null;
    }
    __onPressHistory() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    __onPressAll() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    __onPressUserdet() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    __onPressHistorydetails() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    __onPressTPA() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    __onPressTPA() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    __onPressRegisterpage() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    __onPressProviderHistory() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    __onPressProviderDetails() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    __onPressDashboard() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    __onPressCreatePolicy() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    __onPressUserdetails(resJson1) {
        console.log("responseMessage", resJson1)
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.Userdetails,

        });
    }


    __onPressPatientdetails() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

};
