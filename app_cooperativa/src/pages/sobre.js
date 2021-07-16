import React from 'react';
import { ScrollView, View, KeyboardAvoidingView, Platform, Image, Text, StyleSheet, } from 'react-native';

import logo from '../../assets/logos/logo_horizontal_ft.png';

export default function sobre() {

    return (
        <KeyboardAvoidingView enabled={Platform.OS == 'android'} behavior="height" style={styles.container}>

            <Image style={styles.imagem} source={logo} />

            <View style={styles.container}>
                <Text style={styles.titulo}>SOBRE O "COLETA LEGAL"</Text>

                <ScrollView>

                    <Text style={styles.texto}>
                        O Coleta Legal é um programa desenvolvido por alunas do IFBA campus Irecê. Os membros
                        envolvidos nesse trabalho são: Alunas (Brendda e Shirleine), Orientador (Jeime), Coorientador(Márcilio).
        </Text>
                    <Text style={styles.texto}>
                        Tem como objetivo visar a orientação de mudança de hábitos da comunidade envolvida em relação ao descarte
                        de materiais recicáveis, levando em conta a educação ambiental como pilar essencial. Vale ressaltar que o proposito
                        do aplicativo é melhorar a qualidade de vida com parceria ao Meio Ambiente
                        e as preocupações com os impactos ambientais.
        </Text>
                    <Text style={styles.texto}>
                        Este aplicativo além ser um mecanisco para auxiliar a população ele assesora a cooperativa
                        durante seus trabalhos e facilita o trabalho dos catadores.
        </Text>

                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    titulo: {
        color: '#741B75',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        marginTop: 30

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    texto: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 5,
        textAlign: 'justify',
        paddingHorizontal: 22

    },
    imagem: {
        marginTop: 40
    },
});

