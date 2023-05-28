import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CustomImage from "./components/CustomImage";
import Button from "./components/Button";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const imageUrl =
  "https://i.pinimg.com/736x/a0/25/04/a025049f3035cf3db789cc4cba5dd29e.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <CustomImage uri={imageUrl} />
      </View>
      <View style={styles.footerContainer}>
        <Button
          label="Choose a photo"
          icon={<FontAwesome name="picture-o" size={18} color="#25292e" />}
        />
        <Button label="Use this photo" pain />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 60,
  },
  footerContainer: {
    flex: 1 / 2,
    alignItems: "center",
    gap: 40,
  },
});
