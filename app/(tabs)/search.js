import { useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable, StyleSheet } from 'react-native';
import menu from '../../data/menu';
import DishCard from '../../components/DishCard';

// Tab 2: our chosen extension = a search field with an empty state.
export default function SearchScreen() {
  const [text, setText] = useState('');

  // Keep the dishes whose name or category contains the typed text
  const results = menu.filter(
    (dish) =>
      dish.name.toLowerCase().includes(text.toLowerCase()) ||
      dish.category.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search a dish (e.g. yassa, drinks...)"
        value={text}
        onChangeText={setText}
      />

      {results.length === 0 ? (
        // Empty state: no dish matches
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>No results</Text>
          <Text style={styles.emptyText}>No dish matches "{text}"</Text>
          <Pressable style={styles.button} onPress={() => setText('')}>
            <Text style={styles.buttonText}>Clear search</Text>
          </Pressable>
        </View>
      ) : (
        <FlatList
          data={results}
          renderItem={({ item }) => <DishCard dish={item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6F0',
    padding: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  empty: {
    alignItems: 'center',
    marginTop: 60,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#C0392B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
