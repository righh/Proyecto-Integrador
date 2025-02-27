import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type ButtonProps = {
  title: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
  buttonStyle?: object;
  textStyle?: object;
};

const Button = ({ title, icon, onPress, buttonStyle, textStyle }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      {icon && <MaterialIcons name={icon} size={18} color="#4CAF50" />}
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 15,
  },
  text: {
    fontSize: 13,
    marginLeft: 5,
    color: "white"
  },
});

export default Button;