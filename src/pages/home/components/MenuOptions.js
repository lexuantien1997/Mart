import React,{Component} from "react";
import {
    View,
    ScrollView,
    Text ,
    Image,
    StyleSheet   ,
    Dimensions ,
    TouchableOpacity 
} from "react-native"

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


const { width , height } = Dimensions.get("window");


export default class MenuOptions extends Component {
    render(){
        return(
            <View style = { styles.container }>
                <View style={styles.optionContainer}>
                       <TouchableOpacity>
                            <View style= { [ styles.iconContainer , {backgroundColor: "#EC2423"}]} >
                                <MaterialIcons 
                                    style= {{margin:2 }}
                                    name="menu" 
                                    size={23} 
                                    color= "white" />
                            </View>       
                        </TouchableOpacity>                     
                        <Text>Category</Text>                   
                </View>                 
                <View style={styles.optionContainer}>
                        <TouchableOpacity>
                            <View style= { [styles.iconContainer , {backgroundColor: "#BD8BBF"} ] } >
                                <Entypo 
                                    style= {{margin:2 }}
                                    name="feather" 
                                    size={23} 
                                    color= "white" />
                            </View>        
                        </TouchableOpacity>               
                        <Text>Sales</Text>                   
                </View>  
                <View style={styles.optionContainer}>
                       
                        <TouchableOpacity>
                            <View style= { [ styles.iconContainer ,{backgroundColor: "#98BA4C"} ] } >
                                <FontAwesome 
                                    style= {{margin:2 }}
                                    name="linode" 
                                    size={23} 
                                    color= "white" />
                             </View>        
                        </TouchableOpacity>                                      
                        <Text>Hot</Text>                   
                </View>    
                <View style={styles.optionContainer}>
                    <TouchableOpacity>
                        <View style= { [ styles.iconContainer ,{backgroundColor: "#8393CA"} ] } >
                            <Ionicons 
                                style= {{margin:2 }}
                                name="md-trending-up" 
                                size={23} 
                                color= "white" />
                        </View>           
                    </TouchableOpacity>                                    
                    <Text>Trend</Text>                   
                </View>            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height: height * 0.12,
     //   borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff"
    },  
    optionContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: width / 15,
    },
    iconContainer:{
       // borderWidth:1,
        borderStyle: "solid",
        borderRadius:50,
        height: 37,
        width: 37 ,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5
    }
 });
