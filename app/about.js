import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

// This route opens as a modal (see app/_layout.js: presentation: 'modal').
export default function AboutScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/icon.png')} style={styles.logo} />

      <Text style={styles.title}>Campus Cafeteria</Text>
      <Text style={styles.text}>
        Homemade Senegalese dishes, served every day for students and staff.
      </Text>

      <Text style={styles.label}>Location</Text>
      <Text style={styles.text}>Main building, ground floor</Text>

      <Text style={styles.label}>Payment</Text>
      <Text style={styles.text}>Cash or mobile money</Text>

      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Close</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C0392B',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  text: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 6,
  },
  button: {
    backgroundColor: '#C0392B',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});