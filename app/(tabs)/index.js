import { View, Text, FlatList, StyleSheet } from 'react-native';
import menu from '../../data/menu';
import DishCard from '../../components/DishCard';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's menu</Text>
      <Text style={styles.subtitle}>{menu.length} dishes served today</Text>

      <FlatList
        data={menu}
        renderItem={({ item }) => <DishCard dish={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6F0',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
});