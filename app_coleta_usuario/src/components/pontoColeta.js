import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


function PontoColeta({ ponto }) {

    useEffect(() => {

    }, []);


    return (
        <View style={styles.listItem}>

            <Text style={styles.dados}>NOME: {ponto.nomePontoColeta} </Text>
            <Text style={styles.dados}>RUA: {ponto.rua} </Text>
            <Text style={styles.dados}>BAIRRO: {ponto.bairro} </Text>
            <Text style={styles.dados}>NÚMERO DA CASA/APARTAMENTO: {ponto.numeroCasa} </Text>
            <Text style={styles.dados}>RESPONSÁVEL: {ponto.responsavel} </Text>
            <Text style={styles.dados}>PONTO DE REFERÊNCIA: {ponto.pontoReferencia} </Text>
            <Text style={styles.dados}>STATUS: {ponto.status} </Text>



            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Excluir</Text>
            </TouchableOpacity>

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

export default (PontoColeta);