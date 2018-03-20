// import React, {Component} from 'react';
// import{
//     AppRegistry,
//     FlatList,StyleSheet,Text,View,Image,ImageBackground,
//     Platform,TouchableHighLight,TouchableOpacity
// } from 'react-native';

// class HorizontalFlatListItem{
//     render() {
//         return (
//             <View
//                 style={{
//                     flex: 1,
//                     flexDirection:'column',
//                     alignItems:'center',
//                     width: 90,
//                     borderRadius: 10,
//                     borderWidth: 1,
//                     borderColor: 'grey',
//                     margin: 4,
//                 }}>
//             </View>
//         );
//     }
// }

// export default class HorizontalFlatList extends Component {

//     render(){
//         return(
//             <View
//                 style={{
//                     flex: 1,
//                     flexDirection: 'column',
//                     marginTop: Platform.OS === 'android' ? 34:0
//                 }}>
//                 <View style={{ height: 150 }}>
//                 <FlatList
//                     style={{
//                         backgroundColor: 'black',
//                         opacity: 0.5,
//                     }}
//                     horizontal={true}
//                     renderItem={({ item, index}) => {
//                         return {
//                             <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>
//                             </HorizontalFlatListItem>);
//                         }}
//                     >
//                 </FlatList>
//                 </View>
//             </View>
//         );
//     }
// }