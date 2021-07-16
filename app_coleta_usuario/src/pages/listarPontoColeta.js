import React, { useState, useEffect } from 'react';
import { RefreshControl, View, ScrollView, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
import PontoColeta from '../components/pontoColeta';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../server/api';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function listarPontoColeta({ navigation }) {
    const [solicitacoes, setSolicitacoes] = useState([]); 
    const [refreshing, setRefreshing] = React.useState(false);

    async function CarregarPonto() {
        const response = await api.get('/ponto/listar')
        setSolicitacoes(response.data)
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        CarregarPonto();
        wait(2000).then(() => setRefreshing(false));
    }, []);


    useEffect(() => {

        CarregarPonto();
        setRefreshing(false);

    }, []); 
    //  {solicitacoes.map(solicitacao => <Solicitacao  solicitacao={solicitacao}/>)}
    return (
        <KeyboardAvoidingView enabled={Platform.OS == 'android'} behavior="height" style={styles.container}>

            <View style={styles.container}>
                <Text style={styles.titulo}>PONTOS DE COLETA CADASTRADOS</Text>

                <ScrollView>
                    {solicitacoes.map(ponto => <PontoColeta style={styles.ponto} key={ponto._id} ponto={ponto} />)}

                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 30

    },
    titulo: {
        color: '#741B75',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'

    },
    ponto: {
        marginTop: 20,

    },
});

