import React, { Component } from 'react';
import {
    View,
    AppRegistry ,
    StatusBar
} from 'react-native';


// import { MainNavigator } from "./src/route_config/RouteTabNavHome";
import { HomeStack } from "./src/route_config/RouteStackNavUser"

export default class MyMart extends Component {
    render(){    
        return(
            <View style = {{ flex:1 }}>              
                 <HomeStack />          
            </View>
       
        );
    }
}

AppRegistry.registerComponent('MyApp', () => MyMart);
