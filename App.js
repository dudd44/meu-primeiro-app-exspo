import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Meunome from './componentes/primeiro-componente';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Dudão</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7700ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
