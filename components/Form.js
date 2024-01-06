import { StyleSheet, Text, View} from 'react-native';

export default function Form() {
  return (
    <View style={styles.form}>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:30
  }
});