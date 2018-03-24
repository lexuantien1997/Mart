import React,{Component} from "react";
import PropTypes from "prop-types"
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
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
                <TouchableOpacity>
                    <Text>Login</Text>
                </TouchableOpacity>                  
            </View>
        );
    }
}

const styles = StyleSheet.create({
  
});