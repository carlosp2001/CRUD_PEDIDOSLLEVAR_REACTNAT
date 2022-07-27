import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
} from "react-native";
// import { ScrollView } from "react-native-virtualized-view";
import { colores, sizes } from "../../estilos/estilos";
import UsuarioContext from "../../contexto/UsuarioContext";
import Mensaje from "../../componentes/Mensaje";
import Axios from "../../componentes/Axios";
import CardPedidosLlevar from "../pedidosLlevar/CardPedidosLlevar";
import { PedidosLlevarContext } from "../../contexto/pedidosLlevar/pedidosLlevarContext";


const ListarPedidosLlevar = () => {

    const { token } = useContext(UsuarioContext);
    const [lista, setLista] = useState([]);
//   const [lista, setLista] = useState([
//     {
//       idcliente: 2,
//       idpedido: 3,
//       idregistro: 25,
//     },
//     {
//       idcliente: 2,
//       idpedido: 6,
//       idregistro: 26,
//     },
//     {
//       idcliente: 2,
//       idpedido: 4,
//       idregistro: 27,
//     },
//     {
//       idcliente: 2,
//       idpedido: 3,
//       idregistro: 28,
//     },
//     {
//       idcliente: 2,
//       idpedido: 6,
//       idregistro: 29,
//     },
//     {
//       idcliente: 2,
//       idpedido: 4,
//       idregistro: 30,
//     },
//     {
//       idcliente: 2,
//       idpedido: 6,
//       idregistro: 31,
//     },
//     {
//       idcliente: 2,
//       idpedido: 4,
//       idregistro: 32,
//     },
//     {
//       idcliente: 2,
//       idpedido: 3,
//       idregistro: 33,
//     },
//     {
//       idcliente: 2,
//       idpedido: 6,
//       idregistro: 34,
//     },
//     {
//       idcliente: 2,
//       idpedido: 4,
//       idregistro: 35,
//     },
//     {
//       idcliente: 2,
//       idpedido: 4,
//       idregistro: 36,
//     },
//     {
//       idcliente: 2,
//       idpedido: 4,
//       idregistro: 37,
//     },
//   ]);
  
  const [filtro, setFiltro] = useState("");

   
    
  useEffect(() => {
    buscarPedidosLlevar();
  }, [setLista]);

  async function changeHandler(text) {
    setFiltro(text);
    if (text == "") {
      buscarPedidosLlevar();
    }
  }

  const onPressHandler = () => {
    if (filtro == "") {
      buscarPedidosLlevar();
    }
    setLista((prevLista) => {
      return prevLista.filter((item) => item.idregistro == filtro);
    });
  };

  const buscarPedidosLlevar = async () => {
    try {
      await Axios.get("/pedidos/pedidosllevar/listar", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((data) => {
          // setJsonDatos(data.data);
          setLista(data.data);
          console.log(lista);
          // else {
          //      textoMensaje = '';
          //      json.errores.forEach(element => {
          //          textoMensaje += element.mensaje + '. ';
          //      });

          //  }
        })

        .catch((error) => {
          // textoMensaje = error;
          //  Mensaje({ titulo: 'Error registro', msj: textoMensaje });
        });
    } catch (error) {
      //         textoMensaje = error;
      //         console.log(error);
      //         Mensaje({ titulo: 'Error registro', msj: error });
    }
  };

  return (
   
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
      >
          
          <ScrollView>
              <View>
                  
              
        <View style={styles.contenedorTitulo}>
          <Text style={styles.tituloLogin}>Lista Pedidos Llevar</Text>
        </View>
        <View style={styles.contenedorInput}>
          <TextInput
            style={styles.input}
            placeholder="Filtrar por Id de Registro..."
            onChangeText={changeHandler}
          />
          <TouchableOpacity onPress={onPressHandler} style={styles.boton}>
            <Text style={styles.botonTexto}>Filtrar</Text>
          </TouchableOpacity>
        </View>
        

          
              
        <View style={styles.container}>
          {lista.map((item) => (
            <View key={item.idregistro}>
              <CardPedidosLlevar item={item}></CardPedidosLlevar>
            </View>
          ))}
    
                  
       
                  </View>
                  </View>
        </ScrollView>
    
    </TouchableWithoutFeedback>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    },

    contenedorInput: {
      margin: 20,
      marginBottom: -20,
      padding: 20,
    },

    contenedorTitulo: {
      margin: 30,
      height: 80,
      alignItems: "center",
      justifyContent: "flex-end",
    },

    

    tituloLogin: {
      color: colores.gris800,
      fontSize: sizes.fontTitulo,
      fontWeight: "500",
    },
    boton: {
      alignItems: "center",
      padding: 20,
      borderRadius: 20,
      marginLeft: 10,
      backgroundColor: colores.gris600,
      marginRight: 10,
    },
    botonTexto: {
      color: "white",
    },

    input: {
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
    },
});

export default ListarPedidosLlevar;
