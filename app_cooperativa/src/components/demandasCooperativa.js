import React, {useState,useEffect} from 'react';
import { View } from 'react-native';
import { ScrollView,Picker, AsyncStorage, KeyboardAvoidingView,Platform, Image, Text,TextInput, StyleSheet,} from 'react-native';
import { CheckBox } from 'react-native-elements'

import { TouchableOpacity } from 'react-native-gesture-handler';


function DemandaCooperativa({ solicitacao }) {

     const [cat, setCat] = useState('');


    useEffect(() => {

    }, []);


        return (
            <View style={styles.listItem}>

                <Text style={styles.dados}>PONTO DE COLETA: {solicitacao.pontoColeta} </Text>
                <Text style={styles.dados}>DATA: {solicitacao.data} </Text>
                <Text style={styles.dados}>HORA: {solicitacao.hora} </Text>
                <Text style={styles.dados}>STATUS: {solicitacao.status} </Text>

                <Text style={styles.label}>ESCOLHA O CATADOR RESPONSÁVEL:</Text>
                    <Picker
                        selectedValue={cat}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            setCat(itemValue)
                        }>
                        <Picker.Item label="Jose" value="jose" />
                        <Picker.Item label="Augusto" value="augusto"/>
                        <Picker.Item label="Pedro" value="pedro"/>
                    </Picker>

                            
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
                            
                   
            </View>        
            

        )
}

const styles = StyleSheet.create({
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
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
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

export default (DemandaCooperativa);