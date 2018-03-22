import React,{Component} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView
} from "react-native"
import {StackNavigator} from "react-navigation"
import CustomTextinput from "./CustomTextinput"
// Some react native vector icon
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';



const { height, width } = Dimensions.get("window");
const avatar_height = height*0.25;

export default class ProfileScreen extends Component {

    static navigationOptions = {
        title: "Change my profile",
        headerTitleStyle:{
            alignSelf: "center",            
            textAlign: "center",
            width:"80%" ,
            color:"#454545"           
        },
        headerRight:(
            <TouchableOpacity style = {{ marginRight:10 }}>
                <Text style= {{ fontSize:18, color: "#454545" }}>Done</Text>
            </TouchableOpacity>
        )            
    };

    render(){
        return(
         <ScrollView style = {styles.container}>
            <View style = {styles.userView}>
                <Image 
                    style = {{ height:avatar_height*0.7, width:avatar_height*0.7, borderRadius:100 }} 
                    source = {require("../../../img/1.jpg")}
                /> 
                <TouchableOpacity>
                    <Text style = {{ fontSize: 18, color: "#75b4d2" }}>Change my avatar</Text>
                </TouchableOpacity>                           
            </View>

            <View>
                <CustomTextinput 
                    iconClass={Entypo}
                    iconName={"blackboard"}
                    label={"Lê Xuân Tiến"}
                    hint="Name"
                    /> 
                <CustomTextinput 
                    iconClass={FontAwesome}
                    iconName={"drupal"}
                    label={"shinigami"}
                    hint="Nickname"/> 
                <CustomTextinput 
                    iconClass={Entypo}
                    iconName={"facebook"}
                    label={"facebook.com/tienlx97"}
                    hint = "Website" />
                <CustomTextinput 
                    iconClass={Entypo}
                    iconName={"briefcase"}
                    label={"student"}
                    hint = "Job"
                    /> 
                <Text style = {{ textDecorationLine: "underline", fontSize:16 , marginLeft: 10, marginTop: 10}}>PRIVATE INFORMATION</Text>
                <CustomTextinput 
                    iconClass={Entypo}
                    iconName={"mail"}
                    label={"tielx97@gmail.com"}
                    hint = "Email"
                    />
                <CustomTextinput 
                    iconClass={Entypo}
                    iconName={"old-phone"}
                    label={"0932311434"}
                    hint = "Phone"
                    />  
                <CustomTextinput 
                    iconClass={FontAwesome}
                    iconName={"transgender-alt"}
                    label={"male"}
                    hint = "Gender"
                    />  
                    
            </View>

            <View>
            
            </View>

         </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    userView:{
        height: avatar_height,
        alignItems: 'center',
        justifyContent: 'center', 
        borderBottomWidth: 1,
        borderColor:"#d4d3d0"
    }

});
