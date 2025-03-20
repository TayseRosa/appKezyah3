import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Para navegação

const HeaderSalesAdm = () => {
  const navigation = useNavigation(); // Hook de navegação

  const handleMenuClick = () => {
    console.log('Menu clicado');
    // Aqui você pode adicionar a lógica para o menu hambúrguer, se necessário
  };

  const handleUserClick = () => {
    navigation.navigate('UserInfo'); // Redireciona para a página de informações do usuário
  };

  return (
    <View style={styles.header}>
      {/* Ícone de menu hambúrguer */}
      <TouchableOpacity style={styles.menuIcon} onPress={handleMenuClick}>
        <Icon name="bars" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Ícone de usuário */}
      <TouchableOpacity style={styles.userIcon} onPress={handleUserClick}>
        <Icon name="user" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3E0D9F',
    height: 60,
  },
  menuIcon: {
    flex: 1,
  },
  userIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default HeaderSalesAdm;
