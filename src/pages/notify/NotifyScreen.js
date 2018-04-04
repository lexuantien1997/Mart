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

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';


export default class NotifyScreen extends Component {


    componentDidMount (){
        
    }
 
    registerEmail = () => {
        AuthenConf.registerEmail("15520884@gm.uit.edu.vn","7055109674");
    }

    signInEmail = () => {
        AuthenConf.signInEmail("15520884@gm.uit.edu.vn","7055109674");
    }

    onLoginFaceBook = () => {
        AuthenConf.onLoginFaceBook();
    }

    onLoginGoogle = () => {
        AuthenConf.onLoginGoogle();
    }

    _signIn() {
        GoogleSignin.signIn()
        .then((user) => {
          console.log(user);
          this.setState({user: user});
        })
        .catch((err) => {
          console.log('WRONG SIGNIN', err);
        })
        .done();
    }

    render(){
        return(
            <View>
                {/* <Button 
                    title = "Create account "
                    onPress = { this.registerEmail } />
                <Button 
                    title = "Sign In "
                    onPress = { this.signInEmail } />

                <Button 
                    title = "Login facebook "
                    onPress = { this.onLoginFaceBook }
                />     
                 <Button 
                    title = "Login google "
                    onPress = { this.onLoginGoogle }
                />              */}
                
                
                 <GoogleSigninButton 
                    style={{width: 120, height: 44}} 
                    color={GoogleSigninButton.Color.Light}
                    size={GoogleSigninButton.Size.Icon} 
                    onPress={() => { this._signIn(); }}/>

            </View>
        );
    }
}

