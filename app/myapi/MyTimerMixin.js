import React,{Component} from 'react';
import {View,Text} from 'react-native';
import TimerMixin from 'react-timer-mixin';

// setTimeout, clearTimeout
// setInterval, clearInterval
// setImmediate, clearImmediate
// requestAnimationFrame, cancelAnimationFrame

export default class MyTimerMixin extends Component{
    constructor(props){
        super(props);
        this.state={
            setTimeoutNumber:0,
            requestAnimationFrameNumber:0,
        }
    }

    componentWillMount(){
        let setTimeoutNumber=this.state.setTimeoutNumber+1;
        let requestAnimationFrameNumber=this.state.requestAnimationFrameNumber+1;
        TimerMixin.setInterval(()=>{
            this.setState({
                setTimeoutNumber:setTimeoutNumber
            })
        },0);


        TimerMixin.requestAnimationFrame(()=>{
            this.setState({
                requestAnimationFrameNumber:requestAnimationFrameNumber,
            })
        });
    }

    render(){
        return(
            <View>
                <Text>这个是对应的setTimeout：{this.state.setTimeoutNumber}</Text>
                <Text>这个是对应的requestAnimationFrame：{this.state.requestAnimationFrameNumber}</Text>
            </View>
        )
    }
}

