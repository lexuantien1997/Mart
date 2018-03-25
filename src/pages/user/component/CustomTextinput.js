import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Animated,
    ViewPropTypes,
    TouchableOpacity,
    TextInput
} from "react-native"
import PropTypes from "prop-types"

const { height, width } = Dimensions.get("window");

export default class CustomTextinput extends Component {


    // custom some props
    static propTypes = {
        label: PropTypes.string.isRequired, // value,
        defaultLabel: PropTypes.string, //default
        labelStyle: Text.propTypes.style, // input style
        labelSize: PropTypes.number, // input size
        editable: PropTypes.bool, // can edit ?
        keyboardType: PropTypes.string,
        returnKeyType: PropTypes.string,
       // style: ViewPropTypes ?  ViewPropTypes.style :View.propTypes.style,
      

        hintTextColor: PropTypes.string,
        hint: PropTypes.string, // place holder
        selectionColor: PropTypes.string,
        hidePass:PropTypes.bool,

        // Function  

        onSubmitEditing: PropTypes.func,

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
        marginTop:0,
        hidePass: false,
        keyboardType:"default"
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
            selectionColor,
            hidePass,
            onSubmitEditing
            
            
        } = this.props


        
      

        // get image without specific class
        const AnimatedIcon = Animated.createAnimatedComponent(iconClass);
        return(
            <View style = { [styles.container, { marginTop:marginTop, height:cHeight, borderColor:borderColor }] } >          
                <AnimatedIcon                    
                    style = {styles.iconStyle}
                    name = {iconName}
                    color = {iconColor}
                    size = {iconSize}
                />
                <TextInput 
                    style = { [ labelStyle, {fontSize:labelSize, flex:1 } ] }                                   
                    placeholder = { hint }         
                    ref = { c => { this._root = c ; this._textInput=c;} }
                    underlineColorAndroid = "transparent"  
                    returnKeyType = { returnKeyType } 
                    editable = { editable }                        
                    keyboardType = { keyboardType }
                    placeholderTextColor = { hintTextColor }
                    selectionColor = { selectionColor }
                    secureTextEntry = { this.props.hidePass?true:false }
                    onSubmitEditing = {onSubmitEditing}                                
                    >{label}</TextInput>                     
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        justifyContent:"center", 
        flexDirection: "row",  
        alignItems:"center", 
        borderBottomWidth:1, 
    },
    iconStyle:{
        width: width*0.12, 
        marginLeft:10
    }
});