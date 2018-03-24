import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    Animated,
    TouchableOpacity, 
    Button
} from "react-native"
const { height, width } = Dimensions.get('window')

const logo_width = width*0.8;

export default class AuthScreen extends Component{

    render(){
        return(
            <View style = { styles.container }>
                <Image 
                    style = {styles.logoStyle}
                    animation={'bounceIn'}
                    duration={1200}
                    delay={200}
                    source = {require("../../../../img/logo.png")}
                />     

                <View style = { styles.bottomStyle }>
                    <TouchableOpacity   style = { styles.button } animation={'zoomIn'} delay={600} duration={400}>
                        <Text style = { styles.text }>Create Account</Text>
                    </TouchableOpacity>
                    <View style={styles.separatorContainer} animation={'zoomIn'} delay={700} duration={400}>
                        <View style={styles.separatorLine} />
                        <Text style={styles.separatorOr}>{'Or'}</Text>
                        <View style={styles.separatorLine} />
                    </View>
                    <TouchableOpacity   style = { styles.button } animation={'zoomIn'} delay={800} duration={400}>
                        <Text style = { styles.text }>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    logoStyle:{
        flex:1,
        width:logo_width,
        height: null,
        marginVertical: 30,
        alignSelf: 'center',
        resizeMode: 'contain',        
    },
    bottomStyle: {
        flex: 1,
        marginHorizontal: width * 0.1,
        justifyContent: 'center',
      },
      separatorContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 20
      },
      separatorLine: {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        height: StyleSheet.hairlineWidth,
        borderColor: '#9B9FA4'
      },
      separatorOr: {
        color: '#9B9FA4',
        marginHorizontal: 8
      },
      button: {
        height: 50,
        borderWidth: 1,
        borderRadius: 3,
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        backgroundColor: "#1976D2"
      },
      text: {
        textAlign: 'center',
        fontWeight: '400',
        color: 'white'
      }
});

