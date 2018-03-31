import React,{Component} from "react";
import PropTypes from "prop-types"
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native"

const { height, width } = Dimensions.get('window')

export default class CreateAccount extends Component{

    constructor(props){
        super(props);
        this.state = {
           
        }
    }


   
    render(){
        return(
            <View               
                style = { styles.loginStyle }           
            >
                <TouchableOpacity 
                    style = { styles.touchloginStyle } >
                    <Text  style = {{ color:"#fff", fontSize:16, fontWeight:"bold" }}>Create Account</Text>
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
        justifyContent:"center",
        width: width* 0.65,
        height: height / 14,
        borderRadius:20,
        marginTop:10
    }
});

CreateAccount.propTypes = {

}