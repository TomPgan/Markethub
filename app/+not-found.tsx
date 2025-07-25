import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
    return(
        <>
            <Stack.Screen options={{ title: "Page was not found" }} />
            <View>
                <Link href="/" style={styles.button}>Go back to Home Screen</Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: 'red'
    },
})