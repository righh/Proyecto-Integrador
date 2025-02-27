import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type CardProps = {
  name: string;
  price: string;
  available: number;
  image: any;
  onPress: () => void; // Agregar la acción de compra
};

const Card = ({ name, price, available, image, onPress }: CardProps) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>
        Precio: <Text style={styles.priceText}>{price}</Text>
      </Text>
      <Text style={styles.available}>
        Disponibles: <Text style={styles.availableText}>{available}</Text>
      </Text>
      <TouchableOpacity onPress={onPress} style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    width: '45%',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 110,
    height: 110,
    marginBottom: 10,
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
  },
  priceText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  available: {
    fontSize: 13,
    color: 'gray',
    marginTop: 5,
  },
  availableText: {
    fontWeight: 'bold',
    color: '#FF5733',
  },
  buyButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Card;


