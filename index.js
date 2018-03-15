import React, { Component } from 'react';
import {
    View,
    AppRegistry ,
    StatusBar
} from 'react-native';


import { MainNavigator } from "./src/route_config/RouteTabNavHome";
export default class MyMart extends Component {
    render(){    
        return(
            <View style = {{ flex:1 }}>
                    <StatusBar 
                        backgroundColor = { "transparent" }
                        barStyle = "light-content"
                        translucent
                    />               
                <MainNavigator />
            </View>
       
        );
    }
}

AppRegistry.registerComponent('MyApp', () => MyMart);
