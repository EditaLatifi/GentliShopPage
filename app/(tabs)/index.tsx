import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = () => {
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

      <View style={styles.categorySection}>
        <TouchableOpacity style={styles.categoryCard}>
          <Image
            source={{ uri: 'https://gentli.com/wp-content/uploads/2023/03/Untitled-design-65.png' }}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Meshkuj</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryCard}>
          <Image
            source={{ uri: 'https://gentli.com/wp-content/uploads/2023/08/832036-marines-ocean_insta_post2.jpg' }}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Fëmije</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryCard}>
          <Image
            source={{ uri: 'https://gentli.com/wp-content/uploads/2023/03/Untitled-design-63-1.png' }}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Femra</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    marginBottom: 20,
  },
  categorySection: {
  },
  categoryCard: {
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: 300,
  },
  categoryText: {
    position: 'absolute',
    bottom: '50%',
    left: '45%',
    fontSize: 18,
    fontWeight: 'bold', 
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});

export default HomeScreen;
