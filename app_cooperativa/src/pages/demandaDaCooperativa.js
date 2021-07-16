import React, {useState,useEffect} from 'react';
import { View, ScrollView,Picker, AsyncStorage, KeyboardAvoidingView,Platform, Image, Text,TextInput,TouchableOpacity, StyleSheet,} from 'react-native';
import DemandaCooperativa from '../components/demandasCooperativa';


export default function DemandaCoop({navigation}){

    const solicitacoes = [

        {
            _id:'1',
            data:'21/12/20',
            hora:'10:40',
            pontoColeta:'pontoC',
            status:'solicitado'
        }, 
         {
            _id:'2',
            data:'22/12/20',
            hora:'11:40',
            pontoColeta:'pontoD',
            status:'solicitado'
        },
        {
            _id:'3',
            data:'22/12/20',
            hora:'11:40',
            pontoColeta:'pontoD',
            status:'solicitado'
        },
     
     
    
     
    ]

       
    async function handleSubmit(){
              
    }
    //  {solicitacoes.map(solicitacao => <Solicitacao  solicitacao={solicitacao}/>)}
    return (
        <KeyboardAvoidingView enabled={Platform.OS == 'android'} behavior="height" style={styles.container}>
        
        <View style={styles.container}>
           <Text style={styles.titulo}>DEMANDAS DA COOPERATIVA</Text>
          
           
           <ScrollView>          

                 {solicitacoes.map(solicitacao => <DemandaCooperativa style={styles.solicitacao} key={solicitacao._id} solicitacao={solicitacao}/>)}
              
           </ScrollView>

                   

        </View>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
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
    picker:{
        borderColor: '#741B75',
        color: '#741B75',
        marginBottom: 10
    },
    titulo:{
        color: '#741B75',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,     
        textAlign: 'center' ,
        marginTop: 60         

    },    
    checkbox:{
        borderColor:'#741B75',
        backgroundColor:"#FFF",
        marginTop: 10,
        marginLeft: 0,
        marginRight: 0,        
    },
    
    label:{
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 2,
    },
    form: {        
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        margin: 30,
        marginTop: 20,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom:5,
        borderRadius: 4,
        backgroundColor: "#D8BFD8"         

    },
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

