import React,{Component} from "react";
import {
    View,
    Text,
    Dimensions,
    Animated,
    TouchableOpacity,
    TextInput
} from "react-native"
import PropTypes from "prop-types"

import BaseInput from "./BaseInput"

const { height, width } = Dimensions.get("window");

export default class CustomTextinput extends BaseInput {
    // custom some props
    static propTypes = {
        
        iconClass: PropTypes.func.isRequired,
        iconName: PropTypes.string.isRequired,
        iconColor: PropTypes.string,
        iconSize: PropTypes.number,
        
        cHeight: PropTypes.number.isRequired,
        
        borderColor: PropTypes.string,
        marginTop: PropTypes.number
    }

    static defaultProps = {
     //   height: 30,
        iconColor: "#989898",
        iconSize: 30,        
        label: "",
        labelSize: 17,
        cHeight:53,      
        borderColor: "#d4d3d0",
        editable:true,
        marginTop:0
    }
    render(){
        // add some props into main props
        const {
            // for icon
            iconClass,
            iconName,
            iconColor,
            iconSize,
            // for view
            cHeight,
            borderColor,
            marginTop,
            // for textInput
            label,
            labelSize,
            labelStyle,
            hint,   
            returnKeyType,        
            editable,
            keyboardType,  
            
         //   style: containerStyle,

            hintTextColor ,           
            selectionColor
        } = this.props

        // get image without specific class
        const AnimatedIcon = Animated.createAnimatedComponent(iconClass);
        return(
            <View style = { {marginTop:marginTop,justifyContent:"space-between", flexDirection: "row", height:cHeight, alignItems:"center", borderBottomWidth:1, borderColor:borderColor } } >
                <View  style = {{ flexDirection: "row", alignItems:"center", justifyContent: "center"}}>
                    <AnimatedIcon                    
                        style = {{ width: width*0.12, marginLeft:10 }}
                        name = {iconName}
                        color = {iconColor}
                        size = {iconSize}
                    />
                    <TextInput 
                        style = { [ labelStyle, {fontSize:labelSize, flex:1 } ] }                        
                       // value = { label }           
                        placeholder = { hint }         
                        ref = "input"
                        underlineColorAndroid = "transparent"  
                        returnKeyType = { returnKeyType } 
                        editable = { editable }                        
                        keyboardType = { keyboardType }
                        placeholderTextColor = { hintTextColor }
                        selectionColor = { selectionColor }
                     //   onChange = {this._onChange} // set data change
                        >{label}</TextInput>                     
                </View>                       
            </View>
        );
    }
}
