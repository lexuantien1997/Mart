import React,{Component} from "react";
import {
    View,
    Text,
    Button
} from "react-native"
const FBSDK = require("react-native-fbsdk");
const {
    LoginButton,
    AccessToken,
    LoginManager
} = FBSDK;

import  AuthenConf  from "../../back end/auth/AuthenConf.js"


export default class NotifyScreen extends Component {

 
    registerEmail = () => {
        AuthenConf.registerEmail("15520884@gm.uit.edu.vn","7055109674");
    }

    signInEmail = () => {
        AuthenConf.signInEmail("15520884@gm.uit.edu.vn","7055109674");
    }

    onLoginFaceBook = () => {
        AuthenConf.onLoginFaceBook();
    }

    render(){
        return(
            <View>
                <Button 
                    title = "Create account "
                    onPress = { this.registerEmail } />
                <Button 
                    title = "Sign In "
                    onPress = { this.signInEmail } />

                <Button 
                    title = "Login facebook "
                    onPress = { this.onLoginFaceBook }
                />               
            </View>
        );
    }
}

