import React, {Component,PropTypes} from 'react';
import {View,StyleSheet,Image,Text} from 'react-native';



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
                width:500,
                height:500,
                backgroundColor:'red',
                justifyContent:'flex-start',
                flexWrap:'wrap',
            }}>
                <View style={
                    [{
                    width:100,
                    height:500,
                    backgroundColor:'green',
                    // alignSelf:'flex-start',
                }]
                }></View>
                <View style={
                    [{
                    width:300,
                    height:500,
                    backgroundColor:'green',
                    // alignSelf:'center',
                }]
                }></View>

            </View>
        )
    }
}
