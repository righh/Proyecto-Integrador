import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import PasswordInputField from '../components/PasswordInputField';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función mock para iniciar sesión
  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Por favor, ingrese usuario y contraseña.');
      return;
    }
    Alert.alert('Inicio de sesión', `Bienvenido, ${username}`);
  };

  // Función mock para recuperar contraseña
  const handleForgotPassword = () => {
    Alert.alert('Recuperación de contraseña', 'Se ha enviado un enlace de recuperación a tu correo.');
  };

  // Función mock para registrarse
  const handleRegister = () => {
    Alert.alert('Registro', 'Redirigiendo a la página de registro...');
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Image source={require('../assets/hotelera.png')} style={styles.image} />
          <View style={styles.loginBox}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            <InputField 
              label="Usuario:" 
              value={username} 
              onChangeText={setUsername} 
              placeholder="Ingrese su usuario"
              labelStyle={styles.greenText}
            />
            <PasswordInputField 
              label="Contraseña:" 
              value={password} 
              onChangeText={setPassword} 
              placeholder="Ingrese su contraseña"
              labelStyle={styles.greenText}
            />
            <Button title="Iniciar Sesión" onPress={handleLogin} buttonStyle={styles.loginButton} textStyle={styles.whiteText} />
            <Button title="¿Olvidaste tu contraseña?" icon="help-outline" onPress={handleForgotPassword} textStyle={styles.greenText} />
            <Button title="Regístrate" icon="person-add" onPress={handleRegister} textStyle={styles.greenText} />
          </View>
        </View>
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    height: 570,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  loginBox: {
    backgroundColor: '#e3f8f8',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#4CAF50',
  },
  greenText: {
    color: '#4CAF50',
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  whiteText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;

