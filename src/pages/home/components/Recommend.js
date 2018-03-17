import React,{Component} from "react";
import {
    View,
    ScrollView,
    Text ,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native"

import Entypo from 'react-native-vector-icons/Entypo';


const { width , height } = Dimensions.get("window");


export default class Recommend extends Component {
    render(){
        return(
            <View style= { styles.container }>
                <View style = {{ flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <View  style= { styles.texticonStyle } >
                        <Entypo name = "rocket" size={ form_height / 5.8 } color="#D0021A"/>
                        <Text style= { styles.textStyle }>Recommend</Text>
                    </View>
                    <TouchableOpacity style = {{ marginRight: 10 , flexDirection: "row", alignItems: "center"}}>
                        <Text style={{  color: "#1883D7", textDecorationLine: "underline" }}>Read more</Text>
                        <Entypo name = "controller-play" size= {15} color="#1883D7" />
                    </TouchableOpacity>
                </View>                
                <View>

                </View>
            </View>
        );
    }
}

const form_height = height*0.34;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:7,
        height: form_height,
        backgroundColor: "#FFF",
    },
    texticonStyle:{
        flexDirection: 'row',
        marginTop: 2,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    textStyle:{ 
        fontSize: 18,
        marginHorizontal: 10,
        color: "#F8A028",
        fontWeight: 'bold',
    }
        



});