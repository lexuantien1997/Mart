import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from "react-native"

import TopTab from "../custom/TopTab"
import Banner from "../custom/Banner"

import LogInScreen from "./LogInScreen"

const { height, width } = Dimensions.get('window')

export default class Auth extends Component{

    switchScreens = index => () => {
        if(this.topTab.state.currentTabIndex !== index){

            if(index===0){
                
            } 
            else {

            }
            this.topTab.state.tabStyles.reverse();
            this.topTab.setState({
                currentTabIndex: index
            })
        }
    }

    render(){
        return(
            <View 
                style={{
                    flex: 1, 
                    backgroundColor:"#5CADEF"
                }}
              >
                <Banner />
                <TopTab 
                    ref = {(ref) => { this.topTab = ref; }}
                    _switch={this.switchScreens}
                />
                <View
                    style = {{
                        backgroundColor:"#5CADEF",
                        width,
                        height:height-(height/4)+(height/19)-height/12,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} >

                    <LogInScreen />
                </View>
              </View>
        );
    }
}


