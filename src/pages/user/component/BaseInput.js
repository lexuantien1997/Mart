import React,{Component} from "react";
import {
    View,
    Text,
    Dimensions,
    Animated,
    ViewPropTypes,
    TextInput
} from "react-native"
import PropTypes from "prop-types"
export default class BaseInput extends Component{
    static propTypes = {
        label: PropTypes.string.isRequired, // value,
        defaultLabel: PropTypes.string, //default
        labelStyle: Text.propTypes.style, // input style
        labelSize: PropTypes.number, // input size
        editable: PropTypes.bool, // can edit ?
        keyboardType: PropTypes.string,
        returnKeyType: PropTypes.string,
       // style: ViewPropTypes ?  ViewPropTypes.style :View.propTypes.style,
        onChange: PropTypes.func ,

        hintTextColor: PropTypes.string,
        hint: PropTypes.string, // place holder
        selectionColor: PropTypes.string
    } ;

    constructor(props,context) {
        super(props,context);

        this._onChange = this._onChange.bind(this);

        const value = props.label  || props.defaultLabel

        this.state = {
            value
        }
    }

    _onChange(event){
        this.setState({
            value: event.nativeEvent.text
        });

        const onChange = this.props.onChange;
        if(onChange){
            onChange(event)
        }
    }

    componentWillReceiveProps(newProps) {
        const newValue = newProps.value;
        if (newProps.hasOwnProperty("value") && newValue !== this.state.value ){
            this.setState ({
                value: newValue
            });
        }
    }

    inputRef() {
        return this.refs.input;
    }

    clear() {
        this.inputRef.clear();
    }
}