import React from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import Card from './Card';

const products = [
  { id: 1, name: 'Sapporo', price: '$189.07', available: 2, image: require('../assets/sapporo.png') },
  { id: 2, name: 'Milan Jumbo', price: '$25.00', available: 5, image: require('../assets/milan.png') },
  { id: 3, name: 'Reims Premium', price: '$15.00', available: 3, image: require('../assets/reims.png') },
  { id: 4, name: 'Hotelera', price: '$30.00', available: 10, image: require('../assets/hotelera.png') },
  { id: 5, name: 'Sapporo', price: '$189.07', available: 0, image: require('../assets/sapporo.png') }, // Sin stock
  { id: 6, name: 'Milan Jumbo', price: '$25.00', available: 5, image: require('../assets/milan.png') },
  { id: 7, name: 'Reims Premium', price: '$15.00', available: 3, image: require('../assets/reims.png') },
  { id: 8, name: 'Sapporo', price: '$189.07', available: 2, image: require('../assets/sapporo.png') }
];

// Función mock de compra
const handlePurchase = (name: string, available: number) => {
  if (available > 0) {
    Alert.alert('Compra Exitosa', `Has comprado 1 unidad de ${name}.`);
  } else {
    Alert.alert('Producto Agotado', `Lo sentimos, ${name} no tiene stock disponible.`);
  }
};

const ProductList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <Card 
            name={item.name} 
            price={item.price} 
            available={item.available} 
            image={item.image} 
            onPress={() => handlePurchase(item.name, item.available)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20, // Espacio entre Header y Cards
    paddingHorizontal: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});

export default ProductList;