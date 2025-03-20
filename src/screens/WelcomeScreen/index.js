import React from 'react'; 
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/bg.png')} // Caminho para a imagem de fundo
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo.png')} // Caminho para o logo
          style={styles.logo}
        />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')} >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('SignUp')} >
          <Text style={styles.buttonText2}>Inscreva-se</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    width: 268,
    backgroundColor: '#F3E60B',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#3E0D9F',
    fontSize: 16,
    textAlign: 'center',
  },

  button2: {
    width: 268,
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    borderColor: '#F3E60B',
    borderWidth: 1,
  },
  buttonText2: {
    color: '#F3E60B',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default WelcomeScreen;