import React, { useContext, useState } from 'react';
import { 
  Platform, 
  ActivityIndicator, 
  Text, 
  View, 
  ImageBackground, 
  Image, 
  TouchableOpacity, 
  TextInput, 
  StyleSheet 
} from 'react-native';

import bg from '../../assets/bg.png';
import logo from '../../assets/logo.png';

export default function SignUp({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground source={bg} style={styles.background}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Crie sua conta</Text>

        <View style={styles.inputArea}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            style={styles.input}
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={()=>navigation.navigate('SignIn')}>
            <Text style={styles.submitText}>Criar conta</Text>
        </TouchableOpacity>

        <View style={styles.signInLink}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')} >
            <Text style={styles.signInText}>Já tem uma conta? <Text style={styles.boldText}>Faça login!</Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '75%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputArea: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  submitButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#3E0D9F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInLink: {
    marginTop: 20,
  },
  signInText: {
    fontSize: 16,
    color: '#666',
  },
  boldText: {
    fontWeight: 'bold',
  },
});