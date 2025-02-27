import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

const ProductsSreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <ProductList />
        <Footer/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});

export default ProductsSreen;