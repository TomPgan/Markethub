import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>Hello, this is my first screen app!!</Text>
      <Link href="/profile" style={styles.button}>Go to Profile page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'red',
  }
})
