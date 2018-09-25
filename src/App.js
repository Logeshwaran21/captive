
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

import Userdet from './Userdet'
import All from './All'
import History from './History'
import Table from './Table'
import Statussettlement from './Statussettlement'



let NavigationRouteId = {
    Patientdetails: "Patientdetails",
    Userdetails: "Userdetails",
    CreatePolicy: "CreatePolicy",
    Dashboard: "Dashboard",
    ProviderDetails: "ProviderDetails",
    ProviderHistory: "ProviderHistory",
    Registerpage: "Registerpage",
    TPA: "TPA",
    Userdet: "Userdet",
    All: "All",
    History: "History",
    Table: "Table",
    Statussettlement: "Statussettlement"
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

        this._onPressPatientdetails = this._onPressPatientdetails.bind(this);
        this._onPressUserdetails = this._onPressUserdetails.bind(this);
        this._onPressCreatePolicy = this._onPressCreatePolicy.bind(this);
        this._onPressDashboard = this._onPressDashboard.bind(this);
        this._onPressProviderDetails = this._onPressProviderDetails.bind(this);
        this._onPressProviderHistory = this._onPressProviderHistory.bind(this);
        this._onPressRegisterpage = this._onPressRegisterpage.bind(this);
        this._onPressTPA = this._onPressTPA.bind(this);
        this._onPressUserdet = this._onPressUserdet.bind(this);
        this._onPressAll = this._onPressAll.bind(this);
        this._onPressHistory = this._onPressHistory.bind(this);
        this._onPressTable = this._onPressTable.bind(this);
        this._onPressStatussettlement = this._onPressStatussettlement.bind(this);




    }

    componentDidMount() {
        this._navigator.immediatelyResetRouteStack([{
            routeId: NavigationRouteId.Statussettlement,
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
                return <Patientdetails onNavigatePatientdetails={this._onPressPatientdetails} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.Userdetails:
                return <Userdetails onNavigateUserdetails={this._onPressUserdetails} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.CreatePolicy:
                return <CreatePolicy onNavigateCreatePolicy={this._onPressCreatePolicy} navigatorRoute={navigatorRoute} />


            case NavigationRouteId.Dashboard:
                return <Dashboard Dashboard={this._onPressDashboard} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.ProviderDetails:
                return <ProviderDetails onNavigateProviderDetails={this._onPressProviderDetails} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.ProviderHistory:
                return <ProviderHistory ProviderHistory={this._onPressProviderHistory} navigatorRoute={navigatorRoute} />
            case NavigationRouteId.Registerpage:
                return <Registerpage onNavigateRegisterpage={this._onPressRegisterpage} navigatorRoute={navigatorRoute} />
            case NavigationRouteId.TPA:
                return <TPA onNavigateTPA={this._onPressTPA} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.Userdet:
                return <Userdet onNavigateUserdet={this._onPressUserdet} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.All:
                return <All onNavigateAll={this._onPressAll} />

            case NavigationRouteId.History:
                return <History onNavigateHistory={this._onPressHistory} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.Table:
                return <Table onNavigateTable={this._onPressTable} navigatorRoute={navigatorRoute} />

            case NavigationRouteId.Statussettlement:
                return <Statussettlement onNavigateStatussettlement={this._onPressStatussettlement} navigatorRoute={navigatorRoute} />


        }

        return null;
    }
    // _onPressStatussettlement(res) {
    //     // this._navigator.pop();
    //     console.log("Appres:", res)
    //     this._navigator.push({
    //         routeId: NavigationRouteId.Table,

    //         // sceneConfigType: "FloatFromRight",
    //         res: res,
    //         customSceneConfig: {
    //             hideShadow: true
    //         },


    //     });
    // }
    _onPressStatussettlement(bulkdata) {
        // this._navigator.pop();
        console.log("Appbulkdata:", bulkdata)
        this._navigator.push({
            routeId: NavigationRouteId.Table,

            // sceneConfigType: "FloatFromRight",
            bulkdata: bulkdata,
            customSceneConfig: {
                hideShadow: true
            },


        });
    }
    _onPressTable(result) {
        // this._navigator.pop();
        console.log("result:", result)
        this._navigator.push({
            routeId: NavigationRouteId.History,
            result: result
        });
    }
    _onPressHistory(result) {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.All,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressAll() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressUserdet() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressTPA() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressTPA() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressRegisterpage() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressProviderHistory() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    _onPressProviderDetails() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressDashboard() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressCreatePolicy() {
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.ProviderDetails,
            sceneConfigType: "FloatFromRight",
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
    _onPressUserdetails(resJson1) {
        console.log("responseMessage", resJson1)
        // this._navigator.pop();
        this._navigator.push({
            routeId: NavigationRouteId.Userdetails,

        });
    }


    _onPressPatientdetails() {
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
