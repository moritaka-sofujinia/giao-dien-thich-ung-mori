import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const Part6 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Đây là đoạn chữ thử nghiệm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Platform.select({
      ios: 25, // Tăng thêm khoảng cách cho iOS
      android: 15, // Cân đối lại padding cho Android
    }),
    backgroundColor: Platform.select({
      ios: '#007AFF', // Màu xanh iOS quen thuộc
      android: '#3DDC84', // Màu xanh lá đặc trưng của Android
    }),
    borderRadius: Platform.OS === 'ios' ? 35 : 25, // Bo góc mạnh hơn cho iOS
    shadowColor: '#000', // Bóng đổ cho cả 2 nền tảng
    shadowOpacity: Platform.OS === 'ios' ? 0.3 : 0.1, // Đổ bóng nhẹ hơn trên Android
    shadowOffset: { width: 0, height: Platform.OS === 'ios' ? 5 : 2 }, // Điều chỉnh đổ bóng
    elevation: Platform.OS === 'android' ? 5 : 0,  // Tăng độ cao trên Android để tạo đổ bóng
    marginTop: Platform.select({
      ios: 60,  // Khoảng cách trên iOS lớn hơn
      android: 30,  // Giữ khoảng cách hợp lý cho Android
    }),
    marginHorizontal: 20, // Thêm khoảng cách ngang cho cả hai nền tảng
  },
  text: {
    fontSize: Platform.OS === 'ios' ? 20 : 18, // Tăng kích thước chữ cho iOS
    fontWeight: '600', // Đặt độ đậm chữ đều cho cả hai
    color: '#FFFFFF', // Giữ màu trắng để nổi bật trên nền màu
    textAlign: 'center', // Canh giữa cho cả hai nền tảng
    lineHeight: Platform.OS === 'ios' ? 26 : 22, // Điều chỉnh khoảng cách dòng
    letterSpacing: 1, // Thêm khoảng cách giữa các chữ cái cho dễ đọc hơn
  },
  button: {
    width: Platform.OS === 'ios' ? 210 : 190, // Tăng kích thước button để dễ tương tác hơn
    height: Platform.OS === 'ios' ? 55 : 48,  // Điều chỉnh chiều cao phù hợp
    borderColor: Platform.OS === 'ios' ? '#007AFF' : '#3DDC84', // Màu viền tương ứng với nền
    borderWidth: 2, // Giữ độ rộng viền như nhau
    borderRadius: 10, // Thêm bo góc cho button
    justifyContent: 'center', // Căn giữa nội dung trong button
    alignItems: 'center',
    marginTop: 15, // Khoảng cách từ button đến nội dung
  },
});

export default Part6;
