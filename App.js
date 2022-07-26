import React, { useState } from 'react';
import Login from './src/pantallas/Login';
import menuPedidosLlevar from './src/pantallas/menuPedidosLlevar';
import AgregarPedidosLlevar from './src/pantallas/pedidosLlevar/AgregarPedidosLlevar';
import UsuarioState from './src/contexto/UsuarioState';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListarPedidosLlevar from './src/pantallas/pedidosLlevar/ListarPedidosLlevar'
import EliminarPedidosLlevar from './src/pantallas/pedidosLlevar/EliminarPedidosLlevar'
import EditarPedidosLlevar from './src/pantallas/pedidosLlevar/EditarPedidosLlevar'
import { PedidosLlevarProvider } from './src/contexto/pedidosLlevar/pedidosLlevarContext';
import EditarPedidosLlevarForm from './src/pantallas/pedidosLlevar/EditarPedidosLlevarForm'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UsuarioState>
      <PedidosLlevarProvider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
        }}
          initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="menuPedidosLlevar" component={menuPedidosLlevar} />
          <Stack.Screen name="agregarPedidosLlevar" component={AgregarPedidosLlevar} />
          <Stack.Screen name="ListarPedidosLlevar" component={ListarPedidosLlevar} />
          <Stack.Screen name="EliminarPedidosLlevar" component={EliminarPedidosLlevar} />
          <Stack.Screen name="EditarPedidosLlevar" component={EditarPedidosLlevar} />
          <Stack.Screen name="EditarPedidosLlevarForm" component={EditarPedidosLlevarForm} />
      </Stack.Navigator>
        </NavigationContainer>
        </PedidosLlevarProvider>
    </UsuarioState>
  );
}