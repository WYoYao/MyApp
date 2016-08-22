import React, {Component,PropTypes} from 'react';
import {View,StyleSheet,Image,Text,Platform,StatusBar} from 'react-native';

let propTypes={...View.propTypes};

console.log(propTypes);

export default class Demo extends Component{
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
        return (
            <View style={{
                flex:1,
                backgroundColor:'#ffffff',
                justifyContent:'center',
                alignItems:'center',
            }}>
                <StatusBar></StatusBar>
            </View>
        )
    }
}
