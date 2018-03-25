import React,{Component} from "react";
import PropTypes from "prop-types"
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native"
const { height, width } = Dimensions.get('window')


export default class TopTab extends Component {

    // define props
    static propTypes = {        
        _switch: PropTypes.func.isRequired
    }

    constructor() {
        super();
        this.state = {
            currentTabIndex: 0,
            tabStyles: [ styles.topTabButtonOn, styles.topTabButtonOff ]
        }
    }

    render(){

        // switch color when click 
        // make like radio button
        const {
            _switch
        } = this.props

        return(
            <View 
                animation="fadeInLeft" delay={750} duration={700} 
                style = {styles.container}>
                <TouchableOpacity
                    style = { [ this.state.tabStyles[0], styles.baseButton ]}
                    onPress = {this.props._switch(0)}
                >
                    <Text style = {styles.textStyle}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                     style = {[ this.state.tabStyles[1],styles.baseButton]}
                     onPress = {this.props._switch(1)}
                >
                    <Text style = {styles.textStyle}>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    baseButton:{
        height : height / 12,
        width : width * 0.5,
        justifyContent:"center", 
        alignItems:"center"
    },
    topTabButtonOn: {      
        backgroundColor: "#5CADEF",
    },
    topTabButtonOff: {
        backgroundColor: "#7bc0f8",
    },
    container:{
        flexDirection: 'row',
    },
    textStyle:{
        fontSize: (Math.sqrt((height*height) + (width*width)) * 2.24 ) / 100,
        fontWeight: '500',
        color:"#fff"
    }
});