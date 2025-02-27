import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type PasswordInputFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  labelStyle?: object;
};

const PasswordInputField = ({ label, value, onChangeText, placeholder }: PasswordInputFieldProps) => {
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          value={value} 
          onChangeText={onChangeText} 
          placeholder={placeholder} 
          placeholderTextColor="#888"
          secureTextEntry={secureText}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.icon}>
          <MaterialIcons name={secureText ? "visibility-off" : "visibility"} size={20} color="#555" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: "#4CAF50"
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
    paddingRight: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  icon: {
    padding: 5,
  },
});

export default PasswordInputField;