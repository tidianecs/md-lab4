import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

// This screen is shown when the address does not match any route of the app.
export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This page does not exist.</Text>
      <Link href="/" style={styles.link}>
        Back to the menu
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 16,
    fontSize: 16,
    color: '#C0392B',
  },
});