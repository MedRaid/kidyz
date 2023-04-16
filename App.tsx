import React from 'react';
import {View, Text} from 'react-native';

function Home() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text>Kidyz</Text>
    </View>
  );
}
function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
