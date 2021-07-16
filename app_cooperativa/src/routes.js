import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';



import Sobre from './pages/sobre';
import Login from './pages/login';
import Logoff from './pages/logoff';
import pedidoColeta from './pages/pedidoColeta'
import Cooperativa from './pages/Cooperativa'
import Materiais from './pages/materiais'
import CadastrarPonto from './pages/cadastrarPonto'
import ListarPonto from './pages/listarPontoColeta'
import Catador from './pages/Catador'
import catadorListar from './pages/catadorListar'
import relatorioDeMateriais from './reports/relatorioDeMateriais'
import demandaCooperativa from './pages/demandaDaCooperativa'
import relatorioDeSolicitacoes from './reports/relatorioDeSolictacoes'
import listaPedidoColeta from './pages/listaPedidoColeta'
import cadastrarUsuario from './pages/cadastrarUsuario'




const Drawer = createDrawerNavigator();



export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Logoff" component={Logoff} />
                <Drawer.Screen name="Relatório de Solicitações" component={relatorioDeSolicitacoes}/>            
                <Drawer.Screen name="Pedido de Coleta" component={pedidoColeta}/>
                <Drawer.Screen name="Lista de Catadores" component={catadorListar}/>
                <Drawer.Screen name="Cooperativa" component={Cooperativa}/>
                <Drawer.Screen name="Lista de Pontos" component={ListarPonto} />
                <Drawer.Screen name="Cadastrar Ponto" component={CadastrarPonto} />
                <Drawer.Screen name="Cadastrar Catador" component={Catador} />               
                <Drawer.Screen name="Materiais" component={Materiais} />
                <Drawer.Screen name="Sobre" component={Sobre} />          
                <Drawer.Screen name="Relatório Materiais" component={relatorioDeMateriais}/>
                <Drawer.Screen name="Demandas da Cooperativa" component={demandaCooperativa}/>
                <Drawer.Screen name="Lista de Pedidos de Coleta" component={listaPedidoColeta}/>
                <Drawer.Screen name="Cadastrar Usuário" component={cadastrarUsuario}/>
               
                
                
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


