import React,{Component} from "react";
import {
    View,
    ScrollView,
    Text ,
    Image,
    StyleSheet,
    Dimensions,
    FlatList,
    TouchableOpacity
} from "react-native"

import Entypo from 'react-native-vector-icons/Entypo';


const { width , height } = Dimensions.get("window");


export default class Recommend extends Component {

    _renderItem(item){
        return(
            <Image style={{width:170, height: 180}} source={{uri: item.image}}/>
        )
    }

    render(){
        return(
            <View style= { styles.container }>
                <View style = {{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <View  style= { styles.texticonStyle } >
                        <Entypo name = "rocket" size={ form_height / 5.8 } color="#D0021A"/>
                        <Text style= { styles.textStyle }>{this.props.name}</Text>
                    </View>
                    <TouchableOpacity style = {{marginRight: 10 , flexDirection: "row", alignItems: "center"}}>
                        <Text style={{  color: "#1883D7", textDecorationLine: "underline" }}>Read more</Text>
                        <Entypo name = "controller-play" size= {15} color="#1883D7" />
                    </TouchableOpacity>
                    
                </View>
                <FlatList
                    horizontal
                    ItemSeparatorComponent={() => <View style = {{width: 10}}/>}
                    renderItem={({item}) => this._renderItem(item)}
                    data={shows_first}
                    />                
                <View>

                </View>
            </View>
        );
    }
}

const form_height = height*0.34;

const shows_first = [
    {
        key: '1',
        name:'Laptop',
        image: 'https://vcdn.tikicdn.com/cache/280x280/ts/product/db/3c/86/f383fbe58d1819d69ea7e3df7dbe7b52.jpg'
    },
    {
        key: '2',
        name:'Phone',
        image: 'https://vcdn.tikicdn.com/cache/w1200/ts/product/9c/c1/59/3f64f6317e750a9f49cc2c709cab7082.jpg'
    },
    {
        key: '3',
        name:'Printer',
        image: 'https://vcdn.tikicdn.com/cache/280x280/ts/product/e0/7e/d6/7763662ce9114202295c1d67fc25f7ae.jpg'
    },
    {
        key: '4',
        name:'Headphone',
        image: 'https://vcdn.tikicdn.com/cache/280x280/media/catalog/product/1/_/1.u5488.d20170814.t110420.311727.jpg'
    },
    {
        key: '4',
        name:'Camera',
        image: 'https://vcdn.tikicdn.com/cache/280x280/media/catalog/product/1/3/13d9c7d825aa893a5ff5734d7cc0ac8b.jpeg'
    },
    {
        key: '5',
        name:'earphone',
        image: 'https://vcdn.tikicdn.com/cache/280x280/media/catalog/product/1/_/1.u5488.d20170817.t105459.776199_1.jpg'
    },

]

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:7,
        height: form_height,
        backgroundColor: "#FFF",
    },
    texticonStyle:{
        flexDirection: 'row',
        marginTop: 2,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    textStyle:{ 
        fontSize: 18,
        marginHorizontal: 10,
        color: "#F8A028",
        fontWeight: 'bold',
    }
        



});