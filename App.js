import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detalhes from './components/Detalhes';
import Card from './components/Card';

const dados = [
  { nome: 'Panquecas com Frutas e Mel', imagem: require('./assets/panqueca.png'), valor: 15.75, rate: 4.9, kcal: 150, tempo: '20-30 min', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut.' },
  { nome: 'Pizza', imagem: require('./assets/pizza.png'), valor: 31.99, rate: 8.9, kcal: 250, tempo: '10-30 min', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut.' },
  { nome: 'Bolo de Chocolate', imagem: require('./assets/bolo.png'), valor: 20.9, rate: 9.9, kcal: 400, tempo: '5-12 min', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut.' },
  { nome: 'Hambúrguer', imagem: require('./assets/hamburguer.png'), valor: 25.49, rate: 3.9, kcal: 300, tempo: '2-10 min', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor velit, consectetur id euismod id, iaculis a metus. Nulla imperdiet mi vitae posuere mollis. Pellentesque maximus tristique mi, ac viverra velit dignissim ut.' }
];

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
      <Image
        source={require('./assets/logo.png')}
        style={{ width: 200, height: 180, resizeMode: 'contain' }}
      />
    
      {dados.map((obj, index) =>
        <Pressable
          key={index}
          style={styles.v100}
          onPress={() => navigation.navigate('Detalhes do Produto', { item: obj })}>
          <Card key={index} item={obj} />
        </Pressable>
      )}
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Bustamante's Food" component={HomeScreen} />
        <Stack.Screen name="Detalhes do Produto" component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  v100: {
    width: '100%'
  },
  tituloApp: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});