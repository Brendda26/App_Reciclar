import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';

import api from '../server/api';
import logo from '../../assets/logos/logo_horizontal_ft.png';



export default function login({ navigation }) {
    const [situacao, setSituacao] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const storeData = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value)
        } catch (e) {
          console.log(e)
        }
      }
    
    async function handleSubmit() {

        const response = await api.post('/usuario/validar', {
            login,
            senha
        })
        
        const { _id } = response.data;

        if (_id != '0') {
            storeData('@usuario', _id)
            storeData('@login', login)
            navigation.navigate('Faça sua solicitação');

        } else {

            storeData('@usuario', "")
            storeData('@login', "")
            setSituacao("Login e senha inválidos!")
        }


    }

    


    return (
        <KeyboardAvoidingView enabled={Platform.OS == 'android'} behavior="height" style={styles.container}>
            
            <Image source={logo} />

            <View style={styles.form}>

                <Text style={styles.erro}>{situacao}</Text>

                <Text style={styles.label}>LOGIN *</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Informe o login"
                    autoCapitalize="none"
                    placeholderTextColor="#FFF"
                    autoCorrect={false}
                    value={login}
                    onChangeText={setLogin}

                />

                <Text style={styles.label}>SENHA *</Text>

                <TextInput
                    style={styles.input}
                    placeholder="informe sua senha"
                    autoCapitalize="none"
                    placeholderTextColor="#FFF"
                    autoCorrect={false}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}

                />
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastrar Usuário')} >
                    <Text style={styles.link}>Cadastre-se</Text>
                </TouchableOpacity>



            </View>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    link: {
        textAlign: "center",
        marginTop: 9,
        textDecorationLine: "underline",
        fontSize: 16,
        color: '#741B75'


    },
    erro: {
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 8
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        margin: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: "#D8BFD8"
    },

    button: {
        height: 42,
        backgroundColor: '#741B75',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
