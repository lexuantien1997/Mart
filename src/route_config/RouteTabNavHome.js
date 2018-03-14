
import React, { Component } from 'react';
import { TabNavigator, TabBarBottom } from "react-navigation";

// import vector icons

import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// import data 
import HomeScreen from "../pages/HomeScreen"
import UserScreen from "../pages/UserScreen"
import CartScreen from "../pages/CartScreen"
import NotifyScreen from "../pages/NotifyScreen"


export const MainNavigator =  TabNavigator({
    Home: {
        screen: HomeScreen , // imported config

        // setting something for `tab navigation`
        navigationOptions : {
            title: "Home", // title inside the icon. Blank if not use
            header: null, // don't know
            tabBarIcon: ({ tintColor }) => { // setting the Focused or tint color
                // the icon (color, size, ... ) want to show
                return <Entypo name="home" size={ 25 } color={ tintColor } /> 
        }  
    }      
},
    Cart: { 
        screen: CartScreen,         
        // setting something for `tab navigation`
        navigationOptions : {
            title: "Cart",
            header: null,
            tabBarIcon: ({ tintColor }) => {
                return <Entypo name="shopping-cart" size={ 25 } color={ tintColor } />
        }  
    }
},  
    Notify: { 
        screen: NotifyScreen, 
        // setting something for `tab navigation`
        navigationOptions : {
            title: "Notify",
            header: null,
            tabBarIcon: ({ tintColor }) => {
                return <Entypo name="bell" size={ 25 } color={ tintColor } />
        }  
    }
},
    User: { 
        screen: UserScreen, 
        // setting something for `tab navigation`
        navigationOptions : {
            title: "User",
            header: null,
            tabBarIcon: ({ tintColor }) => {
                return <FontAwesome name="user-secret" size={ 25 } color={ tintColor } />
        }  
    }
},
},
    {    
        initialRouteName:"Home", // We'll see this route name first             
        tabBarComponent: TabBarBottom, // using component "TabBarBottom"
        tabBarPosition: "bottom", // position of tab bar is bottom
        animationEnabled: true, // using animation
        swipeEnabled: true // use swipe animation 
    }
);
