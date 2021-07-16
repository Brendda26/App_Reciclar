import React, {useState,useEffect} from 'react';
import { View, ScrollView,Picker, AsyncStorage, KeyboardAvoidingView,Platform, Image, Text,TextInput,TouchableOpacity, StyleSheet,} from 'react-native';
import RelatorioMateriais from '../components/relatorioMateriais';


export default function RelatMateriais({navigation}){

    const [dia, setDia] = useState(new Date().getDate());

    const solicitacoes = [

     {
        _id:'1',
       tipo:'Vidro',
       quantidade:'80',
       dataColeta:'12/03/2020'

    },
     {
        _id:'2',
        tipo:'Papel',
        quantidade:'500 kg',
        dataColeta:'10/02/2019'
    }, 
     {
        _id:'1',
       tipo:'Vidro',
       quantidade:'80',
       dataColeta:'12/03/2020'

    },
     {
        _id:'2',
        tipo:'Papel',
        quantidade:'500 kg',
        dataColeta:'10/02/2019'
    }, 
    {
        _id:'1',
       tipo:'Vidro',
       quantidade:'80',
       dataColeta:'12/03/2020'

    },
     {
        _id:'2',
        tipo:'Papel',
        quantidade:'500 kg',
        dataColeta:'10/02/2019'
    }, 
     
     
    ]

       
    async function handleSubmit(){
              
    }
    //  {solicitacoes.map(solicitacao => <Solicitacao  solicitacao={solicitacao}/>)}
    return (
        <KeyboardAvoidingView enabled={Platform.OS == 'android'} behavior="height" style={styles.container}>
        
        <View style={styles.container}>
           <Text style={styles.titulo}>RELATÓRIO DOS MATERIAIS COLETADOS</Text>

           <Text style={styles.label}>ESCOLHA O PERÍODO:</Text>
                <Picker
                    selectedValue={dia}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        setDia(itemValue)
                    }>
                    <Picker.Item label="Semanal" value="semanal" />
                    <Picker.Item label="Mensal" value="mensal"/>
                    <Picker.Item label="Anual" value="anual"/>
                </Picker>
           
           <ScrollView>          

                 {solicitacoes.map(solicitacao => <RelatorioMateriais style={styles.solicitacao} key={solicitacao._id} solicitacao={solicitacao}/>)}
              
           </ScrollView>


           <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Imprimir/PDF</Text>
            </TouchableOpacity>          

        </View>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
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
    container:{
        flex: 1,
        justifyContent:'center',
        paddingTop: 30
        
    },
    titulo:{
        color: '#741B75',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,     
        textAlign: 'center'  
        
    },
    solicitacao:{
        marginTop:20,

    },
});

