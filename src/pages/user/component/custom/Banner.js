import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    ImageBackground
} from "react-native"
import LinearGradient from "react-native-linear-gradient"

const { height, width } = Dimensions.get('window')

// get local image
const ImageLogo = require("../../../../img/companylogo.png")
const ImageBanner = require("../../../../img/companybanner.jpg")

export default class Banner extends Component {
    render(){
        return(
            <View animation="fadeInRight" delay={250} duration={700}>
                <ImageBackground 
                    source ={ImageBanner}
                    style = {styles.background}
                >
                    <LinearGradient 
                        colors={["#5CADEF"+"DC","#6fAAF1"+ "DD"]}
                        style={styles.background}
                    />
                    <Image 
                        source = {ImageLogo}
                        resizeMode="contain"
                        style={styles.icon}
                        />

                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background:{
        width,
        height: height* 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon:{
        position:"absolute",
        width:width*0.52,
        tintColor:"#fff"
    }
});