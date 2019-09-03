import React from 'react';
import {
 StyleSheet,
 Text,
 View,
 KeyboardAvoidingView,
 ScrollView,
 TouchableOpacity,
 Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IconText from '../components/IconText';
import IconTextInput from '../components/IconTextInput';
import RoundButton from '../components/RoundButton';
import VehicleItem from '../components/VehicleItem';


class RegisterUserScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle : (
                <IconText iconName = {'ios-car'} size = {20}>
                    회원가입
                </IconText>
            ),
            headerLeft : (
                <TouchableOpacity
                    style={{ paddingLeft: 15 }}
                    onPress={() => {
                        navigation.goBack(null);
                    }}
                >
                    <Ionicons name={'ios-close'} size={44} color={'#aaa'} />
                </TouchableOpacity>
            )
        }
    }
 render() {
   return (
     <KeyboardAvoidingView
       style={{
         flex: 1,
         backgroundColor: 'white',
       }}
       behavior="padding"
       keyboardVerticalOffset={64}
     >
       <ScrollView
         contentContainerStyle={{
           flex: 1,
           flexDirection: 'column',
           justifyContent: 'center',
         }}
       >
        <Text style={{ color: '#aaa' }}>
            <Ionicons name={'ios-warning'} /> 회원가입하시려는 본인의 정보를 정확히 입력해주세요.
        </Text>
         <View style={styles.container}>
           {/* <VehicleItem /> */}
           <IconTextInput
             style={{ marginTop: 10 }}
             iconName={'ios-list'}
             placeholder={'$class'}
             autoFocus={true}
           />
           <IconTextInput
             style={{ marginTop: 10 }}
             iconName={'ios-pricetag'}
             placeholder={'balance'}
           />
           <IconTextInput
             style={{ marginTop: 10 }}
             iconName={'ios-pricetag'}
             placeholder={'email'}
           />
           <IconTextInput
             style={{ marginTop: 10 }}
             iconName={'ios-pricetag'}
             placeholder={'firstname'}
           />
           <IconTextInput
             style={{ marginTop: 10 }}
             iconName={'ios-pricetag'}
             placeholder={'lastname'}
           />
           <RoundButton
             iconName={'ios-add'}
             style={{ marginTop: 10 }}
             title={'회원 가입하기'}
             onPress={() => {
                Alert.alert(
                    '주의',
                    '확실히 회원가입을 하시겠습니까?',
                    [
                      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {text: 'OK', onPress: () => {
                        this.props.navigation.navigate('Login')
                      }},
                    ],
                    {cancelable: false},
                  );
                  
              }}
           />
         </View>
       </ScrollView>
     </KeyboardAvoidingView>
   );
 }
}
const styles = StyleSheet.create({
 container: {
   alignSelf: 'center',
   flexDirection: 'column',
   padding: 30,
   alignItems: 'center',
 },
});
export default RegisterUserScreen;