import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native"


import TopTab from "../custom/TopTab"
import Banner from "../custom/Banner"

import RegisterScreen from "./RegisterScreen"
import LogInScreen from "./LogInScreen"

const { height, width } = Dimensions.get('window')

export default class Auth extends Component{

   constructor () {
       super();
       this.state = {
           isLG : true
       };
   }

    changezIndex = () => {
        this.logInScreen.changezIndex();
    }

    // function => change 2 screen
    switchScreens = index => () => {
        if(this.topTab.state.currentTabIndex !== index){

            // change to login
            if(index === 0){
                this.setState ({
                    isLG:true
                })
            } 
            else {  // change to register
                this.setState ({
                    isLG:false
                })
            }
            // base config like: set index
            this.topTab.state.tabStyles.reverse();
            this.topTab.setState({
                currentTabIndex: index
            });
        }
    }

    render(){


        const mainJSX = this.state.isLG ? <LogInScreen /> : <RegisterScreen /> ;
        return(
            <View style={styles.container}>       
                <Banner />
                <TopTab 
                    ref = {(ref) => { this.topTab = ref; }}
                    _switch={this.switchScreens}
                />
               <View style = {styles.mainView}>
                    { mainJSX }
                    
                    {/* <LogInScreen 
                        ref  = { (ref) => { this.logInScreen = ref; } }
                    /> 
                    
                    <RegisterScreen 
                        ref  = { (ref) => { this.registerScreen = ref; } }
                    /> */}
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