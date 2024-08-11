import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProductItemScroll from './productitemsscroll'; // Adjust the path if necessary

const ProductScrollSection = () => {
  return (
    <View style={styles.firstSection}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ProductItemScroll imageUri='https://gentli.com/wp-content/uploads/2023/08/5616-201-87-2.jpg' title='Gjysem çizme' />
        <ProductItemScroll imageUri='https://gentli.com/wp-content/uploads/2023/08/5616-101-20-2.jpg' title='Çizme' />
        <ProductItemScroll imageUri='https://gentli.com/wp-content/uploads/2024/02/sandale.png' title='Sandale' />
        <ProductItemScroll imageUri='https://gentli.com/wp-content/uploads/2023/08/Untitled-design-2.png' title='Patika' />
        <ProductItemScroll imageUri='https://gentli.com/wp-content/uploads/2023/08/BM03-001-15.jpg' title='Çanta' />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  firstSection: {
    padding: 5,
    backgroundColor: '#fff',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
});

export default ProductScrollSection;
