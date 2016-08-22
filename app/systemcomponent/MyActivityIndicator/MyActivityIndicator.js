import React,{Component} from 'react'
import {ActivityIndicator,View} from 'react-native';
import TimerMixin from 'react-timer-mixin';



console.log(TimerMixin);

export default class MyActivityIndicator extends Component{
    render(){
        return(
            <View style={{
                flex:1,
                backgroundColor:'#ffffff',
                justifyContent:'center',
                alignItems:'center',
            }}>
                <ActivityIndicator {...{
                    color:'green',
                    size:'small',
                }}/>
                <ActivityIndicator {...{
                    color:'green',  //制定对应的颜色，默认的为灰色
                    size:'large',   //指示器的大小。small的高度为20，large为36。
                }}/>
            </View>
        )
    }
}