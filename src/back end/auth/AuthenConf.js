import { firebaseApp , fProvider, auth} from "../FirebaseConfig"
import { GoogleSignin } from "react-native-google-signin";
const FBSDK = require("react-native-fbsdk");
const {
    AccessToken,
    LoginManager
} = FBSDK;


export default class AuthenConf {

    ///
    /// Register the email
    ///
    static async registerEmail (email,password) {
        try {
            await firebaseApp.auth()
                .createUserWithEmailAndPassword(email,password) // create with email and pass
                .then ( () => { // after create success
                    alert ("created account");
                    // navigate into User screen
                })
                .catch (function(error) { // show error
                    alert ("connect email error: "+error.toString());
                });
        } catch (error) {
            alert (error.toString());
        }     
    }

    ///
    /// Login with exist email and password
    ///
    static async signInEmail (email, password) {
        try {
            await auth.signInWithEmailAndPassword(email,password)
                // .then ( () => {
                //     alert ("sign in");
                // })
                .then ( (user) => {
                    /// get profile , . . .
                  //  alert ("profile");
                })
                .catch ((error) => {
                    alert (error.toString());
                });
        } catch  (error) {
            alert (error.toString());
        }     
    }
 
     ///
     /// Register or login with facebook
     ///
     static async onLoginFaceBook() {
        
        try {
            await LoginManager
                .logInWithReadPermissions(["public_profile","email"]) // The permission read email and profile
                .then ((result)=>{ // If success
                    if (result.isCancelled) { // cancel login
                        return Promise.reject(new Error ("The user cancelled the request"));
                    }
                    // get access token
                    return AccessToken.getCurrentAccessToken();
                })
                .then (data => { // credential (key) to login firebase

                    // create the instance of fb provider
                    // use access token to access fb API
                    const credential = fProvider.credential(data.accessToken);
                    return auth.signInWithCredential(credential) ;

                    alert ("key to login fire base");
                })
                .then ( (currentUser) => { // login successfull -> get user profile
                    // create a class to receive the profile => upload it to UI

                    alert ("profile");
                })
                .catch ((error)=>{ // false -> go here
                    alert (error.toString());
                });
        } catch (error) { alert (error.toString()); }   
    }

    ///
    /// sign in with google
    ///
    static onLoginGoogle() {
         GoogleSignin.signIn()
            .then ((data) => {
                const credential = gProvider.credential(data.idToken,data.accessToken);
                // Login with fire base
                return auth.signInWithCredential(credential);
            })
            .then ((user) =>{
                // get profile
                alert(user);
            })
            .catch((error)=>{
                alert(error.toString());
            })
       
    }

    static configGoogle () {
 
    }
}
 