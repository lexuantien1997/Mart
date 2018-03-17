import React,{Component} from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Image,
    Dimensions       
} from "react-native"


import EvilIcons from 'react-native-vector-icons/EvilIcons';

const { height, width } = Dimensions.get("window");


export default class searchBar extends Component {

    render(){
        return(
            <View style = { styles.searchBarContainer }>
                <View style = { styles.searchBar }>
                    <EvilIcons 
                        style = { styles.iconSearch } 
                        name = "search" 
                        size = { 24 } 
                        color = "#DE8E91"
                    />
                    <TextInput style = { styles.searchInput } 
                        placeholder = "What're you looking for today ?"
                        underlineColorAndroid = "transparent"  
                        placeholderTextColor = "#DE8E91"   
                        selectionColor = "#DE8E91"                   
                    />                    
                </View>
                
            </View>                                        
        );
    }
}

const styles = StyleSheet.create({
    searchBarContainer:{
        justifyContent: "center",
        alignItems: 'center',      
        backgroundColor: "#E5101D",
        height: height / 15,

    },
    iconSearch:{
        marginLeft: 5,
        marginTop: 1,
    },
    searchBar: {
        justifyContent: "center",
        alignItems: 'center',     
        flexDirection: 'row', 
        backgroundColor: "#C0020C",
        height: height / 22,
        borderRadius: 5,
        marginHorizontal: 20,
    },
    searchInput: {
        flex:1,
        padding: 3,
        color : "#DE8E91",  
    }
});
