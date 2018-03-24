import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    Animated,
    TouchableOpacity,
    ScrollView
} from "react-native"
import { StackNavigator } from "react-navigation"
import ProfileScreen from "./component/ProfileScreen"

// Some react native vector icon
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomOption from "./component/CustomOption"
import CustomDetail from "./component/CustomDetail"

import AuthScreen from "./component/auth/AuthScreen"
import Auth from "./component/auth/Auth"

const { height, width } = Dimensions.get("window");
const fcenter_height=height*0.22;

export default class UserScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLogin : false
        }
    }s

    render(){

        if(this.state.isLogin){            
        return(
            <View style = { styles.container }>             
                <View style = { styles.topstyle } >
                    <Text style = {{ fontSize: 18 , color: "black"}}>My profile</Text>
                </View>                
                <View style = { styles.center_1_style }>
                    <View style = { styles.center_style_1 }>                        
                        <View style = {{flex: 2, justifyContent: "center", alignItems:"center"}}>
                            <FontAwesome name="user-circle-o" size= {75} />                            
                        </View>                            
                        <View style = {{ flex: 5, justifyContent: "space-around"}}>
                            <View style = {{ flexDirection: "row", alignItems:"center", justifyContent: "space-around" }}>
                                <CustomDetail number="10" string="đơn hàng" />
                                <CustomDetail number="3" string="sản phẩm" />
                                <CustomDetail number="7.500.300đ" string="số tiền dùng" />
                            </View>
                            <View style = {{ flexDirection: "row", alignItems:"center", justifyContent: "space-around" }} >
                                <TouchableOpacity 
                                    style = {{ borderWidth:1, borderColor:"#cbcbcb",paddingVertical:3, paddingHorizontal:30, borderRadius: 5}}
                                    onPress = { () => this.props.navigation.navigate("Profile")  }
                                    >
                                
                                    <Text style = {{ fontSize:15, color:"black" }}>Change my profile</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {{ borderWidth:1, borderColor:"#cbcbcb", paddingVertical:1, paddingHorizontal:10, borderRadius: 5}}>
                                <Ionicons name = "ios-settings-outline" size={25} color= "black"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style = { styles.center_style_2 }>
                        <Text style= {{ marginLeft: 10, color:"black"}}>Lê Xuân Tiến</Text>
                        <Text style= {{ marginLeft: 10}}>shinigami</Text>
                    </View>
                </View>   
    
                <ScrollView style = { styles.center_2_style }>
                    <CustomOption 
                        iconClass={Entypo}
                        iconName={"news"}
                        label={"Quản lý đơn hàng"}                        
                        /> 
                    <CustomOption 
                        iconClass={FontAwesome}
                        iconName={"address-book"}
                        label={"Địa chỉ nhận hàng"}/> 
                    <CustomOption 
                        iconClass={Entypo}
                        iconName={"heart"}
                        label={"Sản phẩm yêu thích"}/> 
                    <CustomOption 
                        iconClass={Entypo}
                        iconName={"evernote"}
                        label={"Thông báo của tôi"}/> 
                    <CustomOption 
                        iconClass={Foundation}
                        iconName={"burst-sale"}
                        label={"Mã giảm giá của bạn"} /> 
                    <View style = {{ height: 7, backgroundColor: "#d4d3d0"}}/>
                    <CustomOption 
                        iconClass={Entypo}
                        iconName={"new-message"}
                        label={"Hỏi đáp"}/> 
                    <CustomOption 
                        iconClass={Ionicons}
                        iconName={"md-settings"}
                        label={"Cài đặt"} /> 
                </ScrollView>          
            </View>
            );  
        }
        else {
            return(
                <Auth />          
            );
        }
 
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#D4D3D0"
    },
    topstyle:{
        height: height * 0.06,
        backgroundColor: "#E5101D",  
        alignItems: 'center',
        justifyContent: 'center',  
    },
    center_1_style:{
        height:fcenter_height,
        backgroundColor: "#fff"
    },
    center_style_1:{
        height: fcenter_height * 0.7,
        flexDirection: 'row',
        marginRight: 5,
    },
    center_style_2:{
        height: fcenter_height * 0.3,
    //    backgroundColor: "#cd6",
    },   center_2_style:{
        flex:1,
        marginTop: 7,
        backgroundColor: "#fff"
    }


});