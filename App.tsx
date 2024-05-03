import React from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text>This is the main menu</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
