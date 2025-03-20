import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const salesData = [
  { id: '1', saleNumber: '1235467', seller: 'Maria Joaquina', date: '20/03/2025', time: '10:05hrs' },
  { id: '2', saleNumber: '1235468', seller: 'Carlos Silva', date: '20/03/2025', time: '11:30hrs' },
  { id: '3', saleNumber: '1235469', seller: 'Ana Souza', date: '21/03/2025', time: '09:45hrs' },
];

export default function SalesAdminScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.saleItem}>
      <View style={styles.saleInfo}>
        <Text style={styles.saleText}>Venda #{item.saleNumber}</Text>
        <Text style={styles.sellerText}>Vendedora: {item.seller}</Text>
      </View>
      <View style={styles.saleDate}>
        <Text style={styles.dateText}>{item.date}</Text>
        <Text style={styles.dateText}>{item.time}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver mais</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vendas (administrador)</Text>
      <FlatList
        data={salesData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3E0D9F',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  saleItem: {
    backgroundColor: '#fff',
    borderColor: '#EBC413',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  saleInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  saleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sellerText: {
    fontSize: 14,
  },
  saleDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#3E0D9F',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
