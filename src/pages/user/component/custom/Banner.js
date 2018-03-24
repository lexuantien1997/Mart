import React,{Component} from "react";
import PropTypes from "prop-types"
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    ImageBackground
} from "react-native"
import LinearGradient from "react-native-linear-gradient"
const { height, width } = Dimensions.get('window')

const ImageLogo = require("../../../../img/companylogo.png")
const ImageBanner = require("../../../../img/companybanner.jpg")

export default class Banner extends Component {

    constructor() {
        super();
        this.state = {
           
        }
    }

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
        height: height / 4 + height / 19,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon:{
        position:"absolute",
        width:(width*52)/100,
        tintColor:"#fff"
    }
});