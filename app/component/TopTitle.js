import React, {Component,PropTypes} from 'react';
import {View,StyleSheet,Image,Text,Dimensions} from 'react-native';


let {height, width} = Dimensions.get('window');

import arrow from '../image/arrow.png'

export default class TopTitle extends Component{
    constructor(props){
        super(props);
        this.state={
            styles:{
                container:{
                    alignItems:'center',
                    justifyContent:'center',
                },
                Image:{
                    alignSelf:'flex-start',
                    justifyContent:'flex-start',
                },
                Text:{
                    alignSelf:'center',
                    justifyContent:'center',
                }
            }
        }
    }
    render(){
        if(this.props.isThress){
            return (
                <View style={[Styles.container,this.props.styles.container]}>
                    <Image style={Styles.ImageLeft} source={arrow}></Image>
                    <View style={Styles.center}><Text style={Styles.text}>{this.props.Title}</Text></View>
                    <Image style={Styles.ImageRight} source={arrow}></Image>
                </View>
            )
        }else{
            return (
                <View style={[Styles.container,this.props.styles.container]}>
                    <Image style={Styles.ImageLeft} source={arrow}></Image>
                    <View style={Styles.center}><Text style={Styles.text}>{this.props.Title}</Text></View>
                </View>
            )
        }
    }
}

let Styles=StyleSheet.create({
    container:{
        // justifyContent:'center',
        flexWrap:'wrap',
        height:0.08*height,
        width:width,
        backgroundColor:'#019FF0',

    },
    center:{
        width:0.8*width,
        height:0.08*height,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        textAlign:'center',
        fontSize:0.04*height,
        color:'#FFFFFF',
    },
    ImageLeft:{
        height:0.08*height,
        width:0.1*width,
    },
    ImageRight:{
        height:0.08*height,
        width:0.1*width,
        // alignItems:'flex-end',
    }
})

TopTitle.defaultProps={
    styles:StyleSheet.create({
        container:{

        }
    }),
    Title:'机票查询',
    _onPress:function(){
        console.log('点击按钮');
    },
    isThress:false,
};

TopTitle.PropTypes={
    style:PropTypes.object,
    Title:PropTypes.string,
    _onPress:PropTypes.func,
    isThress:PropTypes.bool,
}