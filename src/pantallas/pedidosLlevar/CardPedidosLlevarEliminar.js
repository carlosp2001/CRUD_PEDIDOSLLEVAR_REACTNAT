import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { colores, sizes } from '../../estilos/estilos';

const CardPedidosLlevar = ({ item , pressHandler}) => {
    return (
        <View style={styles.contenedor}>
            <TouchableOpacity onPress={()=>pressHandler(item.idregistro, item.idpedido, item.idcliente)}>
                <Text>Id de Registro: {item.idregistro}</Text>
                <Text>Id de Pedido {item.idpedido}</Text>
                <Text>Id del Cliente {item.idcliente}</Text>
            </TouchableOpacity>
        </View>
    );
    
}

export default CardPedidosLlevar;


const styles = StyleSheet.create({
    contenedor: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: sizes.radiusContenedor,
        backgroundColor: colores.blanco,
        padding: 10,
        flexDirection: "column",
        marginBottom:10,
    },
    contenedorTexto: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "column",
    },
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
   
    texto: {
        color: "black",
        textDecorationColor: "yellow",
        textShadowColor: "red",
        textShadowRadius: 1,
        marginTop: 0,
        marginLeft: 10,
        marginRight: 10,
    }
});