import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
    return (
        <View>
            <Text style={styles.text}>This is the profile page!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'red',
    }
})