import React, { useState, useEffect } from 'react';
import { RefreshControl, View, ScrollView, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
import Catador from '../components/listarCatador';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../server/api';


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function listaCatador({navigation}){

   const [solicitacoes, setSolicitacoes] = useState([]); 
   const [refreshing, setRefreshing] = React.useState(false);
       
    async function CarregarCatador(){
        const response = await api.get('/catador/listar')
        setSolicitacoes(response.data)
    }
    
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        CarregarCatador();
        wait(2000).then(() => setRefreshing(false));
    }, []);


    useEffect(() => {

        CarregarCatador();
        setRefreshing(false);

    }, []); 



    return (
        <KeyboardAvoidingView enabled={Platform.OS == 'android'} behavior="height" style={styles.container}>
        
        <View style={styles.container}>
           <Text style={styles.titulo}>CATADORES CADASTRADOS</Text>
           
           <ScrollView>
           {solicitacoes.map(solicitacao => <Catador style={styles.solicitacao} key={solicitacao._id} solicitacao={solicitacao}/>)}
              
           </ScrollView>
        </View>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        paddingTop: 30
        
    },
    titulo:{
        color: '#741B75',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,     
        textAlign: 'center'  
        
    },
    solicitacao:{
        marginTop:20,

    },
});

