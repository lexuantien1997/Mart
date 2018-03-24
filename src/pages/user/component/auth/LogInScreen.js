import React,{Component} from "react";
import PropTypes from "prop-types"
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from "react-native"

import CustomTextinput from "../CustomTextinput"
import LoginButton from "../custom/LoginButton"
import FacebookButton from "../custom/FacebookButton"
import GoogleButton from "../custom/GoogleButton"
import Entypo from 'react-native-vector-icons/Entypo';

const { height, width } = Dimensions.get('window')

export default class LogInScreen extends Component{
    render(){
        return(
            <View
                animation="fadeInLeft" delay={1200} duration={700}  
                style = { styles.mainView }           
            >
                <View>
                    <View style = {{ width: (width*8) / 10}}>
                        {/* Email */}
                        <CustomTextinput 
                            labelStyle = {{color: "#fff",fontSize:15}}
                            marginTop= {15}
                            cHeight={47}
                            iconClass={Entypo}
                            iconName={"mail"}
                            iconColor = {"#fff"}
                            hint = {"test@gmail.com"}
                            hintTextColor = {"#fff"}
                            selectionColor = {"#fff"}                                               
                        />         
                        {/* Password */}
                        <CustomTextinput 
                            labelStyle = {{color: "#fff",fontSize:15}}                            
                            marginTop= {15}
                            cHeight={47}
                            iconClass={Entypo}
                            iconName={"lock"}
                            iconColor = {"#fff"}
                            hint = {"Password"}
                            hintTextColor = {"#fff"}
                            selectionColor = {"#fff"}                                               
                        />                          
                    </View>
                     
                </View>     
                <TouchableOpacity style = {{ alignItems:"center", marginTop:height/25 }}>
                    <Text  style = {{ color:"#fff", fontSize:16 }}>Forgot your password ?</Text>
                </TouchableOpacity>
                <LoginButton />       
                <View style = {{ flexDirection:"row", justifyContent:"space-around" , alignItems:"center"}}>
                    <FacebookButton />        
                    <GoogleButton />                            
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        zIndex:1,
        flex:1,
        backgroundColor:"transparent"
    },
    form:{
        marginRight: width / 40,
        alignSelf: 'center',
    }
});