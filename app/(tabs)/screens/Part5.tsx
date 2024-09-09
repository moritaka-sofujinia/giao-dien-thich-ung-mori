import React, { useState, useEffect } from 'react';
import { View, Button, TextInput, Image, StyleSheet, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';

const Part5 = () => {
  const [isPortrait, setIsPortrait] = useState(true);

  // Hàm kiểm tra hướng màn hình
  const checkOrientation = () => {
    const dim = Dimensions.get('window');
    return dim.height >= dim.width;
  };

  // Cập nhật trạng thái khi hướng màn hình thay đổi
  useEffect(() => {
    const handleOrientationChange = () => {
      setIsPortrait(checkOrientation());
    };

    // Thêm sự kiện lắng nghe khi hướng màn hình thay đổi
    const subscription = Dimensions.addEventListener('change', handleOrientationChange);

    return () => {
      subscription?.remove(); // Sử dụng remove() từ subscription để xóa sự kiện
    };
  }, []);

  // Tính toán chiều rộng và chiều cao của hình ảnh dựa trên hướng màn hình
  const screenWidth = Dimensions.get('window').width;
  const imageWidth = screenWidth * 0.8;

  // Giảm chiều cao trong chế độ ngang
  const imageHeight = isPortrait ? imageWidth * (9 / 16) : imageWidth * (3 / 16); 

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      // Điều chỉnh khoảng cách khi bàn phím xuất hiện
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} 
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://drive.google.com/uc?export=view&id=17Zk76Ue0Gd9SeM55zYd8nKDMUCb1p0ae' }} 
          style={{ width: imageWidth, height: imageHeight }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Bấm vào đây để nhập chữ"
        />
      </View>
      <View
        style={[
          styles.buttonContainer,
          isPortrait ? styles.portraitButtonContainer : styles.landscapeButtonContainer,
        ]}
      >
        <Button title="Nút 1" onPress={() => {}} color="#77E4C8"/>
        <Button title="Nút 2" onPress={() => {}} color="#77E4C8"/>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    marginBottom: 20, // Khoảng cách giữa hình ảnh và các thành phần khác
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  portraitButtonContainer: {
    flexDirection: 'column',
    height: 120,
  },
  landscapeButtonContainer: {
    flexDirection: 'row',
    height: 60,
  },
});

export default Part5;
