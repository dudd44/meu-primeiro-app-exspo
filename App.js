import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts,Montserrat_400Regular,Montserrat_700Bold } from '@expo-google-fonts/montserrat';


export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular":Montserrat_400Regular,
    "MontserratBold":Montserrat_700Bold,
  });

  if(!fonteCarregada){
    return(<>
          </>
          )
  }

  return (
     <SafeAreaView>
      <StatusBar />
      
    </SafeAreaView>
  )
}

