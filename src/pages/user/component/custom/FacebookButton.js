import React,{Component} from "react";
import PropTypes from "prop-types"
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native"
import Entypo from 'react-native-vector-icons/Entypo';

const { height, width } = Dimensions.get('window')

export default class FacebookButton extends Component{


    faceBookLogin() {

    };

    render(){
        return(
            <View
                animation="fadeInLeft" delay={1200} duration={700}  
                style = { styles.loginStyle }                           
            >
                <TouchableOpacity style = { styles.touchloginStyle }>
                    <Entypo name = "facebook" color = "#fff" size={23}/>
                    <Text style = {{ color:"#fff", fontSize:16, fontWeight:"bold" }}>Facebook</Text>
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
        width: width* 0.35,
        height: height / 14,
        marginTop: height/35,
        flexDirection:"row"
    }
});