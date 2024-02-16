import * as ExpoNothingGlyphModule from "expo-nothing-glyph-module";
import { useEffect, useRef } from "react";
import { Animated, Button, StyleSheet, View } from "react-native";

export default function App() {
  const animatedValue = useRef(
    new Animated.Value(0, { useNativeDriver: false }),
  );
  const startAnimation = () => {
    console.log("Animated Value", animatedValue);
    const timing = Animated.spring(animatedValue.current, {
      toValue: 100,
      useNativeDriver: false,
      isInteraction: false,
      velocity: 0.1
    });
    timing.start(() => {
      animatedValue.current.setValue(0);
    });
  };

  useEffect(() => {
    animatedValue.current.addListener(({ value }) => {
      console.log("Changing value", value);
      ExpoNothingGlyphModule.displayProgress({
        cycle: 2,
        progress: value,
      });
    });
  }, [animatedValue]);

  return (
    <View style={styles.container}>
      <Button
        title="Toggle Progress to 20%"
        onPress={() =>
          ExpoNothingGlyphModule.displayProgress({
            cycle: 2,
            progress: 20,
          })
        }
      />
      <Button
        title="Toggle Progress to 80%"
        onPress={() =>
          ExpoNothingGlyphModule.displayProgress({
            cycle: 2,
            progress: 80,
          })
        }
      />
      <Button
        title="Toggle Progress to 100%"
        onPress={() =>
          ExpoNothingGlyphModule.displayProgress({
            cycle: 2,
            progress: 100,
          })
        }
      />
      <Button
        title="Toggle Progress to 0%"
        onPress={() =>
          ExpoNothingGlyphModule.displayProgress({
            cycle: 2,
            progress: 0,
          })
        }
      />
      <Button title="Animate from 0 to 100" onPress={() => startAnimation()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
