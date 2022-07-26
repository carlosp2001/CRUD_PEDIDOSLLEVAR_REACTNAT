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
import { colores, sizes } from "../../estilos/estilos";
import UsuarioContext from "../../contexto/UsuarioContext";
import Mensaje from "../../componentes/Mensaje";
import Axios from "../../componentes/Axios";
import CardPedidosLlevar from "../pedidosLlevar/CardPedidosLlevar";
import { PedidosLlevarContext } from "../../contexto/pedidosLlevar/pedidosLlevarContext";

const ListarPedidosLlevar = () => {
  var textoMensaje = "";
  const { token } = useContext(UsuarioContext);
  const [lista, setLista] = useState("");
  const [filtro, setFiltro] = useState("");
  const { jsonDatos, setJsonDatos } = useContext(PedidosLlevarContext);
  useEffect(() => {
    buscarPedidosLlevar();
  }, [setLista]);

    async function changeHandler(text) {
      
        setFiltro(text);
        if (text == "") {
            buscarPedidosLlevar();
        }
        
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
          // setJsonDatos(data.data);
          setLista(data.data);
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
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <View style={styles.contenedorTitulo}>
            <Text style={styles.tituloLogin}>Lista Pedidos Llevar</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.contenedorInput}>
              <TextInput
                style={styles.input}
                placeholder="Filtrar por Id de Registro..."
                onChangeText={changeHandler}
              />
              <TouchableOpacity onPress={onPressHandler}>
                <Text style={styles.boton}>Filtrar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.list}>
              <FlatList
                data={lista}
                scrollEnabled={false}
                renderItem={({ item }) => <CardPedidosLlevar item={item} />}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: colores.gris600,
    //alignItems: 'center',
    //justifyContent: "center",
    margin: 0,
    padding: 20,
    width: "100%",
    height: "100%",
  },
  contenedorInput: {
    margin: 20,
    padding: 20,
  },

  contenedorTitulo: {
    margin: 30,
    height: 80,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  list: {
    marginTop: 20,
    // height: '70%'
  },

  tituloLogin: {
    color: colores.gris800,
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
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default ListarPedidosLlevar;
