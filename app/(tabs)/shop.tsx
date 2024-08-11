import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../footer';
import ProductScrollSection from '../productscrollsection';

interface ProductItemProps {
  imageUri: string;
  title: string;
  price?: string;
  discount?: string;
  category?: string;
}

const ShopPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          <Ionicons name="menu" size={28} color="#333" />
        </TouchableOpacity>

        <Image source={{ uri: 'https://gentli.com/wp-content/uploads/2022/02/gentlismall.png' }} style={styles.logo} />

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.searchIcon}>
            <Ionicons name="search" size={28} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginIcon}>
            <FontAwesome name="user" size={28} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

     <ProductScrollSection />

      <View style={styles.productGrid}>
        <ProductItem imageUri='https://nesha.digitalflow.systems/2/2576/7320562793817-gallery-1.png' title='VAGABOND' category='Cizme' price='129,90 €' />
        <ProductItem imageUri='https://nesha.digitalflow.systems/11/144/7320562579596-gallery-1.jpg' title='VAGABOND' category='Cizme' price='89,90 €' discount='79,90 €' />
        <ProductItem imageUri='https://nesha.digitalflow.systems/11/144/7320562579596-gallery-4.jpg' title='VAGABOND' category='Cizme' price='99,90 €' discount='89,90 €' />
        <ProductItem imageUri='https://nesha.digitalflow.systems/11/144/7320562587126-gallery-1.jpg' title='VAGABOND' category='Cizme' price='89,90 €' />
        <ProductItem imageUri='https://nesha.digitalflow.systems/2/2576/7320562794616-gallery-1.png' title='VAGABOND' category='Cizme' price='89,90 €' />
        <ProductItem imageUri='https://nesha.digitalflow.systems/11/144/7320562587126-gallery-1.jpg' title='VAGABOND' category='Cizme' price='89,90 €' />
        <ProductItem imageUri='https://nesha.digitalflow.systems/2/2576/7320562793817-gallery-1.png' title='VAGABOND' category='Cizme' price='89,90 €' />
        <ProductItem imageUri='https://nesha.digitalflow.systems/2/2576/7320562794616-gallery-1.png' title='VAGABOND' category='Cizme' price='89,90 €' />
        <ProductItem imageUri='https://nesha.digitalflow.systems/11/144/7320562579596-gallery-1.jpg' title='VAGABOND' category='Cizme' price='89,90 €' />
        <ProductItem imageUri='https://nesha.digitalflow.systems/2/1129/8720243342881-gallery-1.JPG' title='VAGABOND' category='Cizme' price='89,90 €' />
      </View>
      
      <Footer />

    </ScrollView>
  );
};

const ProductItem: React.FC<ProductItemProps> = ({ imageUri, title, price, discount, category }) => {
  return (
    <View style={styles.productItem}>
      <Image source={{ uri: imageUri }} style={styles.productImage} />
      <View style={styles.heartIconContainer}>
        <Ionicons name="heart" size={24} color="#000" />
      </View>
      <Text style={styles.productTitle}>{title}</Text>
      {category && <Text style={styles.productCategory}>{category}</Text>}
      <View style={styles.priceContainer}>
        {discount ? (
          <>
            <Text style={styles.regularPrice}>{price}</Text>
            <Text style={styles.discountPrice}>{discount}</Text>
          </>
        ) : (
          price && <Text style={styles.regularPrice}>{price}</Text>
        )}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: { 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuIcon: {
    flex: 1,
    alignItems: 'flex-start',
  },
  logo: {
   flex: 2,
    height: 40,
    marginRight: 15,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  headerRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  searchIcon: {
    paddingHorizontal: 10,
  },
  loginIcon: {
    paddingHorizontal: 10,
  },
  content: {
    padding: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  firstSection: {
    padding: 5,
    backgroundColor: '#fff',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  productItem: {
    width: '50%',
    marginBottom: 5,
    backgroundColor: '#fff',
    elevation: 2,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  heartIconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.0)', 
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'left',
    marginLeft: 10,
  },
  productCategory: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'left',
    marginHorizontal: 10,
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 10,
    marginLeft: 10,
  },
  regularPrice: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  discountPrice: {
    fontSize: 14,
    color: '#d9534f',
    textAlign: 'center',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
});

export default ShopPage;
