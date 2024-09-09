import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const Part2 = () => {
  // Lấy chiều rộng của màn hình hiện tại
  const screenWidth = Dimensions.get('window').width;

  const imageWidth = screenWidth * 0.8; // 80% chiều rộng màn hình
  const imageHeight = imageWidth * (9 / 16); // Tỷ lệ 16/9

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://drive.google.com/uc?export=view&id=17Zk76Ue0Gd9SeM55zYd8nKDMUCb1p0ae' }} 
        style={{ width: imageWidth, height: imageHeight }}
        resizeMode="contain" // Giữ nguyên tỷ lệ hình ảnh
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Part2;
