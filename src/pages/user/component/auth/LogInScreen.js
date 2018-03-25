import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native"

import CustomTextinput from "../CustomTextinput"
import LoginButton from "../custom/LoginButton"
import FacebookButton from "../custom/FacebookButton"
import GoogleButton from "../custom/GoogleButton"

import Email from "../custom/Email"
import Password from "../custom/Password"

// color
import Entypo from  "react-native-vector-icons/Entypo"


const { height, width } = Dimensions.get('window')

const mainColor = "#fff"

export default class LogInScreen extends Component{

    constructor(props,context){
        super(props,context);
        this.state = {
            inputs: []
        };
    }

    // change the focus when finish write 
    changeInputFocus = index => {
        if (index === 0){
            this.state.inputs[index+1].state.inputRef._root.focus();
        }
    };

    render(){
        return(
            <View
                animation="fadeInLeft" delay={1200} duration={700}  
                style = { styles.container }           
            >
                <View style = {{ width: width*0.8 }}>
                    <Email
                        changeFocus = {this.changeInputFocus(0).bind(this)} 
                        ref = { (ref) => { this.state.inputs[0] = ref; } } 
                        />
                    <Password 
                        ref = { (ref) => { this.state.inputs[1] = ref; } }
                        changeFocus = {this.changeInputFocus(1).bind(this)}/>
                </View>   
                <TouchableOpacity style = {styles.forgotPassStyle}>
                    <Text  
                        style = {{ color:mainColor, fontSize:16 }}
                        >Forgot your password ?</Text>
                </TouchableOpacity>
                <LoginButton />       
                <View style = {styles.otherLoginStyle}>
                    <FacebookButton />        
                    <GoogleButton />                            
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        zIndex:1,
        flex:1,
        backgroundColor:"transparent"
    },
    form:{
        marginRight: width / 40,
        alignSelf: 'center',
    },
    forgotPassStyle:{
        alignItems:"center", 
        marginTop:height/27
    },
    otherLoginStyle:{
        flexDirection:"row",
        justifyContent:"space-around" , 
        alignItems:"center"
    }
    
});