import React,{Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class RoundButton extends Component {\

    static defaultProps = {
        title:'Button',
        onPress:()=>{},
        color:'white'
    }

    render(){
        return(
            <View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    touchWrap :{
        flexDirection:'row',
        height:50
    },
    container : {
        flexGrow:1,
        flexDirection:'row',
        alignItems :'center',
        borderColor:'#aaa',
        backgroundColor:'tomato',
        justifyContent:'center',
        borderRadius:5
    },
    title:{
        color:'#fff',
        fontSize:20
    }
});