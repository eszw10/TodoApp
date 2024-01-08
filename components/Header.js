import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display:'flex',
    paddingVertical:20,
    paddingHorizontal:16,
    backgroundColor: 'coral',
  },
  title: {
    fontSize:20,
    color:'white',
    fontWeight:'bold'
  }
   
});
