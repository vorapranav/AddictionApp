import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "file:///Users/pranav/AddictoladPg3/trophiesimage.jpeg" }} style={{ width: 305, height: 159 }} />
    
      <Text style={{color: '#888', fontSize: 23}}>
          You have earned _____ TROPHIESS
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


