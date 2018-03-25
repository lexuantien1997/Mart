import React,{Component} from "react";
import CustomTextinput from "../CustomTextinput"
import PropTypes from "prop-types"
import Entypo from  "react-native-vector-icons/Entypo"

const mainColor = "#fff";

export default class Email extends Component{

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
                labelStyle = {{color: mainColor,fontSize:15}}
                marginTop= {15}
                cHeight={47}
                iconClass={Entypo}
                iconName={"mail"}
                iconColor = {mainColor}
                hint = {"test@gmail.com"}
                hintTextColor = {mainColor}
                selectionColor = {mainColor}        
                ref = {(ref) => { this.state.inputRef = ref; }}   
                keyboardType = { "email-address" }  
                onSubmitEditing = { this.props.changeFocus.bind(this) }                                 
             />  
        );
    }
}

Email.propTypes = {
    changeFocus: PropTypes.func
}