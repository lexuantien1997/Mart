import React,{Component} from "react";
import CustomTextinput from "../CustomTextinput"
import PropTypes from "prop-types"

import Entypo from  "react-native-vector-icons/Entypo"

const mainColor = "#fff";

export default class Password extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputRef: null,
            value:"",
            isCorrect: 0
        };
    }


    render(){
        return(
            <CustomTextinput 
                labelStyle = {{color: mainColor ,fontSize:15}}                            
                marginTop= {15}
                cHeight={47}
                iconClass={Entypo}
                iconName={"lock"}
                iconColor = {mainColor}
                hint = {"Password"}
                hintTextColor = {mainColor}
                selectionColor = {mainColor}
                hidePass = {true}     
                ref = {(ref) => { this.state.inputRef = ref; }}
                onSubmitEditing = { this.props.changeFocus.bind(this) }                                            
            />     
        );
    }
}

Password.propTypes = {
    changeFocus: PropTypes.func
}