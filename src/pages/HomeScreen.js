import React,{Component} from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    Dimensions       
} from "react-native"


import EvilIcons from 'react-native-vector-icons/EvilIcons';

const { height, width } = Dimensions.get("window");


export default class HomeScreen extends Component {
    render(){
        return(
            <View>
                <View style = { styles.searchBarContainer }>
                    <View style = { styles.searchBar }>
                        <EvilIcons 
                            style = { styles.iconSearch } 
                            name = "search" 
                            size = { 22 } 
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
            </View>           
        );
    }
}

const styles = StyleSheet.create({
    searchBarContainer:{
        justifyContent: "center",
        alignItems: 'center',      
        backgroundColor: "#E5101D",
        height:45,

    },
    iconSearch:{
        marginLeft: 5,
    },
    searchBar: {
        justifyContent: "center",
        alignItems: 'center',     
        flexDirection: 'row', 
        backgroundColor: "#C0020C",
        height: 30,
        borderRadius: 5,
        marginHorizontal: 20,
    },
    searchInput: {
        flex:1,
        padding: 3,
        color : "#DE8E91",  
    }
});
