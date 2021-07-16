import React, { useState, useEffect } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, StyleSheet, useColorScheme, } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { CheckBox, colors } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../server/api';








export default function pedidoColeta({ navigation }) {
    const [temVidro, setTemVidro] = useState(false);
    const [qtVidro, setQtVidro] = useState('');
    const [temPapel, setTemPapel] = useState(false);
    const [qtPapel, setQtPapel] = useState('');
    const [temMetal, setTemMetal] = useState(false);
    const [qtMetal, setQtMetal] = useState('');
    const [temOgr, setTemOgr] = useState(false);
    const [qtOgr, setQtOgr] = useState('');
    const [temPlastico, setTemPlastico] = useState(false);
    const [qtPlastico, setQtPlastico] = useState('');

    const [dia, setDia] = useState(new Date().getDate());
    const [pontoColeta, setPontoColeta] = useState();
    const [hora, setHora] = useState(new Date().getTime());
    const [pontos, setPontos] = useState([]);
    const [dias, setDias] = useState([]);
    const [horas, setHoras] = useState([]);
    const [usuario, setUsuario] = useState('');


    async function CarregarPontos() {

        const response = await api.get('/ponto/listar')
        setPontos(response.data)
    }

    const getUsuarioLogado = async () => {
        try {
            const value = await AsyncStorage.getItem('@usuario')
            if (value !== null) {
                setUsuario(value);
            }
        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        getUsuarioLogado();
        CarregarPontos();

    }, []);


    async function handleSubmit() {

        const materiais = {
            "vidro": qtVidro,
            "papel": qtPapel,
            "metal": qtMetal,
            "ogr": qtOgr,
            "plastico": qtPlastico

        };
        const response = await api.post('/solicitacao/adicionar', {
            ponto: pontoColeta,
            usuario: usuario,
            dtColeta: dia,
            hora,
            materiais
        });

        navigation.navigate('Lista de Solicitações');

    }

    return (

        <KeyboardAvoidingView enabled={Platform.OS == 'android'} behavior="height" style={styles.container}>

            <Text style={styles.titulo}>SOLICITAÇÃO DE COLETA{usuario}</Text>

            <ScrollView style={styles.form}>

                <Text style={styles.label}>SELECIONE O PONTO DE COLETA:</Text>


                <Picker
                    selectedValue={pontoColeta}
                    style={styles.picker}
                    mode="dialog"
                    prompt="Pontos disponíveis:"
                    onValueChange={(itemValue) => {
                        setPontoColeta(itemValue);
                        if (itemValue) {
                            setDias(itemValue.diasColeta.split(','));
                            setHoras(itemValue.horarios.split(','));
                        }
                    }
                    }>

                    {pontos.map(ponto => <Picker.Item key={ponto._id} label={ponto.nome} value={ponto} />)}

                </Picker>


                <Text style={styles.label}>SELECIONE O DIA:</Text>

                <Picker
                    selectedValue={dia}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => {
                        setDia(itemValue)

                    }
                    }>
                    {dias.map(dia => <Picker.Item key={dia} label={dia} value={dia} />)}

                </Picker>


                <Text style={styles.label}>SELECIONE A HORA:</Text>

                <Picker
                    selectedValue={hora}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        setHora(itemValue)
                    }>
                    {horas.map(hora => <Picker.Item key={hora} label={hora} value={hora} />)}
                </Picker>




                <Text style={styles.label}>MATERIAIS:</Text>

                <CheckBox
                    containerStyle={styles.checkbox}
                    title='Vidro'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checkedColor='#741B75'
                    checked={temVidro}
                    onPress={() => setTemVidro(!temVidro)}

                />

                {temVidro && <TextInput

                    style={styles.input}

                    placeholder="Quantidade  de vidros"
                    autoCapitalize="words"
                    placeholderTextColor="#FFF"
                    autoCorrect={false}
                    keyboardType="numeric"
                    value={qtVidro}
                    onChangeText={setQtVidro}
                />}

                <CheckBox
                    containerStyle={styles.checkbox}
                    title='Papel'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checkedColor='#741B75'
                    checked={temPapel}
                    onPress={() => setTemPapel(!temPapel)}

                />
                {temPapel && <TextInput

                    style={styles.input}

                    placeholder="Quantidade  de papel"
                    autoCapitalize="words"
                    placeholderTextColor="#FFF"
                    autoCorrect={false}
                    keyboardType="numeric"
                    value={qtPapel}
                    onChangeText={setQtPapel}
                />}

                <CheckBox
                    containerStyle={styles.checkbox}
                    title='Metal'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checkedColor='#741B75'
                    checked={temMetal}
                    onPress={() => setTemMetal(!temMetal)}

                />
                {temMetal && <TextInput

                    style={styles.input}

                    placeholder="Quantidade  de metal"
                    autoCapitalize="words"
                    placeholderTextColor="#FFF"
                    autoCorrect={false}
                    keyboardType="numeric"
                    value={qtMetal}
                    onChangeText={setQtMetal}
                />}

                <CheckBox
                    containerStyle={styles.checkbox}
                    title='Óleo de cozinha(OGR)'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checkedColor='#741B75'
                    checked={temOgr}
                    onPress={() => setTemOgr(!temOgr)}

                />
                {temOgr && <TextInput

                    style={styles.input}

                    placeholder="Quantidade em litros"
                    autoCapitalize="words"
                    placeholderTextColor="#FFF"
                    autoCorrect={false}
                    keyboardType="numeric"
                    value={qtOgr}
                    onChangeText={setQtOgr}
                />}

                <CheckBox
                    containerStyle={styles.checkbox}
                    title='Plástico'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checkedColor='#741B75'
                    checked={temPlastico}
                    onPress={() => setTemPlastico(!temPlastico)}

                />
                {temPlastico && <TextInput

                    style={styles.input}

                    placeholder="Quantidade  de papel"
                    autoCapitalize="words"
                    placeholderTextColor="#FFF"
                    autoCorrect={false}
                    keyboardType="numeric"
                    value={qtPlastico}
                    onChangeText={setQtPlastico}
                />}



                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    picker: {
        borderColor: '#741B75',
        color: '#741B75',
        marginBottom: 10
    },
    titulo: {
        color: '#741B75',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 60

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkbox: {
        borderColor: '#741B75',
        backgroundColor: "#FFF",
        marginTop: 10,
        marginLeft: 0,
        marginRight: 0,
    },

    label: {
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
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 5,
        borderRadius: 4,
        backgroundColor: "#D8BFD8"

    }, link: {
        textAlign: "center",
        marginTop: 9,
        textDecorationLine: "underline",
        fontSize: 16,
        color: '#741B75'


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

