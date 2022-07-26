import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { colores, sizes } from '../../estilos/estilos';

const CardPedidosLlevar = ({ item }) => {
    return (
        <View style={styles.contenedor}>
            <View style={styles.item}>
                <Text>Id de Registro: {item.idregistro}</Text>
                <Text>Id de Pedido {item.idpedido}</Text>
                <Text>Id del Cliente {item.idcliente}</Text>
            </View>
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