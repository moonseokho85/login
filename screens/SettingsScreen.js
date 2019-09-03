import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native';
import IconText from '../components/IconText';

export default class SettingsScreen extends Component {
    render() {
        return (
            <TouchableOpacity
                style = {{
                    flex : 1,
                    alignItems : 'center',
                    justifyContent : 'center'
                }}
                onPress = {() => {
                    this.props.navigation.navigate('Login')
                }}

            >
                <IconText
                    iconName = {'ios-log-out'}
                    size = {20}
                >
                    로그 아웃
                </IconText>
            </TouchableOpacity>
        )
    }
}
