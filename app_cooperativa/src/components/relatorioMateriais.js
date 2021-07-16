import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';


function RelatorioMateriais({ solicitacao }) {


    useEffect(() => {

    }, []);


        return (
            <View style={styles.listItem}>

                <Text style={styles.dados}>TIPO DO MATERIAL: {solicitacao.tipo} </Text>
                <Text style={styles.dados}>QUANTIDADE COLETADA: {solicitacao.quantidade} </Text>
                <Text style={styles.dados}>DATA QUE FOI COLETADO: {solicitacao.dataColeta} </Text>                
            
                   
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
        marginTop: 12,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default (RelatorioMateriais);