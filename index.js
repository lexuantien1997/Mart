import React, { Component } from 'react';
import {
    AppRegistry 
} from 'react-native';


import { MainNavigator } from "./src/route_config/RouteTabNavHome";

export default class MyMart extends Component {
    render(){    
        return(
           <MainNavigator />
        );
    }
}

AppRegistry.registerComponent('MyApp', () => MyMart);
