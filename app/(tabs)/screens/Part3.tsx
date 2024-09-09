import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';

const Part3 = () => {
  const [isPortrait, setIsPortrait] = useState(true);

  const handleOrientationChange = ({ window }: any) => {
    setIsPortrait(window.height > window.width);
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', handleOrientationChange);

    // Kiểm tra hướng màn hình ban đầu
    handleOrientationChange({ window: Dimensions.get('window') });

    // Gỡ bỏ sự kiện khi component bị unmount
    return () => subscription?.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={isPortrait ? styles.buttonContainerPortrait : styles.buttonContainerLandscape}>
        <Button title="Nút 1" onPress={() => {}} color="#77E4C8" />
        <Button title="Nút 2" onPress={() => {}} color="#77E4C8" />
        <Button title="Nút 3" onPress={() => {}} color="#77E4C8" />
        <Button title="Nút 4" onPress={() => {}} color="#77E4C8" />
        <Button title="Nút 5" onPress={() => {}} color="#77E4C8" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainerPortrait: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonContainerLandscape: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default Part3;
