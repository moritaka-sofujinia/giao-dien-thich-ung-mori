import React from 'react';
import { View, Button, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const Part4 = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.content}>
        {/* Các thành phần khác */}
        <TextInput
          style={styles.input}
          placeholder="Bấm vào đây để nhập chữ"
        />
        <Button title="Test" onPress={() => { /* Logic khi nhấn nút */ }} color="#77E4C8"/>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#4444444',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 30,
  },
});

export default Part4;
