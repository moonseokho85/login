import React, { Component } from 'react'
import { Text, View, StyleSheet,KeyboardAvoidingView , Alert } from 'react-native'
import IconTextInput from '../components/IconTextInput'
import RoundButton from '../components/RoundButton'
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';


export default class LoginScreen extends Component {
    render() {
        return (
            <KeyboardAvoidingView 
                style ={{
                    flex:1,
                    flexDirection:'column',
                    justifyContent:'center'
                }}
                behavior='padding'

            >
            <View style={styles.container}>
                <Text
                    style={{
                        fontSize: 30,
                        color:'tomato',
                        marginTop:-20,
                        fontWeight:"200"
                    }}
                
                > 
                   CAR AUTION
                </Text>
                <IconTextInput 
                    style={{marginTop :10 , marginBottom : 20}}
                    iconName='ios-person'
                    placeholder = "아이디"
                />
                <IconTextInput 
                    style={{marginTop :10}}
                    iconName='ios-mail'
                    placeholder = "이메일"
                />
                <RoundButton 
                    style={{marginTop:10}}
                    title = {'로그인'}
                    onPress = {()=>{
                        this.props.navigation.navigate('Home')
                    }}
                
                />

                <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn}
                    disabled={this.state.isSigninInProgress} 
                />

                <RoundButton 
                    style={{marginTop:10}}
                    title = {'회원가입'}
                    onPress = {()=>{
                        Alert.alert(
                            '주의',
                            '회원가입을 정말 하시겠습니까?',
                            [
                              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                              {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                              },
                              {text: 'OK', onPress: () => {
                                this.props.navigation.navigate('Register')
                              }},
                            ],
                            {cancelable: false},
                          );
                    }}
                
                />
            </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        flexDirection:'column',
        padding:30,
        alignItems :'center'
    }
})
 
