
import React from 'react';
import RX from 'reactxp';

import { Navigator } from 'reactxp-navigation';


import Patientdetails from './Patientdetails'
import Userdetails from './Userdetails'
let NavigationRouteId ={
    Patientdetails: "Patientdetails",
    Userdetails: "Userdetails",
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



        }

        return null;
    }

    __onPressCreatepolicy() {
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
