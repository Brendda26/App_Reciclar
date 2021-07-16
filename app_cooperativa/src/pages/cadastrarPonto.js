import React, { useState,useEffect } from 'react';
import {ScrollView, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, StyleSheet, }  from 'react-native';
import { CheckBox } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'


import api from '../server/api';


export default function pontoColeta({navigation}){
    const [nome,setNome] = useState('');
    const [rua,setRua] = useState('');
    const [bairro,setBairro] = useState('');
    const [pontoReferencia,setPontoReferencia] = useState('');
    const [diasColeta,setDiacoleta] = useState('');
    const [publico,setPublico] = useState('');
    const [status,setStatus] = useState('');
    const [horarios,setHora] = useState("");


    useEffect(() => {
        async function loadPontoColeta(){
            const response = await api.get('/ponto/listar');

            setNome(response.data.nome);
            setRua(response.data.rua);
            setBairro(response.data.bairro);
            setPontoReferencia(response.data.pontoReferencia);
            setDiacoleta(response.data.diasColeta);
            setPublico(response.data.publico);
            setStatus(response.data.status);
            setHora(response.data.horarios);
        }
        
        loadPontoColeta();

    },[]); 
    
    async function handleSubmit(){
        const response = await api.post('/ponto/adicionar',{
            nome,
            rua,
            bairro,
            pontoReferencia,
            diasColeta,
            publico,
            status,
            horarios,
        })
        navigation.navigate('Lista de Pontos');
    }
    return (
        <KeyboardAvoidingView  enabled={Platform.OS == 'android'} behavior="height" style={styles.container}> 
        
        <Text style={styles.titulo}>CADASTRAR PONTO DE COLETA</Text>

        <ScrollView style={styles.form}> 

            <Text style={styles.label}>NOME DO PONTO DE COLETA*</Text>
                 <TextInput
                    style = {styles.input}
                    placeholder= "Insira o  nome do ponto de coleta "
                    placeholderTextColor="#FFF"
                    autoCapitalize=   "words" 
                    autoCorrect= {false}       
                    value={nome}
                    onChangeText={setNome}
                />
            <Text style={styles.label}>RUA</Text>
                 <TextInput
                    style = {styles.input}
                    placeholder= "Insira a rua"
                    placeholderTextColor="#FFF"
                    autoCapitalize= "none"
                    autoCorrect= {false}  
                    value={rua}
                    onChangeText={setRua}     
                />
            <Text style={styles.label}>BAIRRO</Text>
                 <TextInput
                    style = {styles.input}
                    placeholder= "Insira o bairro"
                    placeholderTextColor="#FFF"
                    autoCapitalize= "none"
                    autoCorrect= {false}  
                    value={bairro}
                    onChangeText={setBairro}     
                />
                 <Text style={styles.label}>PONTO DE REFERENCIA</Text>
                 <TextInput
                    style = {styles.input}
                    placeholder= "Insira um ponto de referência"
                    placeholderTextColor="#FFF"
                    autoCapitalize= "none"
                    autoCorrect= {false}  
                    value={pontoReferencia}
                    onChangeText={setPontoReferencia}     
                />
                 <Text style={styles.label}>DIAS DA SEMANA QUE O MATERIAL SERÁ RECOLHIDO</Text>
                 <TextInput
                    style = {styles.input}
                    placeholder= "Dias de semana"
                    placeholderTextColor="#FFF"
                    autoCapitalize= "none"
                    autoCorrect= {false}  
                    value={diasColeta}
                    onChangeText={setDiacoleta}     
                />
                 <Text style={styles.label}>HORA</Text>
                 <TextInput
                    style = {styles.input}
                    placeholder= "Insira a hora"
                    placeholderTextColor="#FFF"
                    autoCapitalize=   "words" 
                    autoCorrect= {false}       
                    value={horarios}
                    onChangeText={setHora}
                />
                <Text style={styles.label}>TIPO DO PONTO DE COLETA</Text>
                <CheckBox
                        containerStyle={styles.checkbox}
                        title='Público'
                        checkedColor='#741B75'
                        uncheckedColor= '#FFF'
                        checked = {publico}
                        onPress={() => setPublico(!publico)}           
                />
               < Text style={styles.label}>STATUS DO PONTO DE COLETA</Text>
                <CheckBox
                        containerStyle={styles.checkbox}
                        title='ativo'
                        checkedColor='#741B75'
                        uncheckedColor= '#FFF'
                        checked = {status}
                        onPress={() => setStatus(!status)}           
                />
                
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>

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
