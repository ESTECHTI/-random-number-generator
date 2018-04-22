import React, { Component } from 'react';
import {
  Text,
  //StyleSheet,
  View,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from 'react-native';

const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();

  numero_aleatorio = Math.floor(numero_aleatorio * 10);

  alert(numero_aleatorio);
}

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text 
            style={{ 
              color: '#000000', 
              fontSize: 20, 
              alignSelf: 'center',
              justifyContent: 'center', 
              marginTop: 100,
              marginBottom: 10 
              }}>Gerador de números randômicos!!!
              </Text>
        </View>

         <View>
          <TouchableHighlight 
                style={styles.button}
                onPress={geraNumeroAleatorio}
              >
              <Text style={{ color: '#fff' }}> Press me!! </Text>
              </TouchableHighlight>
        </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ff0000',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})




