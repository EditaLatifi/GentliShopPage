import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.footerItem}>
        <FontAwesome name="shopping-bag" size={28} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerItem}>
        <FontAwesome name="heart" size={28} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerItem}>
        <FontAwesome name="shopping-cart" size={28} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerItem}>
        <Text style={styles.knappText}>KNAPP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#000',
    marginTop: 4,
  },
  knappText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    transform: [{ rotate: '-15deg' }],
  },
});

export default Footer;
