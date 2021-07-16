import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api from '../server/api';
import { TouchableOpacity } from 'react-native-gesture-handler';



async function cancelar(value){
    console.log("cancelando "+value) 
    const response = await api.post('/solicitacao/cancelar',{_id:value,})
    console.log(response.data)    
    
    

}

function SolicitacaoColeta({ solicitacao }) {
    

    return (
        <View style={styles.listItem}>

            <Text style={styles.dados}>PONTO DE COLETA: {solicitacao.ponto['nome']} </Text>
            <Text style={styles.dados}>SOLICITANTE: {solicitacao.usuario['login']} </Text>
            <Text style={styles.dados}>DATA: {solicitacao.dtColeta} </Text>
            <Text style={styles.dados}>HORA: {solicitacao.hora} </Text>
            <Text style={styles.dados}>STATUS: {solicitacao.status} </Text>
            
            {solicitacao.status == 'Solicitado' &&
                <TouchableOpacity
                 style={styles.button}
                 onPress={()=>cancelar(solicitacao._id)} 
                 >
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            }
        </View>

    )
}

const styles = StyleSheet.create({
    dados: {
        color: '#444',
        marginBottom: 10,
        fontSize: 14
    },
    listItem: {
        padding: 20,
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: "#741B75",
        marginBottom: 10,


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

export default (SolicitacaoColeta);