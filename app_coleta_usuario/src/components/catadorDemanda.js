import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';



import { TouchableOpacity } from 'react-native-gesture-handler';


function CatadorDemanda({ solicitacao }) {


    useEffect(() => {

    }, []);


        return (
            <View style={styles.listItem}>

                <Text style={styles.dados}>PONTO DE COLETA: {solicitacao.pontoColeta} </Text>
                <Text style={styles.dados}>PONTO DE REFERÊNCIA: {solicitacao.pontoRef} </Text>
                <Text style={styles.dados}>DATA: {solicitacao.data} </Text>
                <Text style={styles.dados}>HORA: {solicitacao.hora} </Text>
                

            
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Realizada</Text>
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
        marginTop: 12,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default (CatadorDemanda);