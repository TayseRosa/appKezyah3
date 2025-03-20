import React, { useState } from 'react'; 
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'; 
import { MaterialIcons } from '@expo/vector-icons'; // Importe os ícones

export default function VendasAdmin() { 
  const [filtro, setFiltro] = useState('Hoje'); 
  const [modalVisible, setModalVisible] = useState(false); 
  const [selectedVenda, setSelectedVenda] = useState(null);

  const vendas = [ 
    { id: '1', numero: '1235467', vendedora: 'Maria Joaquina', data: '20/03/2025', horario: '10:05hrs', pagamento: 'Cartão', total: '10.000,00', produtos: [ 
      { id: 'p1', nome: 'Biquini infantil de bolinhas', valor: '150,00', imagem: 'https://via.placeholder.com/40' }, 
      { id: 'p2', nome: 'Maiô floral', valor: '200,00', imagem: 'https://via.placeholder.com/40' }, 
      { id: 'p3', nome: 'Saída de Praia', valor: '120,00', imagem: 'https://via.placeholder.com/40' }, 
    ] 
  },
    { id: '2', numero: '1235468', vendedora: 'José da Silva', data: '20/03/2025', horario: '12:00hrs', pagamento: 'Dinheiro', total: '12.000,00', produtos: [ 
      { id: 'p16', nome: 'Tênis casual', valor: '250,00', imagem: 'https://via.placeholder.com/40' }, 
      { id: 'p17', nome: 'Jaqueta de couro', valor: '350,00', imagem: 'https://via.placeholder.com/40' }, 
      { id: 'p18', nome: 'Cinto de couro', valor: '80,00', imagem: 'https://via.placeholder.com/40' }, 
    ] 
  },
    { id: '3', numero: '1235469', vendedora: 'Joana Silva', data: '21/03/2025', horario: '14:00hrs', pagamento: 'Cartão', total: '15.000,00', produtos: [ 
      { id: 'p4', nome: 'Camiseta básica', valor: '50,00', imagem: 'https://via.placeholder.com/40' }, 
      { id: 'p5', nome: 'Calça jeans', valor: '200,00', imagem: 'https://via.placeholder.com/40' }, 
      { id: 'p6', nome: 'Casaco de inverno', valor: '350,00', imagem: 'https://via.placeholder.com/40' }, 
    ] 
  },
    // Adicione mais itens conforme necessário
  ];

  const abrirModal = (venda) => {
    setSelectedVenda(venda);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
    setSelectedVenda(null);
  };

  return (
    <View style={styles.container}>
      {/* Barra superior com ícones */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialIcons name="menu" size={30} color="#3E0D9F" />
        </TouchableOpacity>
        <Text style={styles.title}>Vendas (Administrador)</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialIcons name="person" size={30} color="#3E0D9F" />
        </TouchableOpacity>
      </View>

      {/* Filtros */}
      <View style={styles.filterContainer}>
        {['Hoje', 'Semana', 'Mês'].map((item) => (
          <TouchableOpacity key={item} onPress={() => setFiltro(item)} style={styles.filterItem}>
            <Text style={[styles.filterText, filtro === item && styles.filterTextActive]}>{item}</Text>
            <View style={[styles.underline, filtro === item && styles.underlineActive]} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista de Vendas */}
      <View contentContainerStyle={styles.scrollContainer}>
        <FlatList
          data={vendas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardRow}>
                <Text style={styles.cardText}>Venda #{item.numero}</Text>
                <Text style={styles.cardText}>{item.data} - {item.horario}</Text>
              </View>
              <Text style={styles.cardText}>Vendedora: {item.vendedora}</Text>
              <TouchableOpacity style={styles.button} onPress={() => abrirModal(item)}>
                <Text style={styles.buttonText}>Ver mais</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* Modal */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={fecharModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                {/* Botão de Fechar, posicionado no canto superior direito */}
                <TouchableOpacity style={styles.closeButton} onPress={fecharModal}>
                  <Text style={styles.closeButtonText}>X</Text>
                </TouchableOpacity>
                <Text style={styles.modalTitle}>Detalhes da venda</Text>
                {selectedVenda && (
                  <>
                    <Text style={styles.modalText}>Venda #{selectedVenda.numero}</Text>
                    <Text style={styles.modalText}>Forma de pagamento: {selectedVenda.pagamento}</Text>
                    <FlatList
                      data={selectedVenda.produtos}
                      keyExtractor={(item) => item.id}
                      renderItem={({ item }) => (
                        <View>
                          <View style={styles.productItem}>
                            <Image source={{ uri: item.imagem }} style={styles.productImage} />
                            <View>
                              <Text style={styles.productName}>Produto: {item.nome}</Text>
                              <Text style={styles.productPrice}>Valor: R${item.valor}</Text>
                            </View>
                          </View>
                          <View style={styles.separator} />
                        </View>
                      )}
                    />
                    <Text style={styles.totalText}>Total: R${selectedVenda.total}</Text>
                  </>
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
  iconContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3E0D9F',
    textAlign: 'center',
    flex: 1, // Para garantir que o título fique no centro
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterItem: {
    alignItems: 'center',
    flex: 1,
  },
  filterText: {
    fontSize: 16,
    color: '#A0A0A0',
  },
  filterTextActive: {
    color: '#3E0D9F',
    fontWeight: 'bold',
  },
  underline: {
    width: '100%',
    height: 2,
    backgroundColor: '#A0A0A0',
    marginTop: 5,
  },
  underlineActive: {
    backgroundColor: '#3E0D9F',
  },
  card: {
    borderWidth: 1,
    borderColor: '#F3E60B', // Borda amarela aplicada somente na tela principal
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#3E0D9F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#3E0D9F',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 40,
    position: 'relative',
  },
  closeButton: {
    backgroundColor: 'yellow',
    borderRadius: 25,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 10, // Alinha o botão à direita
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  productName: {
    fontSize: 16,
    color: '#fff',
  },
  productPrice: {
    fontSize: 16,
    color: '#fff',
  },
  separator: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
  },
});
