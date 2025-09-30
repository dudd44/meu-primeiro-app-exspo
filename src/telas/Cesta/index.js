import react from "react";
import {Flatilist, StyleSheet, View} from "react-native";
import { getInternalInstanceHandleFromPublicInstance } from "react-native/types_generated/Libraries/ReactPrivate/ReactNativePrivateInterface";

export default function Cesta(){
    <Flatilist>
        data={itens.lista}
        renderItem+{item}
        keyExtractor= {({nome}) => nome}
            ListHeaderComponent={() => {
                return <>
                
                       </>
            }}
    </Flatilist>
}

const estilos = StyleSheet.create ({
    titulo:{
        color:"#464646",
        fontWeight:"bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize:20,
        lineHeight: 32,
    },
    cesta:{
        paddingVertical:8, 
        paddingHorizontal:16, 
    }
})