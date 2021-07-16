import React, { useState,useEffect } from 'react';
import {ScrollView,handleEditPress, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, StyleSheet, }  from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather as Icon } from '@expo/vector-icons';


import api from '../server/api';


export default function cooperativa({ navigation }) {
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');
    const [qtCooperados, setQtCooperados] = useState('');
    useEffect(() => {
        async function loadCooperativa() {
            try {
                const response = await api.get('/cooperativa/listar');
                setNome(response.data.nome);
                setCnpj(response.data.cnpj);
                setEndereco(response.data.endereco);
                setQtCooperados(response.data.qtCooperados.toString());


            } catch (e) {
                console.log(e);
            }
        }

        loadCooperativa();

    }, []);

    async function handleSubmit() {
        try {
            const response = await api.post('/cooperativa/alterar', {
                nome,
                cnpj,
                endereco,
                qtCooperados,
            });
            alert("Dados da cooperativa atualizados com sucesso!");

        } catch (e) {
            console.log(e);
        }

    }
    return (
        <KeyboardAvoidingView  enabled={Platform.OS == 'android'} behavior="height" style={styles.container}>
           
           <Text style={styles.titulo}> COOPERATIVA CADASTRADA</Text>

           <ScrollView style={styles.form}> 
           
            <Text style={styles.label}>NOME DA COOPERATIVA </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira o  nome da cooperativa "
                    placeholderTextColor="#FFF"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={nome}
                    onChangeText={setNome}
                />
            <Text style={styles.label}>CNPJ</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira o CNPJ"
                    placeholderTextColor="#FFF"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={cnpj}
                    onChangeText={setCnpj}
                />
            <Text style={styles.label}>ENDEREÇO</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira o endereço"
                    placeholderTextColor="#FFF"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={endereco}
                    onChangeText={setEndereco}
                />
            <Text style={styles.label}>QUANTIDADE DE FUNCIONARIOS</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira o número de funcionarios"
                    placeholderTextColor="#FFF"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={qtCooperados}
                    onChangeText={setQtCooperados}
                />         

            <TouchableOpacity  onPress={handleSubmit}  style={styles.button}>
                    <Text style={styles.buttonText}>Editar informações</Text>                  

            </TouchableOpacity>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    checkbox:{
        borderColor:'#741B75',
        backgroundColor:"#FFF",
        marginTop: 10,
        marginLeft: 0,
        marginRight: 0,        
    },
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
        marginTop: 12,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },

});