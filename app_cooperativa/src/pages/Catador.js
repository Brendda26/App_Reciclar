import React, { useState,useEffect } from 'react';
import {ScrollView, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, StyleSheet, }  from 'react-native';
import { CheckBox } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

import api from '../server/api';


export default function Catador({navigation}){
    const [nomeCatador,setNomeCatador] = useState('');
    const [apelido,setApelido] = useState('');
    const [telefone,setTelefone] = useState('');
    const [dtAdmissao,setDtAdmissao] = useState('');
    const [cpf,setCpf] = useState('');
    const [rg,setRg] = useState('');
    const [dtNascimento,setDtNascimento] = useState('');
    const [status,setStatus] = useState('');
    const [login,setLogin] = useState('');
    const [senha,setSenha] = useState('');

    const [temAtivo, setTemAtivo] = useState(false);
    const [temInativo, setTemInativo] = useState(false);


   useEffect(() => {
        async function CarregarCatador(){
            const response = await api.get('/catador/listar');

            setNomeCatador(response.data.nomeCatador);
            setApelido(response.data.apelido);
            setTelefone(response.data.telefone);
            setDtNascimento(response.data.dtNascimento);
            setDtAdmissao(response.data.dtAdmissao);
            setRg(response.data.rg);
            setCpf(response.data.cpf);
            setLogin(response.data.login);
            setSenha(response.data.senha);
            setStatus(response.data.status);
            
        }
        
        CarregarCatador();

    },[]); 
    
    async function handleSubmit(){
        const response = await api.post('/catador/adicionar',{
            nomeCatador,
            apelido,
            telefone,
            dtAdmissao,
            cpf,
            rg,
            dtNascimento,
            status,
            login,
            senha,
           
        })

        const {_id} = response.data;
        
        await AsyncStorage.setItem('catador', _id);
        
        navigation.navigate('Lista de Catadores');
       
    }


    return (
        <KeyboardAvoidingView  enabled={Platform.OS == 'android'} behavior="height" style={styles.container}> 

            <Text style={styles.titulo}>CADASTRAR CATADOR</Text>

            <ScrollView style={styles.form}> 

            <Text style={styles.label}>NOME*</Text>
                <TextInput
                    style = {styles.input}
                    placeholder= "Insira o nome "
                    placeholderTextColor="#FFF"
                    autoCapitalize="words" 
                  //  autoCorrect={false}       
                    value={nomeCatador}
                    onChangeText={setNomeCatador}
                />
            <Text style={styles.label}>APELIDO</Text>
                <TextInput
                    style = {styles.input}
                    placeholder= "Insira o apelido do catador "
                    placeholderTextColor="#FFF"
                    autoCapitalize="words" 
                  //  autoCorrect={false}       
                    value={apelido}
                    onChangeText={setApelido}
                />
            <Text style={styles.label}>CPF*</Text>
                <TextInput
                    style = {styles.input}
                    placeholder= "Insira O CPF"
                    placeholderTextColor="#FFF"
                    autoCapitalize= "none"
                    autoCorrect= {false}  
                    value={cpf}
                    onChangeText={setCpf} 
                    keyboardType="numeric"
                        
                />
            <Text style={styles.label}>RG*</Text>
                 <TextInput
                    style = {styles.input}
                    placeholder= "Insira o RG"
                    placeholderTextColor="#FFF"
                    autoCapitalize= "none"
                    autoCorrect= {false}  
                    value={rg}
                    onChangeText={setRg} 
                    keyboardType="decimal-pad"    
                />
            <Text style={styles.label}>DATA DE NASCIMENTO</Text>
                <TextInput
                    style = {styles.input}
                    placeholder= "Insira a data/nascimento"
                    placeholderTextColor="#FFF"
                    autoCapitalize= "none"
                    autoCorrect= {false}  
                    value={dtNascimento}
                    onChangeText={setDtNascimento}     
                />
            <Text style={styles.label}>TELEFONE</Text>
                <TextInput
                    style = {styles.input}
                    placeholder= "Insira o telefone"
                    placeholderTextColor="#FFF"
                    autoCapitalize= "none"
                    autoCorrect= {false}  
                    value={telefone}
                    onChangeText={setTelefone}
                    keyboardType="phone-pad"     
                />
            <Text style={styles.label}>DATA DA ADMISSÃO</Text>
                <TextInput
                    style = {styles.input}
                    placeholder= "Insira a data que foi contratado"
                    placeholderTextColor="#FFF"
                    autoCapitalize= "none"
                    autoCorrect= {false}  
                    value={dtAdmissao}
                    onChangeText={setDtAdmissao}     
                />
                <Text style={styles.label}>LOGIN*</Text>
                <TextInput
                    style = {styles.input}
                    placeholder= "Insira o login"
                    placeholderTextColor="#FFF"
                    autoCapitalize= "none"
                    autoCorrect= {false}  
                    value={login}
                    onChangeText={setLogin}     
                />
            <Text style={styles.label}>SENHA*</Text>
                <TextInput
                    style = {styles.input}
                    placeholder= "Insira a senha"
                    placeholderTextColor="#FFF"
                    autoCapitalize= "none"
                    autoCorrect= {false}  
                    value={senha}
                    onChangeText={setSenha}     
                />
                <Text style={styles.label}>STATUS</Text>
                <CheckBox
                        containerStyle={styles.checkbox}
                        title='Ativo'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checkedColor='#741B75'
                        checked = {temAtivo}
                        onPress={() => setTemAtivo(!temAtivo)}
                />
                 <CheckBox
                        containerStyle={styles.checkbox}
                        title='Inativo'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checkedColor='#741B75'
                        checked = {temInativo}
                        onPress={() => setTemInativo(!temInativo)}
                />
                
           
           

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>                  
            </TouchableOpacity>
                
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Editar</Text>
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
