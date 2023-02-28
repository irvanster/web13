import axios from "axios"
import { useState } from "react"
import { Pressable, TextInput, ToastAndroid, View } from "react-native"
import {Text} from '../../components/commons'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login =()=> {
    const [formLogin, setFormLogin] = useState({
        username: '',
        password: '',
    })
    const handleLogin = ()=> {
        axios({
            url: 'http://192.168.1.4:5000/api/v1/auth/login',
            method: 'post',
            data: formLogin
        }).then((res)=> {
            AsyncStorage.setItem('@userData', JSON.stringify(res.data.data))
            ToastAndroid.show('Sukses Login.', ToastAndroid.SHORT)
        }).catch((err)=> {
            ToastAndroid.show('Gagal Login.', ToastAndroid.SHORT)
            console.log(err.response)
        })
    }
    return(
        <View style={{ padding: 15 }}>
            <View style={{ marginBottom: 15 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>username</Text>
                <TextInput 
                    onChangeText={(text)=> setFormLogin({...formLogin, username: text}) } 
                    placeholder="Input username"
                    style={{
                        padding: 15,
                        width: '100%',
                        borderBottomWidth: 1,
                        borderColor: '#c4c4c4',
                        paddingLeft: 0 // padding left hilangin default rn
                    }}
                    selectionColor={'brown'}
                    autoCapitalize={'none'}
                    // placeholderTextColor='#f0f0f0'
                />
            </View>
            <View style={{ marginBottom: 15 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Password</Text>
                <TextInput 
                    onChangeText={(text)=> setFormLogin({...formLogin, password: text}) } 
                    placeholder="Input password"
                    style={{
                        padding: 15,
                        width: '100%',
                        borderBottomWidth: 1,
                        borderColor: '#c4c4c4',
                        paddingLeft: 0 // padding left hilangin default rn
                    }}
                    selectionColor={'brown'}
                    secureTextEntry={true}
                    autoCapitalize={'none'}
                    // placeholderTextColor='#f0f0f0'
                />
            </View>
            <Pressable onPress={handleLogin}
                style={{ 
                    backgroundColor:'#6A4029',
                    padding: 22,
                    borderRadius: 20
                 }}
            >
                {/* <Text style={{ color: '#F6F6F9' }}>Save Product</Text> */}
                <Text color="#F6F6F9" align={'center'}>Login</Text>
            </Pressable>
        </View>
    )
}
export default Login