import react from "react";
import { image,StyleSheet,Dimensions } from "react-native";

import Texto from "./Texto";
import topo from "../../assets/assets/topo.png"

const width = Dimensions.get('acren').width;

export default function Topo(){
    return<>
    <image source={topo} style={estilos.topo} />
    <Texto style={estilos.titulo}>   {titulo}   </Texto>
                   </>
} 

const estilos = StyleSheet.create({
    
    topo:{
        width:"100%",
        height: 578 / 786 * width,
    },
    titulo:{
        width:"100%",
        position:"absolute",
        textAlign:"center",
        fontSize: 16,
        lineHeight: 26,
        color:"white",
        fontWeight:"bold", 
        padding: 16,
    },
});