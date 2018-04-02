import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    TextInput,
    
} from "react-native"
import PropTypes from "prop-types"
import Entypo from  "react-native-vector-icons/Entypo"

const mainColor = "#fff";

const { height, width } = Dimensions.get('window')
export default class Email extends Component{
   
    constructor(){
        super();
        this.state = {
            inputRef:null,
            value:"",
            inCorrect:0
        }
    }

    checkIfIsCorrect = () => {
        if (this.state.value !== "") {
            this.state.isCorrect = 1;
        } else {
            this.state.isCorrect = 2;            
        }

        this.setState(this.state); // set all state
        this.props.update();

    }

    clearInput = () => {
        this.state.inputRef.setNativeProps({
            text:""
        });
        this.setState({
            isCorrect:0,
            value: ""
        })
    }

    updateText = (value) => {
        this.state.value = value;
    }

    render(){
        return(
      
            <View style = {styles.container} >
                <Entypo style = {styles.iconStyle} name = "mail" color = {mainColor} size={30}/>
                
                <TextInput                     
                    style = {styles.inputStyle}
                    ref = { (ref)=> { this.state.inputRef = ref; } }
                    onSubmitEditing = {this.props.changeFocus}
                    onChangeText = {this.updateText}
                    onEndEditing = {this.checkIfIsCorrect}
                    placeholder="test@gmail.com"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    returnKeyType="next"
                    underlineColorAndroid="transparent"
                    selectionColor={mainColor}
                    placeholderTextColor = {mainColor}
                    blurOnSubmit={true}                    
                    />
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
        height:height / 13,
        borderColor:"#fff",
        marginTop:15
    },
    iconStyle:{
        width: width*0.12, 
        marginLeft:10
    },
    inputStyle:{
        fontSize:17,
         flex:1,
         color:"#fff"
    }
});
Email.propTypes = {
    update:PropTypes.func.isRequired,
    changeFocus: PropTypes.func.isRequired
}