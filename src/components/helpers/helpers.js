const campoRequerido = (dato) =>{
    if(dato.trim().length >0){
        return true;
    }else{
        return false;
    }
};

const rangoPrecio = (dato) =>{
    if(dato >0 && dato <= 5000){
         return true;
    }else{
        return false;
    }
};


export {campoRequerido, rangoPrecio}

// tambien se puede exportar agregando expor antes de la const.... ej
// export const rangoPrecio.....