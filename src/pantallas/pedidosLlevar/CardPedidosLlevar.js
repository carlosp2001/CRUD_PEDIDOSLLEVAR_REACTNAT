import { StyleSheet, Text, View } from "react-native";

import { colores, sizes } from "../../estilos/estilos";

export default function CardPedidosLlevar({ item }) {
  return (
     <View style={styles.item}>
      <Text>Id de Registro: {item.idregistro}</Text>
      <Text>Id de Pedido {item.idpedido}</Text>
      <Text>Id del Cliente {item.idcliente}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: sizes.radiusContenedor,
    backgroundColor: colores.blanco,
    padding: 60,
    marginBottom: 10,
    },
    item:{
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
});
