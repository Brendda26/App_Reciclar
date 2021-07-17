import React, { useEffect } from 'react';
import { View,deleteText,handleSubmit, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//não esta pegando o status inativo, nem esta funcionando o botão bloquear
//não esta logando catador como usuário


function ListarCatador({ catador }) {


    useEffect(() => {

    }, []);
        async function deleteText(){
            const response = await api.post('/catador/remover',{
                nomeCatador,
                apelido,
                telefone,
                dtAdmissao,
                cpf,
                rg,
                dtNascimento,
                status,
                login,
                senha,
                
            })
            navigation.navigate('Lista de Catadores');
        }


        return(
            <View style={styles.listItem}>
                <Text style={styles.dados}> NOME: {catador.nomeCatador}</Text>
                <Text style={styles.dados}> LOGIN: {catador.login}</Text>
                <Text style={styles.dados}> APELIDO: {catador.apelido}</Text>
                <Text style={styles.dados}> Data de Admissão: {catador.dtAdmissao}</Text>
                <Text style={styles.dados}> STATUS: {catador.status}</Text>

                { catador.status == '1' && 
                   catador.status == 'desbloqueado'
                }

                { catador.status == '0' && 
                    catador.status == 'bloqueado'
                }

                
               
                {  catador.status == '1' &&
                    <TouchableOpacity  style={styles.button1}>
                        <Text style={styles.buttonText}>Bloquear</Text>          
                    </TouchableOpacity>          
                }

                { catador.status == '0' &&
                    <TouchableOpacity  style={styles.button1}>
                        <Text style={styles.buttonText}>Desbloquear</Text>          
                    </TouchableOpacity>          
                }
                
                     


             
            </View>
        )


}

const styles= StyleSheet.create({
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
        marginBottom: 3,
       
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    button1: {
        height: 42,
        backgroundColor: '#800000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginBottom: 3,
       
    },

});
export default (ListarCatador);
