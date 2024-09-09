import React from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';

const Part1 = () => {
  // Lấy chiều rộng của màn hình hiện tại
  const screenWidth = Dimensions.get('window').width;

  // Lấy chiều rộng của màn hình hiện tại chia 2
  const buttonWidth = screenWidth / 2;

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer, { width: buttonWidth }]}>
        <Button title="Nút 1" onPress={() => {}} color="#77E4C8" />
      </View>
      <View style={[styles.buttonContainer, { width: buttonWidth }]}>
        <Button title="Nút 2" onPress={() => {}} color="#77E4C8" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Đặt các nút bấm cạnh nhau
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Chiều cao toàn màn hình
  },
  buttonContainer: {
    margin: 10, // Khoảng cách giữa các nút bấm
  },
});

export default Part1;
