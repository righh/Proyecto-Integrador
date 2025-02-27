import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Button from './Button';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>Cajas Fuertes</Text>
        </View>
        <Text style={styles.tagline}>Tu seguridad es nuestra prioridad</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.buttonContainer}
      >
        <Button title="Home" icon="home" onPress={() => {}} />
        <Button title="Servicios" icon="build" onPress={() => {}} />
        <Button title="Productos" icon="shopping-cart" onPress={() => {}} />
        <Button title="Iniciar Sesión" icon="login" onPress={() => {}} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: '#1E1E1E',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 45,
    height: 45,
    marginRight: 3,
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  tagline: {
    color: '#4CAF50',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    flexShrink: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 14,
  },
});

export default Header;