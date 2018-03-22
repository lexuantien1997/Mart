import React,{Component} from "react";
import {
    View,
    Text
} from "react-native"

export default class CustomDetail extends Component {
    render(){
        return(
            
            <View style = {{ alignItems:"center" }} >
                <Text>{ this.props.number }</Text>
                <Text  style = { { fontSize:12 } }>{ this.props.string }</Text>
            </View>
        );
    }
}
