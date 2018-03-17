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
                <Swiper 
                    style = {{ flex:1}}>   
                    <View style = {{ flex:1}}>
                        <Image
                            style = {{ height: height*0.25, width: width}}
                            resizeMode = "stretch"
                            source= { require("../../../img/5.jpg") }
                        />
                    </View>                   
                    <View style = {{ flex:1}}>
                        <Image
                            style = {{ height: height*0.25, width: width}}
                            resizeMode = "stretch"
                            source= { require("../../../img/4.jpg") }
                        />
                    </View>    
                    <View style = {{ flex:1}}>
                        <Image
                            style = {{ height: height*0.25, width: width}}
                            resizeMode = "stretch"
                            source= { require("../../../img/3.jpg") }
                        />
                    </View>   
                    <View style = {{ flex:1}}>
                        <Image
                            style = {{ height: height*0.25, width: width}}
                            resizeMode = "stretch"
                            source= { require("../../../img/2.jpg") }
                        />
                    </View>  
                    <View style = {{ flex:1}}>
                        <Image
                            style = {{ height: height*0.25, width: width}}
                            resizeMode = "stretch"
                            source= { require("../../../img/1.jpg") }
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
        height: height * 0.25,       
        justifyContent: 'center',
        alignContent: 'center'
    }
 });

 // https://gitlab.pro/yuji/demo/uploads/576ef91941b0bda5761dde6914dae9f0/kD3eeHe.jpg