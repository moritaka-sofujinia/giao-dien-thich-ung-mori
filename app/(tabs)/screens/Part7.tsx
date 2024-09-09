import React from 'react';
import { StatusBar, View, Text, StyleSheet, Platform, useWindowDimensions } from 'react-native';

const Part7 = () => {
  const { height, width } = useWindowDimensions();
  const isLandscape = width > height;

  // Xác định màu nền và kiểu chữ dựa trên nền tảng và hướng màn hình
  const statusBarBackgroundColor = Platform.OS === 'ios' ? 'blue' : 'green';
  const statusBarStyle = isLandscape ? 'light-content' : 'dark-content';

  // Điều chỉnh giao diện dựa trên hướng màn hình
  const containerStyle = isLandscape ? styles.containerLandscape : styles.containerPortrait;
  const textStyle = isLandscape ? styles.textLandscape : styles.textPortrait;

  return (
    <View style={[styles.container, containerStyle]}>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={statusBarBackgroundColor}
      />
      <Text style={textStyle}>Đây là đoạn chữ thử nghiệm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerPortrait: {
    backgroundColor: '#F0F0F0',  // Màu nền cho chế độ dọc
  },
  containerLandscape: {
    backgroundColor: '#C0C0C0',  // Màu nền cho chế độ ngang
  },
  textPortrait: {
    fontSize: 20,
    fontWeight: '600',
    color: Platform.OS === 'ios' ? '#0000FF' : '#00FF00',  // Màu chữ tùy vào nền tảng
  },
  textLandscape: {
    fontSize: 24,  // Tăng kích thước chữ khi màn hình ngang
    fontWeight: '700',  // Chữ đậm hơn khi ở chế độ ngang
    color: Platform.OS === 'ios' ? '#FFFFFF' : '#FFFF00',  // Màu chữ tùy nền tảng và hướng
  },
});

export default Part7;
