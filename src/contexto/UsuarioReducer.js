export default (estado, accion) => {
    const {datos, acciones}= accion;
    switch(acciones){
        case 'SET_LOGIN':
            return {
                ...estado,
                ...datos,
            };
        case 'GET_USUARIO':
            return {
                ...estado,
                ...datos,
            }
        default:
            return estado;
    }
}