import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    Image
} from "react-native"
import Swiper from "react-native-swiper";

const { width , height } = Dimensions.get("window");


export default class Category extends Component {


    render(){
            return(
                <View style = { styles.container } >
                    <Swiper style = {{ flex:1}}>
                        <View style = {{ flex: 1, backgroundColor   : "blue"}}>
                            <Image
                                source= {{ uri: "https://gitlab.pro/yuji/demo/uploads/576ef91941b0bda5761dde6914dae9f0/kD3eeHe.jpg"} }
                            />
                        </View>
                        <View style = {{ flex: 1, backgroundColor : "yellow"}}>
                            <Image
                                source= { require('../../src/img/1.jpg') }                        
                                />
                        </View>     
                        <View style = {{ flex: 1, backgroundColor : "green"}}>
                            <Image
                                source= { require('../../src/img/1.jpg') }                        
                                />
                        </View>     
                        <View style = {{ flex: 1, backgroundColor : "green"}}>
                            <Image
                                source= { require('../../src/img/1.jpg') }                        
                                />
                        </View>                        
                    </Swiper>
                </View>
            );   
    }
}

 const styles = StyleSheet.create({
    container:{
        flex:1,
        height: height * 0.25
    }    
 });