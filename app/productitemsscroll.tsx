import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ProductItemProps {
  imageUri: string;
  title: string;
}

const ProductItemScroll: React.FC<ProductItemProps> = ({ imageUri, title }) => (
  <View style={styles.productItem}>
    <Image source={{ uri: imageUri }} style={styles.productImage} />
    <Text style={styles.productTitle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  productItem: {
    width: 140,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  productImage: {
    width: 140,
    height: 140,
    resizeMode: 'cover',
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default ProductItemScroll;
