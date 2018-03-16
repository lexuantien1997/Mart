import React,{Component} from "react";
import {
    View,
    ScrollView,
    Text ,
    Image    
} from "react-native"

import SearchBar from "../../components/form/SearchBar"
import Category from "../../components/form/Category"
import MenuOptions from "../../components/form/MenuOptions"

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
                <ScrollView> 
                    <View>
                        <Category /> 
                    </View>
                    <View>                        
                        <MenuOptions />
                    </View>                     
                </ScrollView>               
            </View>           
        );
    }
}

