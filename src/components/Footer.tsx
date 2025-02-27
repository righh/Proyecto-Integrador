import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

const Footer = () => {
  return (
    <View style={styles.container}>
      {/* Redes Sociales */}
      <Text style={styles.sectionTitle}>Síguenos en nuestras redes sociales</Text>
      <View style={styles.row}>
        <Button title="Facebook" icon="facebook" onPress={() => {}} />
        <Button title="Twitter" icon="public" onPress={() => {}} />
        <Button title="Instagram" icon="photo-camera" onPress={() => {}} />
      </View>

      {/* Línea divisoria */}
      <View style={styles.divider} />

      {/* Atención al Cliente */}
      <Text style={styles.sectionTitle}>Atención al Cliente</Text>
      <View style={styles.infoContainer}>
        <Button title="Teléfono: No disponible" icon="phone" onPress={() => {}} />
        <Button title="Correo: info@cajafuerte.com" icon="email" onPress={() => {}} />
        <Button title="Ubicación: No disponible" icon="location-on" onPress={() => {}} />
      </View>

      {/* Línea divisoria */}
      <View style={styles.divider} />

      {/* Datos de la Empresa */}
      <Text style={styles.sectionTitle}>Datos de la Empresa</Text>
      <View style={styles.companyContainer}>
        <View style={styles.column}>
          <Button title="Deslinde Legal" icon="gavel" onPress={() => {}} />
          <Button title="Política de Privacidad" icon="lock" onPress={() => {}} />
        </View>
        <View style={styles.column}>
          <Button title="Términos y Condiciones" icon="description" onPress={() => {}} />
          <Button title="Misión" icon="flag" onPress={() => {}} />
          <Button title="Visión" icon="visibility" onPress={() => {}} />
        </View>
      </View>

      {/* Línea divisoria */}
      <View style={styles.divider} />

      {/* Derechos Reservados */}
      <Text style={styles.copyright}>
        © 2025 Caja Fuerte | Todos los derechos reservados
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 15,
  },
  infoContainer: {
    alignItems: 'center',
    gap: 8,
    marginBottom: 15,
  },
  companyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 20,
    marginBottom: 15,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  divider: {
    width: '90%',
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 15,
  },
  copyright: {
    color: 'gray',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Footer;