import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function DishCard({ dish }) {
  const router = useRouter();

  return (
    <Pressable
      style={[styles.card, !dish.available && styles.cardUnavailable]}
      onPress={() => router.push('/dish/' + dish.id)}
    >
      {/* A circle with the first letter of the dish name */}
      <View style={styles.circle}>
        <Text style={styles.circleText}>{dish.name[0]}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.category}>{dish.category}</Text>
        {!dish.available && <Text style={styles.soldOut}>Sold out today</Text>}
      </View>

      <Text style={styles.price}>{dish.price} F</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 14,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  cardUnavailable: {
    opacity: 0.5,
  },
  circle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F5D6CF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  circleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C0392B',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
  category: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  soldOut: {
    fontSize: 12,
    color: '#C0392B',
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C0392B',
  },
});