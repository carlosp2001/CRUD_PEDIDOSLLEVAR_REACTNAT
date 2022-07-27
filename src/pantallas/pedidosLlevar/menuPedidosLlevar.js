import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { colores, sizes } from '../../estilos/estilos';
import UsuarioContext from '../../contexto/UsuarioContext';
import Mensaje from '../../componentes/Mensaje';


const PedidosLlevar = ({navigation}) => {
  return (
    <View style={styles.contenedor}>
          <View style={styles.contenedorBotones}>
            <View style={styles.contenedorBoton}> 
            <TouchableOpacity onPress={()=>navigation.navigate('agregarPedidosLlevar')}>
            <Text style={styles.item}>Agregar Registro</Text>
        </TouchableOpacity>
              </View>
              <View style={styles.contenedorBoton}> 
            <TouchableOpacity onPress={()=>navigation.navigate('ListarPedidosLlevar')}>
            <Text style={styles.item}>Listar Registro</Text>
        </TouchableOpacity >
              </View>
              <View style={styles.contenedorBoton}> 
            <TouchableOpacity onPress={()=>navigation.navigate('EliminarPedidosLlevar')}>
            <Text style={styles.item}>Eliminar Registro</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.contenedorBoton}> 
            <TouchableOpacity onPress={()=>navigation.navigate('EditarPedidosLlevar')}>
            <Text style={styles.item}>Editar Registro</Text>
        </TouchableOpacity>
              </View>
          </View>
          </View>
  );
};
const styles = StyleSheet.create({
    contenedor: {
      backgroundColor: colores.gris600,
      alignItems: 'center',
      justifyContent: "center",
      margin:0,
      padding: 20,
      width:"100%",
      height:"100%",
    },
    contenedorBotones: {
        height: "80%",
        width: "50%",
      justifyContent: 'space-evenly',
  },
  contenedorBoton: {
    
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  
    item: {
      backgroundColor: colores.gris800,
      padding: 18,
      color: 'white',   
}

    
    
  });
export default PedidosLlevar;