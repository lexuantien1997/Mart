import React,{Component} from "react";
import {
    View,
    ScrollView,
    Text ,
    Image    
} from "react-native"

import SearchBar from "./components/SearchBar"
import Category from "./components/Category"
import MenuOptions from "./components/MenuOptions"
import Recommend from "./components/Recommend"
// search bar
// category hot
// horizontal menu option
//
//
//
export default class HomeScreen extends Component {
    render(){
        return(
            <View style = {{ flex:1 }}>
                <SearchBar />
                <ScrollView style = {{ backgroundColor : "#D4D3D0" }}> 
                    <View>
                        <Category /> 
                    </View>
                    <View>                        
                        <MenuOptions />
                        <Recommend />
                        <Recommend /> 
                        <Recommend /> 
                        <Recommend /> 
                    </View>                     
                </ScrollView>               
            </View>           
        );
    }
}

