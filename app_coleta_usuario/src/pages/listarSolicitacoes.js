import React, { useState, useEffect } from 'react';
import { RefreshControl, View, ScrollView, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
import SolicitacaoColeta from '../components/solicitacaoColeta';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../server/api';


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function listaSolicitacao({ navigation }) {
    const [solicitacoes, setSolicitacoes] = useState([]);
    const [usuario, setUsuario] = useState('');
    const [refreshing, setRefreshing] = React.useState(false);

    async function CarregarSolicitacoes() {
        const response = await api.get('/solicitacao/listar')
        setSolicitacoes(response.data)
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        CarregarSolicitacoes();
        wait(2000).then(() => setRefreshing(false));
    }, []);


    useEffect(() => {

        CarregarSolicitacoes();
        setRefreshing(false);

    }, []);

    return (
        <KeyboardAvoidingView enabled={Platform.OS == 'android'} behavior="height" style={styles.container}>

            <View style={styles.container}>






                <Text style={styles.titulo}>MINHAS SOLICITAÇÕES</Text>

                <ScrollView

                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }


                >
                    {solicitacoes.map(solicitacao => <SolicitacaoColeta style={styles.solicitacao} key={solicitacao._id} solicitacao={solicitacao} />)}

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
    solicitacao: {
        marginTop: 20,

    },
});

