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

export default class LoginButton extends Component{

    constructor(props){
        super(props);

        this.state = {
            isLogin:false,
            canLogin: false
        }
    }


    updateCanLogin(can) {
        this.setState ({ 
            canLogin: can
         });
    };

    loginUser = () => {
        if (!this.state.isLogin) {
            if (!this.state.canLogin) { // missing some field
                alert ("height: "+ height + "width: "+width);
               // alert("missing some field");
            } else {             
                //
                this.props.clear();
                this.setState ({
                    isLogin:false,
                    canLogin: false
                })
            }
        }
    }

    render(){
        return(
            <View                
                style = { styles.loginStyle }           
            >
                <TouchableOpacity 
                    style = { styles.touchloginStyle } 
                    onPress = { this.loginUser }>
                    <Text  style = {{ color:"#fff", fontSize:16, fontWeight:"bold" }}>Login</Text>
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
        marginTop: height/35
    }
});

LoginButton.propTypes = {
    clear: PropTypes.func.isRequired
}