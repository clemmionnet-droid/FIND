import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FIND</Text>

      <Text style={styles.title}>
        Ta culture.{'\n'}Ton univers.
      </Text>

      <Text style={styles.subtitle}>
        Découvre ce que tes amis aiment,{'\n'}
        partage tes collections et trouve{'\n'}
        de nouvelles idées.
      </Text>

      <View style={styles.cards}>
        <Pressable style={styles.card}>
          <Text style={styles.emoji}>📚</Text>
          <Text style={styles.cardTitle}>Livres</Text>
        </Pressable>

        <Pressable style={styles.card}>
          <Text style={styles.emoji}>💿</Text>
          <Text style={styles.cardTitle}>Vinyles</Text>
        </Pressable>

        <Pressable style={styles.card}>
          <Text style={styles.emoji}>🎲</Text>
          <Text style={styles.cardTitle}>Jeux</Text>
        </Pressable>

        <Pressable style={styles.card}>
          <Text style={styles.emoji}>🧩</Text>
          <Text style={styles.cardTitle}>Puzzles</Text>
        </Pressable>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Commencer</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E6',
    paddingHorizontal: 24,
    paddingTop: 80,
  },

  logo: {
    fontSize: 28,
    fontWeight: '900',
    color: '#111111',
    letterSpacing: 4,
  },

  title: {
    marginTop: 55,
    fontSize: 42,
    lineHeight: 44,
    fontWeight: '900',
    color: '#111111',
  },

  subtitle: {
    marginTop: 18,
    fontSize: 17,
    lineHeight: 25,
    color: '#555555',
  },

  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 35,
  },

  card: {
    width: '47%',
    minHeight: 105,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    justifyContent: 'center',
  },

  emoji: {
    fontSize: 28,
  },

  cardTitle: {
    marginTop: 8,
    fontSize: 17,
    fontWeight: '700',
    color: '#111111',
  },

  button: {
    marginTop: 30,
    backgroundColor: '#F2C94C',
    borderRadius: 16,
    paddingVertical: 17,
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111111',
  },
});
