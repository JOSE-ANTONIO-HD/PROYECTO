
import * as Yup from 'yup';

export function initialvalues(){
    return{
        email: "",
        password: ""
    }
}

export function validationSchema(){
    return Yup.object().shape({
        email: Yup.string().email("El email no es valido ").required(),
        password: Yup.string().required("camplo obligatorio"),
    })
}