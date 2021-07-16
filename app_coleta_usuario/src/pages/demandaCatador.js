import React, {useState,useEffect} from 'react';
import { View, ScrollView,Picker, AsyncStorage, KeyboardAvoidingView,Platform, Image, Text,TextInput,TouchableOpacity, StyleSheet,} from 'react-native';
import CatadorDemanda from '../components/catadorDemanda';


export default function demandCatador({navigation}){

    const solicitacoes = [

     {
        _id:'1',
       pontoColeta:'aeb',
       pontoRef:'centro',
       data:'12/07/2020',
       hora:'13:30',

    }, 
     
    ]

       
    async function handleSubmit(){
              
    }
    //  {solicitacoes.map(solicitacao => <Solicitacao  solicitacao={solicitacao}/>)}
    return (
        <KeyboardAvoidingView enabled={Platform.OS == 'android'} behavior="height" style={styles.container}>
        
        <View style={styles.container}>
           <Text style={styles.titulo}>MINHAS DEMANDAS/CATADOR</Text>
           
           <ScrollView>
           {solicitacoes.map(solicitacao => <CatadorDemanda style={styles.solicitacao} key={solicitacao._id} solicitacao={solicitacao}/>)}
              
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

