import React, { Component } from 'react';
import { StackNavigator } from "react-navigation"
import {MainNavigator} from "./RouteTabNavHome"
import ProfileScreen from "../../src/pages/user/component/ProfileScreen"
export const HomeStack = StackNavigator ({    
    MainNav: {
        screen: MainNavigator
    },
    Profile:{
        screen: ProfileScreen
    },
},
    {
        initialRouteName: "MainNav"
    }

);