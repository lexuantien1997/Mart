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

    // function => change 2 screen
    switchScreens = index => () => {
        if(this.topTab.state.currentTabIndex !== index){

            // change to login
            if(index===0){
                
            } 
            else {  // change to register

            }
            this.topTab.state.tabStyles.reverse();
            this.topTab.setState({
                currentTabIndex: index
            })
        }
    }

    render(){
        return(
            <View style={styles.container}>       
                <Banner />
                <TopTab 
                    ref = {(ref) => { this.topTab = ref; }}
                    _switch={this.switchScreens}
                />
                <View style = {styles.mainView}>
                    <LogInScreen />
                </View>
              </View>
        );
    }
}



const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor:"#5CADEF"
    },
    mainView:{
        backgroundColor:"#5CADEF",
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});