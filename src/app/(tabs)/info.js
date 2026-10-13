import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const openingHours = [
  { day: 'Monday - Friday', hours: '7:30 AM - 6:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export default function InfoScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Opening hours</Text>
      {openingHours.map((item) => (
        <View key={item.day} style={styles.row}>
          <Text style={styles.day}>{item.day}</Text>
          <Text style={[styles.hours, item.hours === 'Closed' && styles.closed]}>
            {item.hours}
          </Text>
        </View>
      ))}
      <Pressable style={styles.button} onPress={() => router.push('/about')}>
        <Text style={styles.buttonText}>About the cafeteria</Text>
      </Pressable>
      <Pressable style={styles.demoLink} onPress={() => router.push('/dish/999')}>
        <Text style={styles.demoLinkText}>Open a dish that does not exist (demo)</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6F0',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 14,
    marginBottom: 8,
    borderRadius: 8,
  },
  day: {
    fontSize: 16,
    color: '#333',
  },
  hours: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#27AE60',
  },
  closed: {
    color: '#C0392B',
  },
  button: {
    backgroundColor: '#C0392B',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  demoLink: {
    alignItems: 'center',
    marginTop: 16,
  },
  demoLinkText: {
    color: '#888',
    textDecorationLine: 'underline',
  },
});