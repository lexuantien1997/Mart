import React,{Component} from "react";
import {
    View,
    Text,
    Dimensions,
    Animated,
    TouchableOpacity,
} from "react-native"
import PropTypes from "prop-types"
import Entypo from 'react-native-vector-icons/Entypo';

const { height, width } = Dimensions.get("window");
const fcenter_height=height*0.22;


export default class CustomOption extends Component {
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
        iconColor: "#989898",
        iconSize: 30,        
        label: "edit text",
        labelSize:17,
        cHeight:53,      
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
            <TouchableOpacity>
                <View style = {{ justifyContent:"space-between", flexDirection: "row", height:cHeight, alignItems:"center", borderBottomWidth:1, borderColor:"#d4d3d0"}} >
                    <View  style = {{ flexDirection: "row", alignItems:"center", justifyContent: "center"}}>
                        <AnimatedIcon                    
                            style = {{ width: width*0.12, marginLeft:10 }}
                            name = {iconName}
                            color = {iconColor}
                            size = {iconSize}
                            />
                        <Text style = { [ labelStyle, {fontSize:labelSize } ] }>{ label }</Text>                     
                    </View>           

                    <Entypo 
                        name = "chevron-small-right"
                        color = "#989898"
                        size = {30}
                        />                
                </View>
            </TouchableOpacity>
         
        );
    }
}
