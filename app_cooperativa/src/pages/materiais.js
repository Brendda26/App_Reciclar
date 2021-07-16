import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, Text, StyleSheet,} from 'react-native';
import { CheckBox } from 'react-native-elements'

export default function material(){

    const [temVidro, setTemVidro] = useState(false);
    const [temPapel, setTemPapel] = useState(false);
    const [temMetal, setTemMetal] = useState(false);
    const [temPlastico, setTemPlastico] = useState(false);
    const [temOgr, setTemOgr] = useState(false);
    
    return (
    <KeyboardAvoidingView enabled={Platform.OS == 'android'} behavior="height" style={styles.container}>
        
        <Text style={styles.titulo}>INFORMAÇÕES DOS MATERIAIS RECICLÁVEIS</Text>
        
        <ScrollView style={styles.caixa}>            

        <CheckBox
            containerStyle={styles.checkbox}
            title='Vidro'
            checkedIcon='glass'
            uncheckedIcon='glass'
            checkedColor='#741B75'
            uncheckedColor= '#FFF'
            checked = {temVidro}
            onPress={() => setTemVidro(!temVidro)}
        
        />
       
        {temVidro && <Text style={styles.texto}>       
            As embalagens de vidro são usadas para bebidas, produtos alimentícios, medicamentos
            ,perfumes, cosméticos e outros artigos. Garrafas, potes e frascos superam a metade da 
            de vidro do Brasil. Usando em sua formulação areia, calcário, barrilha e feldspato, o vidro
            é durável, inerte e tem alta taxa de reaproveitamento nas residências. A metade dos recipientes
            de vidro fabricados no País é retornável. Além disso, o material é de fácil reciclagem: pode voltar 
            produção de novas embalagens, substituindo totalmente o produto virgem sem perda de qualidade.
            A inclusão de caco de vidro no processo normal de fabricação de vidro reduz o gasto com
            energia e água. Para cada 10% de caco de vidro na mistura economiza-se 4% da energia necessária para a fusão 
            nos fornos industriais e a redução de 9,5% no consumo de água.            
        </Text> }

        <CheckBox
            containerStyle={styles.checkbox}
            title='Papel'
            checkedIcon='copy'
            uncheckedIcon='copy'
            checkedColor='#741B75'
            uncheckedColor= '#FFF'
            checked = {temPapel}
            onPress={() => setTemPapel(!temPapel)}           
        
        />
       
        {temPapel && <Text style={styles.texto}>       
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et metus sit amet mi luctus semper. Integer hendrerit vehicula bibendum. Fusce a ligula ut diam interdum consectetur. 
        Nulla purus velit, cursus et mi ac, eleifend blandit felis. In non maximus arcu. Vivamus at libero eleifend, hendrerit nulla at, bibendum arcu.
        Donec risus lectus, fringilla at quam a, lobortis placerat quam. Proin nulla urna, egestas sed malesuada sed, ultrices vel massa. Nullam tempor consectetur ornare.     
        </Text> }   


        <CheckBox
            containerStyle={styles.checkbox}
            title='Metal'
            checkedIcon='paperclip'
            uncheckedIcon='paperclip'
            checkedColor='#741B75'
            uncheckedColor= '#FFF'
            checked = {temMetal}
            onPress={() => setTemMetal(!temMetal)}           
        
        />
       
        {temMetal && <Text style={styles.texto}>       
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et metus sit amet mi luctus semper. Integer hendrerit vehicula bibendum. Fusce a ligula ut diam interdum consectetur. 
        Nulla purus velit, cursus et mi ac, eleifend blandit felis. In non maximus arcu. Vivamus at libero eleifend, hendrerit nulla at, bibendum arcu.
        Donec risus lectus, fringilla at quam a, lobortis placerat quam. Proin nulla urna, egestas sed malesuada sed, ultrices vel massa. Nullam tempor consectetur ornare.     
        </Text> }  

         <CheckBox
            containerStyle={styles.checkbox}
            title='Plástico'
            checkedIcon='barcode'
            uncheckedIcon='barcode'
            checkedColor='#741B75'
            uncheckedColor= '#FFF'
            checked = {temPlastico}
            onPress={() => setTemPlastico(!temPlastico)}           
        
        />
       
        {temPlastico && <Text style={styles.texto}>       
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et metus sit amet mi luctus semper. Integer hendrerit vehicula bibendum. Fusce a ligula ut diam interdum consectetur. 
        Nulla purus velit, cursus et mi ac, eleifend blandit felis. In non maximus arcu. Vivamus at libero eleifend, hendrerit nulla at, bibendum arcu.
        Donec risus lectus, fringilla at quam a, lobortis placerat quam. Proin nulla urna, egestas sed malesuada sed, ultrices vel massa. Nullam tempor consectetur ornare.     
        </Text> }  

        
         <CheckBox
            containerStyle={styles.checkbox}
            title='Óleo de cozinha(OGR)'
            checkedIcon='tint'
            uncheckedIcon='tint'
            checkedColor='#741B75'
            uncheckedColor= '#FFF'
            checked = {temOgr}
            onPress={() => setTemOgr(!temOgr)}           
        
        />
       
        {temOgr && <Text style={styles.texto}>       
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et metus sit amet mi luctus semper. Integer hendrerit vehicula bibendum. Fusce a ligula ut diam interdum consectetur. 
        Nulla purus velit, cursus et mi ac, eleifend blandit felis. In non maximus arcu. Vivamus at libero eleifend, hendrerit nulla at, bibendum arcu.
        Donec risus lectus, fringilla at quam a, lobortis placerat quam. Proin nulla urna, egestas sed malesuada sed, ultrices vel massa. Nullam tempor consectetur ornare.     
        </Text> }   
                    


        </ScrollView>
    </KeyboardAvoidingView>    
    )
}
const styles = StyleSheet.create({
    titulo:{
        color: '#741B75',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 40,     
        textAlign: 'center',
        marginTop: 60,          

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
        backgroundColor: "#D8BFD8"  
              
    },  
    
    texto: {        
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        margin: 30,
        marginTop: 60,
        textAlign: 'justify',
    },    
    caixa:{
        alignSelf: 'stretch'
    },
    
});
