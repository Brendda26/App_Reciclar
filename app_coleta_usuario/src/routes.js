import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';



import Sobre from './pages/sobre';
import Login from './pages/login'
import logoff from './pages/logoff'
import Materiais from './pages/materiais'
import CadastrarUsuario from './pages/cadastrarUsuario'
import CadastrarPonto from './pages/cadastrarPonto'
import ListarPonto from './pages/listarPontoColeta'
import realizarSolicitação from './pages/realizarSolicitacao'
import ListarSolicitacoes from './pages/listarSolicitacoes'
import relatorioDeSolicitacoes from './reports/relatorioDeSolictacoes'
import demandaCatador from './pages/demandaCatador'
import relatorioCatador from './components/relatorioCatador'



const Drawer = createDrawerNavigator();



export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                
                <Drawer.Screen name="Sobre" component={Sobre} />
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Logoff" component={logoff} />
                <Drawer.Screen name="Materiais" component={Materiais} />               
                <Drawer.Screen name="Cadastrar Usuário" component={CadastrarUsuario} />   
                <Drawer.Screen name="Cadastrar Ponto" component={CadastrarPonto} />          
                <Drawer.Screen name="Lista de Pontos" component={ListarPonto} />                  
                <Drawer.Screen name="Faça sua solicitação" component={realizarSolicitação} />
                <Drawer.Screen name="Lista de Solicitações" component={ListarSolicitacoes} />
                <Drawer.Screen name="Relatório de Solicitações" component={relatorioDeSolicitacoes}/>
                <Drawer.Screen name="Demandas do Catador" component={demandaCatador}/>
                <Drawer.Screen name="Relatório do Catador" component={relatorioCatador}/>
               
             
               
                
                
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


