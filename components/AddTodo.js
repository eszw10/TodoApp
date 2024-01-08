import { useState } from 'react';
import { Button, StyleSheet, TextInput, View} from 'react-native';

export default function AddTodo({addHandler}) {
  
  const[text,setText] = useState('')

  const changeHandler = (value) => {
    setText(value)
  }
  
  return (
    <View>
      <TextInput
        style = {styles.input}
        placeholder='type your todos here..'
        onChangeText={changeHandler}
      />
      <Button color='coral' title='add todo' onPress={() => addHandler(text)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical:6,
    borderBottomWidth:1,
  }
});