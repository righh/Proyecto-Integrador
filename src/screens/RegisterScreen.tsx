import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InputField from '../components/InputField';
import PasswordInputField from '../components/PasswordInputField';

const RegisterScreen = () => {
  const [form, setForm] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    telefono: '',
    correo: '',
    usuario: '',
    contraseña: '',
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  // Función mock para registrar usuario
  const handleRegister = () => {
    const { nombre, apellidoPaterno, apellidoMaterno, telefono, correo, usuario, contraseña } = form;

    if (!nombre || !apellidoPaterno || !apellidoMaterno || !telefono || !correo || !usuario || !contraseña) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    Alert.alert(
      'Registro Exitoso',
      `Bienvenido, ${nombre}! Tu usuario "${usuario}" ha sido registrado.`,
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Registro</Text>
          <InputField label="Nombre" value={form.nombre} onChangeText={(value) => handleChange('nombre', value)} placeholder="Ingrese su nombre" />
          <InputField label="Apellido Paterno" value={form.apellidoPaterno} onChangeText={(value) => handleChange('apellidoPaterno', value)} placeholder="Ingrese su apellido paterno" />
          <InputField label="Apellido Materno" value={form.apellidoMaterno} onChangeText={(value) => handleChange('apellidoMaterno', value)} placeholder="Ingrese su apellido materno" />
          <InputField label="Teléfono" value={form.telefono} onChangeText={(value) => handleChange('telefono', value)} placeholder="Ingrese su teléfono" />
          <InputField label="Correo" value={form.correo} onChangeText={(value) => handleChange('correo', value)} placeholder="Ingrese su correo" />
          <InputField label="Usuario" value={form.usuario} onChangeText={(value) => handleChange('usuario', value)} placeholder="Ingrese su usuario" />
          <PasswordInputField label="Contraseña" value={form.contraseña} onChangeText={(value) => handleChange('contraseña', value)} placeholder="Ingrese su contraseña" />
          <Button title="Registrar" onPress={handleRegister} buttonStyle={styles.registerButton} textStyle={styles.whiteText} />
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
    flexGrow: 1
  },
  formContainer: {
    backgroundColor: '#e3f8f8',
    padding: 20,
    borderRadius: 15,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4CAF50',
  },
  registerButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
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
  footerSpacing: {
    height: 40,
  },
});

export default RegisterScreen;