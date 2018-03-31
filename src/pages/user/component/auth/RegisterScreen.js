import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native"

import Name from "../custom/login/Name"
import Email from "../custom/login/Email"
import Password from "../custom/login/Password"
import RepeatPassword from "../custom/login/RepeatPassword"
import CreateAccount from "../custom/CreateAccount"

const { height, width } = Dimensions.get('window')

const mainColor = "#fff"
export default class RegisterScreen extends Component{
    
    
    constructor(){
        super();
        this.state = {
            inputs: []
        }
    }


    changeInputFocus = index =>() => {
        if (index !== 3) {
            this.state.inputs[index+1].state.inputRef.focus(); // focus another
        }
    };
    render(){
        return(
            <View                
                ref = { (ref) => { this.animationView = ref; } }  
                style = {{                 
                    flex:1, position:"absolute", 
                    backgroundColor:"transparent" 
                }}>
                <View style = {{ width: width*0.8 }}>                      
                    <Name 
                        changeFocus = {this.changeInputFocus(0)}
                        // update = {this.updateCanLoginState}
                        ref = { (ref)=> { this.state.inputs[0] = ref; } }/>                        
                    <Email 
                        changeFocus = {this.changeInputFocus(1)}
                        // update = {this.updateCanLoginState}
                        ref = { (ref)=> { this.state.inputs[1] = ref; } }/>
                    <Password 
                        changeFocus = {this.changeInputFocus(2)}
                        // update = {this.updateCanLoginState}
                        ref = { (ref)=> { this.state.inputs[2] = ref; } }/>
                    <RepeatPassword 
                        changeFocus = {this.changeInputFocus(3)}
                        // update = {this.updateCanLoginState}
                        ref = { (ref)=> { this.state.inputs[3] = ref; } }/>
                </View>   
                <CreateAccount />  
            </View>
        );
    }

}