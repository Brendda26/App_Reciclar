import React, {useState,useEffect} from 'react';
import { ScrollView, AsyncStorage, KeyboardAvoidingView,Platform, Image, Text,TextInput,TouchableOpacity, StyleSheet,} from 'react-native';


import logo from '../../assets/logos/logo_horizontal_ft.png';
//import { func } from '@hapi/joi';


export default function logoff(){
    
   async function sair(){
        await AsyncStorage.removeItem('usuario');
        await AsyncStorage.removeItem('login');

        navigation.navigate('login');
    }

    function cancelar(){
        navigation.navigate('sobre');
    }


    return (
    <KeyboardAvoidingView enabled={Platform.OS == 'android'} behavior="height" style={styles.container}>

        <Image source= {logo} style={styles.imagem}/>
            
        <ScrollView style={styles.form}>
        
        
        <Text style={styles.texto}>Deseja sair realmente?</Text>

        <TouchableOpacity onPress={sair} style={styles.button}>
            <Text style={styles.buttonText}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={cancelar} style={styles.button}>
            <Text style={styles.buttonText}>Não</Text>
        </TouchableOpacity>


        </ScrollView>
    </KeyboardAvoidingView>    
    )
}
const styles = StyleSheet.create({
    erro:{
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 8
    },
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 10,
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
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom:20,
        borderRadius: 4,
        backgroundColor: "#D8BFD8"   
    },

    button: {
        height: 42,
        backgroundColor: '#741B75',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 5,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    texto:{
        fontSize: 15,
    },
    imagem:{
        marginTop:40,
    },
    
});
