import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';
import SolicitacaoColeta from '../components/report_solicitacaoColeta';


import api from '../server/api';
import logo from '../../assets/logos/report_mini.png';



export default function relatorioDeSolicitacoes({ navigation }) {
    const [dtInicial, setDtInicial] = useState("2020-12-01");
    const [dtFinal, setDtFinal] = useState("2021-03-22");
    const [solicitacoes, setSolicitacoes] = useState([]);
    const [fraseRetorno, setFraseRetorno] = useState('');



    async function handleSubmit() {
        const response = await api.post('/solicitacao/relatorio', {
            dtInicial,
            dtFinal
        })
        setSolicitacoes(response.data)
        let t = response.data.length
        if (t > 1) {
            setFraseRetorno(t + " solicitações encontradas para o periódo informado!")
        } else {
            setFraseRetorno(t + " solicitação encontrada para o periódo informado!")
        }

        console.log(solicitacoes)
    }





    return (
        <KeyboardAvoidingView enabled={Platform.OS == 'android'} behavior="height" style={styles.container}>


            <Image source={logo} />
            <Text style={styles.cabecalho}>RELATÓRIO DE SOLICITAÇÕES DE COLETA</Text>
            <View style={styles.form}>
                <Text style={styles.label}>DATA INICIAL</Text>
                <DatePicker
                    style={styles.datepiker}
                    date={dtInicial}
                    format="YYYY-MM-DD"
                    onDateChange={(date) => { setDtInicial(date) }}
                    useNativeDriver={true}
                />
                <Text style={styles.label}>DATA FINAL</Text>
                <DatePicker
                    style={styles.datepiker}
                    date={dtFinal}
                    format="YYYY-MM-DD"
                    onDateChange={(date) => { setDtFinal(date) }}
                    useNativeDriver={true}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Gerar Relatório</Text>
                </TouchableOpacity>

                <Text style={styles.cabecalho}>{fraseRetorno}</Text>

                <ScrollView>
                    {solicitacoes.map(solicitacao => <SolicitacaoColeta style={styles.solicitacao} key={solicitacao._id} solicitacao={solicitacao} />)}
                </ScrollView>

            </View>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    datepiker: {
        backgroundColor: "#D8BFD8",
        borderColor: '#ddd',
        fontSize: 16,
        height: 44,
        width: 200,
        marginBottom: 20,

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 5,
    },
    cabecalho: {
        fontWeight: 'bold',
        color: '#741B75',
        marginBottom: 30,
        marginTop: 10
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        margin: 30,
    },
    button: {
        height: 42,
        backgroundColor: '#741B75',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 20

    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
