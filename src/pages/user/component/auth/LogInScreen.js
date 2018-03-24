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
                            marginTop= {25}
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
                            marginTop= {25}
                            cHeight={47}
                            iconClass={Entypo}
                            iconName={"lock"}
                            iconColor = {"#fff"}
                            hint = {"Password"}
                            hintTextColor = {"#fff"}
                            selectionColor = {"#fff"}                                               
                        />                          
                    </View>
                    <TouchableOpacity style = {{ alignItems:"center", marginTop:height/25 }}>
                        <Text>Forgot your password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        zIndex:1,
        position:"absolute",
        flex:1,
        backgroundColor:"transparent"
    },
    form:{
        marginRight: width / 40,
        alignSelf: 'center',
    }
});