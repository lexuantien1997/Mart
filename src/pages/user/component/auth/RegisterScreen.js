import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native"

import Email from "../custom/login/Email"
import Password from "../custom/login/Password"

const { height, width } = Dimensions.get('window')

const mainColor = "#fff"
export default class RegisterScreen extends Component{
    
    
    constructor(){
        super();
        this.state = {
            inputs: [],
            zIndex: 0
        }
    }


    changezIndex () {
        if  (this.state.zIndex === 0) {
            this.setState ({
                zIndex: 100
            });
        } else {
            this.setState ({
                zIndex: 0
            });
        }
    }


    render(){
        return(
            <View                
                ref = { (ref) => { this.animationView = ref; } }  
                style = {{ 
                    zIndex:this.state.zIndex, 
                    flex:1, position:"absolute", 
                    backgroundColor:"transparent" 
                }}>
                <Text>This is register screen</Text>
            </View>
        );
    }

}