import { Alert, Platform } from "react-native";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const Mensaje = (datos) =>{
    let MySwal = withReactContent(Swal);
    if(Platform.OS=='android' || Platform.OS =='ios'){
        Alert.alert(datos.titulo, datos.msj);     
      }
      else{
          MySwal.fire({
              title: datos.titulo,
              text: datos.msj,
          });
      }
}
export default Mensaje;