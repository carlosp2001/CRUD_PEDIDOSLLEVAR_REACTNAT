import React, { useState, useContext, useEffect, createContext } from 'react';
import { StyleSheet, Text, View, Keyboard, TextInput, TouchableOpacity, TouchableWithoutFeedback, FlatList, ScrollView } from 'react-native';
import { colores, sizes } from '../../estilos/estilos';

// Contextos
import UsuarioContext from '../../contexto/UsuarioContext';
import { PedidosLlevarContext } from '../../contexto/pedidosLlevar/pedidosLlevarContext';

import Mensaje from '../../componentes/Mensaje';
import Axios from '../../componentes/Axios';
import CardPedidosLlevar from '../pedidosLlevar/CardPedidosLlevarEliminar';

const ListarPedidosLlevar = ({navigation}) => {
    var textoMensaje = "";
    const { token } = useContext(UsuarioContext);
    const {
        idRegistro,
        idPedido,
        idCliente,
        setIdRegistro,
        setIdPedido,
        setIdCliente
    } = useContext(PedidosLlevarContext);
    const [lista, setLista] = useState("");
    
    useEffect(() => {
        buscarPedidosLlevar();
    }, [setLista]);
    
    

    const pressHandler = (key, idpedido, idcliente) => {
        setIdCliente(idcliente);
        setIdPedido(idpedido);
        setIdRegistro(key);
        navigation.navigate('EditarPedidosLlevarForm')
        
      }

    const buscarPedidosLlevar = async () => {
         try {
             await Axios.get('/pedidos/pedidosllevar/listar', {
                 headers: {
                    'Authorization': 'Bearer ' + token
                 }
             })
                 .then((data) => {
                    const json = data.data;
                     setLista(json);
                         
                        // else {
                        //      textoMensaje = '';
                        //      json.errores.forEach(element => {
                        //          textoMensaje += element.mensaje + '. ';
                        //      });
                            
                        //  }
                 })
                 
                 .catch((error) => {
                    textoMensaje = error;
                     Mensaje({ titulo: 'Error registro', msj: textoMensaje });
                });
         } catch (error) {
    //         textoMensaje = error;
    //         console.log(error);
    //         Mensaje({ titulo: 'Error registro', msj: error });
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            
        <View style={styles.contenedor}>
        <ScrollView>
                <View style={styles.contenedorTitulo}>
                    <Text style={styles.tituloLogin}>Editar Pedidos Llevar</Text>
                </View>
      <View style={styles.container}>
      <View style={styles.content}>
        
        <View style={styles.list}>
          <FlatList
            data={lista}
            keyExtractor={item => item.idregistro}
            renderItem={({item}) => (
              <CardPedidosLlevar item={item} pressHandler={ pressHandler }/>
            )}
          />
        </View>
      </View>
                    </View>
                    </ScrollView>
                </View>
                
            </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: colores.gris700,
        //alignItems: 'center',
        //justifyContent: "center",
        margin: 0,
        padding: 20,
        width: "100%",
        height: "100%",
    },
   
    contenedorTitulo: {
        marginTop: 30,
        height: 80,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    list: {
        marginTop: 40,
        
      },
    
    tituloLogin: {
        color: colores.textoTitulo,
        fontSize: sizes.fontTitulo,
        fontWeight: "500",
    },
    boton: {
        //flex: 1,
        alignItems: "stretch",
        marginLeft: 10,
        marginRight: 10,
    },
    botonRedes: {
        //flex:1,
        alignItems: "stretch",
        margin: 5,
    },
    
})

export default ListarPedidosLlevar;