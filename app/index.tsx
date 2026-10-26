import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const univers = [
  { emoji: '📚', title: 'Livres', subtitle: 'Romans, BD, essais' },
  { emoji: '💿', title: 'Vinyles', subtitle: 'Albums & découvertes' },
  { emoji: '🎲', title: 'Jeux', subtitle: 'Pour jouer ensemble' },
  { emoji: '🧩', title: 'Puzzles', subtitle: 'Pour se poser' },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.logo}>FIND</Text>

          <Pressable style={styles.profileButton}>
            <Text style={styles.profileEmoji}>👤</Text>
          </Pressable>
        </View>

        {/* INTRO */}
        <View style={styles.intro}>
          <Text style={styles.eyebrow}>TON UNIVERS CULTUREL</Text>

          <Text style={styles.title}>
            Découvre.{'\n'}
            Partage.{'\n'}
            <Text style={styles.titleHighlight}>Trouve.</Text>
          </Text>

          <Text style={styles.description}>
            Découvre ce que tes amis aiment, partage tes collections
            et trouve de nouvelles idées.
          </Text>
        </View>

        {/* CTA */}
        <Pressable style={styles.mainButton}>
          <Text style={styles.mainButtonText}>Commencer à explorer</Text>
          <Text style={styles.arrow}>→</Text>
        </Pressable>

        {/* UNIVERS */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Tes univers</Text>
            <Text style={styles.sectionSubtitle}>
              Qu’est-ce qui te ressemble ?
            </Text>
          </View>
        </View>

        <View style={styles.grid}>
          {univers.map((univers, index) => (
            <Pressable
              key={univers.title}
              style={[
                styles.card,
                index === 0 && styles.cardYellow,
              ]}
            >
              <Text style={styles.emoji}>{univers.emoji}</Text>

              <Text style={styles.cardTitle}>{univers.title}</Text>

              <Text style={styles.cardSubtitle}>
                {univers.subtitle}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* SOCIAL */}
        <View style={styles.socialCard}>
          <View style={styles.socialIcon}>
            <Text style={styles.socialEmoji}>👥</Text>
          </View>

          <View style={styles.socialTextContainer}>
            <Text style={styles.socialTitle}>
              Vois ce que tes amis aiment
            </Text>

            <Text style={styles.socialDescription}>
              Suis leurs collections et découvre de nouvelles
              passions grâce à eux.
            </Text>
          </View>
        </View>

        {/* FOOTER */}
        <Text style={styles.footer}>
          FIND · Ta culture. Ton univers.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#111111',
  },

  container: {
    flex: 1,
    backgroundColor: '#111111',
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 42,
  },

  logo: {
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 3,
    color: '#F2C94C',
  },

  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F5F0E6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileEmoji: {
    fontSize: 20,
  },

  intro: {
    marginBottom: 28,
  },

  eyebrow: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.8,
    color: '#F2C94C',
    marginBottom: 12,
  },

  title: {
    fontSize: 46,
    lineHeight: 48,
    fontWeight: '900',
    color: '#F5F0E6',
    letterSpacing: -1.5,
  },

  titleHighlight: {
    color: '#F2C94C',
  },

  description: {
    marginTop: 20,
    fontSize: 17,
    lineHeight: 25,
    color: '#B8B8B8',
    maxWidth: 340,
  },

  mainButton: {
    backgroundColor: '#F2C94C',
    borderRadius: 18,
    minHeight: 62,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 42,
  },

  mainButtonText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#111111',
  },

  arrow: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111111',
  },

  sectionHeader: {
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#F5F0E6',
  },

  sectionSubtitle: {
    marginTop: 5,
    fontSize: 14,
    color: '#8E8E8E',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },

  card: {
    width: '48%',
    minHeight: 145,
    backgroundColor: '#F5F0E6',
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
    justifyContent: 'space-between',
  },

  cardYellow: {
    backgroundColor: '#F2C94C',
  },

  emoji: {
    fontSize: 31,
  },

  cardTitle: {
    marginTop: 14,
    fontSize: 19,
    fontWeight: '800',
    color: '#111111',
  },

  cardSubtitle: {
    marginTop: 4,
    fontSize: 12,
    color: '#555555',
  },

  socialCard: {
    flexDirection: 'row',
    backgroundColor: '#1D1D1D',
    borderRadius: 20,
    padding: 18,
    marginTop: 4,
    borderWidth: 1,
    borderColor: '#292929',
  },

  socialIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F2C94C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  socialEmoji: {
    fontSize: 21,
  },

  socialTextContainer: {
    flex: 1,
  },

  socialTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#F5F0E6',
    marginBottom: 5,
  },

  socialDescription: {
    fontSize: 13,
    lineHeight: 19,
    color: '#999999',
  },

  footer: {
    textAlign: 'center',
    marginTop: 35,
    fontSize: 11,
    letterSpacing: 1,
    color: '#555555',
  },
});
