import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import menu from '../../data/menu';

// Detail screen: we ONLY receive the id in the URL (/dish/3)
// and then we look up the dish ourselves in the data.
export default function DishDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const dish = menu.find((d) => d.id === id);

  // Not-found state: the id does not match any dish
  if (!dish) {
    return (
      <View style={styles.notFound}>
        <Stack.Screen options={{ title: 'Dish not found' }} />
        <Text style={styles.notFoundTitle}>This dish does not exist</Text>
        <Text style={styles.notFoundText}>No dish matches the id "{id}".</Text>
        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Go back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* The header title becomes the dish name */}
      <Stack.Screen options={{ title: dish.name }} />

      <View style={styles.circle}>
        <Text style={styles.circleText}>{dish.name[0]}</Text>
      </View>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.price}>{dish.price} FCFA</Text>

      <View style={[styles.badge, dish.available ? styles.badgeAvailable : styles.badgeSoldOut]}>
        <Text style={styles.badgeText}>{dish.available ? 'Available' : 'Sold out today'}</Text>
      </View>

      <Text style={styles.section}>Description</Text>
      <Text style={styles.description}>{dish.description}</Text>

      <Text style={styles.section}>Ingredients</Text>
      {dish.ingredients.map((ingredient) => (
        <Text key={ingredient} style={styles.ingredient}>- {ingredient}</Text>
      ))}

      <Text style={styles.section}>Category</Text>
      <Text style={styles.description}>{dish.category}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6F0',
    padding: 20,
  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#F5D6CF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  circleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#C0392B',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginTop: 12,
  },
  price: {
    fontSize: 20,
    color: '#C0392B',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 4,
  },
  badge: {
    alignSelf: 'center',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginTop: 12,
  },
  badgeAvailable: {
    backgroundColor: '#27AE60',
  },
  badgeSoldOut: {
    backgroundColor: '#999',
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  section: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 24,
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
  ingredient: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FDF6F0',
  },
  notFoundTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  notFoundText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#C0392B',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});