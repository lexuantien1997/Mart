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
import PropTypes from "prop-types"
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Ionicons from 'react-native-vector-icons/Ionicons';


const { height, width } = Dimensions.get("window");
const fcenter_height=height*0.22;

class Custom_1 extends Component {
    render(){
        return(
            <View style = {{ alignItems:"center" }} >
                <Text>{ this.props.number }</Text>
                <Text  style = { { fontSize:12 } }>{ this.props.string }</Text>
            </View>
        );
    }
}

class Custom_2 extends Component {
    // custom some props
    static propTypes = {
        iconClass: PropTypes.func.isRequired,
        iconName: PropTypes.string.isRequired,
        iconColor: PropTypes.string,
        iconSize: PropTypes.number,
        cHeight: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        labelStyle: Text.propTypes.style,
        labelSize: PropTypes.number
    }

    static defaultProps = {
        height: 30,
        iconColor: "#fff",
        iconSize: 40,
        label: "edit text",
        labelSize:18,
        cHeight:50
    }
    render(){
        // add some props into main props
        const {
            iconClass,
            iconName,
            iconColor,
            iconSize,
            cHeight,
            label,
            labelSize,
            labelStyle            
        } = this.props
        // get image without specific class
        const AnimatedIcon = Animated.createAnimatedComponent(iconClass);
        return(
            <View style = {{ flexDirection: "row", height:cHeight, alignItems:"center", backgroundColor:"red" }} >
              <AnimatedIcon 
                name = {iconName}
                color = {iconColor}
                size = {iconSize}
              />
              <Text style = { [ labelStyle, { fontSize:labelSize } ] }>{ label }</Text>
            </View>
        );
    }
}

export default class UserScreen extends Component {
    render(){
        return(
            <View style = { styles.container }>             
                <View style = { styles.topstyle } >
                    <Text style = {{ fontSize: 18 , color: "black"}}>My profile</Text>
                </View>                
                <View style = { styles.centerstyle }>
                    <View style = { styles.center_style_1 }>                        
                        <View style = {{flex: 2, justifyContent: "center", alignItems:"center"}}>
                            <FontAwesome name="user-circle-o" size= {75} />                            
                        </View>                            
                        <View style = {{ flex: 5, justifyContent: "space-around"}}>
                            <View style = {{ flexDirection: "row", alignItems:"center", justifyContent: "space-around" }}>
                                <Custom_1 number="10" string="đơn hàng" />
                                <Custom_1 number="3" string="sản phẩm" />
                                <Custom_1 number="7.500.300đ" string="số tiền dùng" />
                            </View>
                            <View style = {{ flexDirection: "row", alignItems:"center", justifyContent: "space-around" }} >
                                <TouchableOpacity style = {{ borderWidth:1, borderColor:"#cbcbcb",paddingVertical:3, paddingHorizontal:30, borderRadius: 5}}>
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

                <ScrollView style = { styles.bottomstyle }>
                    <Custom_2 
                        iconClass={Ionicons}
                        iconName={"ios-settings-outline"}
                        iconColor={"blue"}
                        label={"Quản lý đơn hàng"}
                        labelStyle = {{color: "green"}} /> 
                        
                </ScrollView>          
            </View>
        );
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
    centerstyle:{
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
    },   bottomstyle:{
        flex:1,
        marginTop: 7,
        backgroundColor: "#fff"
    }


});