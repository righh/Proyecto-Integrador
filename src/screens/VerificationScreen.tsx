import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VerificationScreen = () => {
  const [email, setEmail] = useState('');

  // Función mock para solicitar código de verificación
  const handleRequestCode = () => {
    if (!email.includes('@') || !email.includes('.')) {
      Alert.alert('Error', 'Por favor, introduce un correo válido.');
      return;
    }
    Alert.alert('Código Enviado', `Se ha enviado un código de verificación a ${email}`);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <View style={styles.verificationBox}>
            <Text style={styles.title}>Verificación de Correo</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Introduce tu correo electrónico" 
              value={email} 
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Button title="Solicitar Código" onPress={handleRequestCode} buttonStyle={styles.verifyButton} textStyle={styles.whiteText} />
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
    padding: 40,
    height: 500
  },
  verificationBox: {
    backgroundColor: '#e3f8f8',
    padding: 30,
    borderRadius: 15,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4CAF50',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  verifyButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  whiteText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VerificationScreen;