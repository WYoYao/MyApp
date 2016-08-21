import React, {Component,PropTypes} from 'react';
import {View,StyleSheet,Image,Text} from 'react-native';

export default class TopTitle extends Component{
    render(){
        return (
            <View style={this.props.style.container}><Text>111111111111111</Text></View>
        )
    }
}

TopTitle.defaultProps={
    style:StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'#019FF0',
        }
    }),
    Title:'机票查询',
    _onPress:function(){
        console.log('点击按钮');
    }
};

TopTitle.PropTypes={
    style:PropTypes.object,
    Title:PropTypes.string,
    _onPress:PropTypes.func,
}