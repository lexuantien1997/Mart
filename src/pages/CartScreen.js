import React,{Component} from "react";
import {
    View,
    Text,
    TouchableWithoutFeedback,
    TextInput
} from "react-native"

import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default class CartScreen extends Component {
    render(){
        return(
            <View>
                <TouchableWithoutFeedback>
                    <View style = {{ 
                        marginTop: 5,
                        marginHorizontal: 10,
                        height: 30,
                        flexDirection: "row", 
                        alignItems: "center", 
                        borderRadius:  50,
                        backgroundColor: 'red'
                         }} >
                        <EvilIcons style = {{ marginLeft: 10 }} name = "search" size = { 25 } />
                        <TextInput 
                            placeholder = "What're you looking for ?" 
                            underlineColorAndroid = "transparent"
                            style = {{ 
                                flex:1 ,
                                height:30,
                                textDecorationLine: "underline",
                                
                                }}
                            />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

