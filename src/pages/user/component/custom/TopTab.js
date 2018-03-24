import React,{Component} from "react";
import PropTypes from "prop-types"
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback
} from "react-native"
const { height, width } = Dimensions.get('window')


export default class TopTab extends Component {

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

        const {
            _switch
        } = this.props

        return(
            <View 
                animation="fadeInLeft" delay={750} duration={700} 
                style = {styles.topView}>
                <TouchableOpacity
                    style = { [ this.state.tabStyles[0], {justifyContent:"center", alignItems:"center"} ]}
                    onPress = {this.props._switch(0)}
                >
                    <Text
                        style = {styles.topText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                     style = {[ this.state.tabStyles[1], {justifyContent:"center", alignItems:"center"} ]}
                     onPress = {this.props._switch(1)}
                >
                    <Text
                        style = {styles.topText}>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topTabButtonOn: {
        height : height / 12,
        width : width  / 2,
        backgroundColor: "#5CADEF",

    },
    topTabButtonOff: {
        height : height / 12,
        width : width  / 2,
        backgroundColor: "#7bc0f8",

    },
    topView:{
        flexDirection: 'row',
    },
    topText:{
        fontSize: (Math.sqrt((height*height) + (width*width)) * 2.24 ) / 100,
        fontWeight: '500',
        color:"#fff"
    }
});