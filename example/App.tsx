import { StyleSheet, Text, View } from 'react-native';

import * as ExpoNothingGlyphModule from 'expo-nothing-glyph-module';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoNothingGlyphModule.hello()}</Text>
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
