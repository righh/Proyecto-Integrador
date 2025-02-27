import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Alert } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

const products = [
  {
    name: 'Caja Fuerte Digital',
    price: '$150 USD',
    available: 10,
    image: require('../assets/milan.png'),
  },
  {
    name: 'Caja Fuerte Biométrica',
    price: '$250 USD',
    available: 5,
    image: require('../assets/reims.png'),
  },
];

const HomeScreen = () => {
  // Función mock para simular una compra
  const handleBuy = (productName: string) => {
    Alert.alert('Compra simulada', `Has seleccionado: ${productName}`);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.bannerContainer}>
          <Image source={require('../assets/hotelera.png')} style={styles.banner} />
          <Text style={styles.bannerText}>Las mejores cajas fuertes al mejor precio</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Nuestros Productos</Text>
          <View style={styles.cardContainer}>
            {products.map((product, index) => (
              <Card key={index} {...product} onPress={() => handleBuy(product.name)} />
            ))}
          </View>
        </View>

        <View style={styles.aboutContainer}>
          <Text style={styles.sectionTitle}>Sobre Nosotros</Text>
          <Text style={styles.aboutText}>Somos líderes en la venta de cajas fuertes con la mejor calidad y seguridad del mercado. Garantizamos productos de alta tecnología con envíos a todo el país.</Text>
        </View>

        <View style={styles.footerSpacing} />
        <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  bannerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  banner: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  bannerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 10,
    textAlign: 'center',
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 15,
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  aboutContainer: {
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  aboutText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
    lineHeight: 24,
  },
  footerSpacing: {
    height: 60,
  },
});

export default HomeScreen;

