import react from "react";
import { image,StyleSheet,Dimensions } from "react-native";

import Texto from "./Texto";

export default function Topo(){
    return<>
    <Texto style={estilos.titulo}>   {titulo}   </Texto>
                   </>
} 

const estilos = StyleSheet.create({
    
    topo:{
        width:"100%",
        height: 578 / 786 * width,
    }
});