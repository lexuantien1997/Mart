import React,{Component} from "react";
import PropTypes from "prop-types"
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window')

export default class GoogleButton extends Component{
    render(){
        return(
            <View
                animation="fadeInLeft" delay={1200} duration={700}  
                style = { styles.loginStyle }                           
            >
                <TouchableOpacity style = { styles.touchloginStyle }>
                    <FontAwesome name = "google" color = "#fff" size={23}/>
                    <Text style = {{ color:"#fff", fontSize:16,fontWeight:"bold" }}>Google</Text>
                </TouchableOpacity>                  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginStyle:{
        alignItems:"center",
        justifyContent:"center",
    },
    touchloginStyle:{
        borderColor:"#fff",
        borderWidth:2,
        alignItems:"center",
        justifyContent:"space-around",
        width: width*0.35,
        height: height / 14,
        marginTop:height/27,
        flexDirection:"row"
    }
});