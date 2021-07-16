import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import api from '../server/api';


export default function login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [apelido, setApelido] = useState('');
    const [nome, setNome] = useState('');
    const [status, setStatus] = useState('');
    const [login, setLogin] = useState('');


    async function handleSubmit() {
        const response = await api.post('/usuario', {
            email,
            senha,
            apelido,
            status,
            login,
            nome
        })

        const { _id } = response.data;

        await AsyncStorage.setItem('usuario', _id);


        navigation.navigate('list');

    }

    return (
        <KeyboardAvoidingView enabled={Platform.OS == 'android'} behavior="height" style={styles.container}>

            <Text style={styles.titulo}>FAÇA SEU CADASTRO</Text>


            <ScrollView style={styles.form}>

                <Text style={styles.label}>NOME *</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Seu nome completo"
                    autoCapitalize="words"
                    placeholderTextColor="#FFF"
                    autoCorrect={false}
                    value={nome}
                    onChangeText={setNome}
                />

                <Text style={styles.label}>APELIDO</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Informe seu apelido"
                    autoCapitalize="words"
                    placeholderTextColor="#FFF"
                    autoCorrect={false}
                    value={apelido}
                    onChangeText={setApelido}
                />

                <Text style={styles.label}>EMAIL</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Informe seu email"
                    autoCapitalize="none"
                    placeholderTextColor="#FFF"
                    autoCorrect={false}
                    textContentType="emailAddress"
                    value={email}
                    onChangeText={setEmail}

                />

                <Text style={styles.label}>LOGIN *</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Informe o login desejado"
                    autoCapitalize="none"
                    placeholderTextColor="#FFF"
                    autoCorrect={false}
                    value={login}
                    onChangeText={setLogin}

                />

                <Text style={styles.label}>SENHA *</Text>

                <TextInput
                    style={styles.input}
                    placeholder="informe a senha"
                    autoCapitalize="none"
                    placeholderTextColor="#FFF"
                    autoCorrect={false}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}

                />


                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    titulo: {
        color: '#741B75',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 60

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
        marginTop: 20,
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
