import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <ImageBackground 
      source={require('./back-fur.png')}
      style={styles.background} 
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Nguyễn Duy Dũng</Text>
        <Text style={styles.title}>21248801030179</Text>
        <View style={styles.column}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Part1')}>
            <Text style={styles.buttonText}>Phần 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Part2')}>
            <Text style={styles.buttonText}>Phần 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Part3')}>
            <Text style={styles.buttonText}>Phần 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Part4')}>
            <Text style={styles.buttonText}>Phần 4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Part5')}>
            <Text style={styles.buttonText}>Phần 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Part6')}>
            <Text style={styles.buttonText}>Phần 6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Part7')}>
            <Text style={styles.buttonText}>Phần 7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Part8')}>
            <Text style={styles.buttonText}>Phần 8</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: Dimensions.get('window').width, // Full width
    height: Dimensions.get('window').height, // Full height
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#77E4C8',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    margin: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
