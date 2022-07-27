import React, { useState, useContext, useEffect, createContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView
} from "react-native";
// import { ScrollView } from "react-native-virtualized-view";
import { colores, sizes } from "../../estilos/estilos";

// Contextos
import UsuarioContext from "../../contexto/UsuarioContext";
import { PedidosLlevarContext } from "../../contexto/pedidosLlevar/pedidosLlevarContext";

import Mensaje from "../../componentes/Mensaje";
import Axios from "../../componentes/Axios";
import CardPedidosLlevar from "../pedidosLlevar/CardPedidosLlevarEliminar";

const ListarPedidosLlevar = ({ navigation }) => {
  var textoMensaje = "";
  var filtro;
  const { token } = useContext(UsuarioContext);
  const {
    idRegistro,
    idPedido,
    idCliente,
    setIdRegistro,
    setIdPedido,
    setIdCliente,
  } = useContext(PedidosLlevarContext);
  const [lista, setLista] = useState("");


  useEffect(() => {
    buscarPedidosLlevar();
  }, [setLista]);

  const changeHandler = (text) => {
    filtro = text;
    console.log(filtro)
    if (text == "") {
      buscarPedidosLlevar();
    }
  }
  const pressHandler = (key, idpedido, idcliente) => {
    setIdCliente(idcliente);
    setIdPedido(idpedido);
    setIdRegistro(key);
    navigation.navigate("EditarPedidosLlevarForm");
  };

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
          Mensaje({ titulo: "Error registro", msj: textoMensaje });
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
      <View style={styles.contenedor}>
      
      
          <View style={styles.contenedorTitulo}>
            <Text style={styles.tituloLogin}>Editar Pedidos Llevar</Text>
          </View>
          
          <TextInput
            style={styles.input}
            placeholder="Filtrar por Id de Registro..."
            onChangeText={changeHandler}
        />
         <TouchableOpacity onPress={onPressHandler} style={styles.boton}>
            <Text style={styles.botonTexto}>Filtrar</Text>
          </TouchableOpacity>
          <ScrollView>
          <View style={styles.content}>
            <View style={styles.list}>
              <FlatList
                data={lista}
                keyExtractor={(item) => item.idregistro}
                renderItem={({ item }) => (
                  <CardPedidosLlevar item={item} pressHandler={pressHandler} />
                )}
              />
            </View>
          </View>
          </ScrollView>
        
      </View>
      
      </TouchableWithoutFeedback>
      
  );
};

const styles = StyleSheet.create({
  contenedor: {
    //alignItems: 'center',
    //justifyContent: "center",
    margin: 0,
    padding: 20,
    width: "100%",
    height: "100%",
  },

  input: {
    
    marginBottom: 30,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop:30
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

  tituloLogin: {
    color: colores.gris800,
    fontSize: sizes.fontTitulo,
    fontWeight: "500",
    fontSize: 30
  },
  

});

export default ListarPedidosLlevar;
