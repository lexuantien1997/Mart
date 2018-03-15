import React,{Component} from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    Dimensions,
    TouchableWithoutFeedback    
} from "react-native"

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Hideo from "../../components/Hideo"
import Makiko from "../../components/Makiko"

const { height, width } = Dimensions.get("window");


export default class HomeScreen extends Component {
    render(){
        return(
            <View style = {{ flex: 1}}>
                <View style = {{ flex: 1}} >
                    <Hideo
                        placeHolder ={ "What're you looking for ?" }
                        iconClass={FontAwesomeIcon}
                        iconName={'envelope'}
                        iconColor={'white'}
                         // this is used as backgroundColor of icon container view.
                        iconBackgroundColor={'#f2a59d'}
                        inputStyle={{ color: '#464949' }}
                    />
                </View>
                <View style = {{ flex: 1}}>
                    <Makiko
                        label={'Comment'}
                        iconClass={FontAwesomeIcon}
                        iconName={'comment'}
                        iconColor={'white'}
                        inputStyle={{ color: '#db786d' }}
                    />
                </View>
            </View>               
        );
    }
}

