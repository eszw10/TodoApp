import { useState } from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: 1},
    {text: 'create an app', key: 2},
    {text: 'play on the pc', key: 3},
  ]) 

  const pressHandler = (key) => {
    setTodos(prev => prev.filter(todo => todo.key != key))
  }

  const addHandler = (text) => {
    if(text.length > 3) {
      setTodos(prev => {
        return [
          {
            text : text,
            key : prev.length+1
          },
          ...prev
        ]
      })
    } else {
      Alert.alert('OOPS!', 'Todos must contain more than 3 characters!',[
        {text:'UNDERSTOOD', onPress:() => console.log('alert closed')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo addHandler={addHandler}/>
          <View style = {styles.list}>
            <FlatList
              data={todos}
              renderItem={({item})=> (
                <TodoItem item={item} presshandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:38,
  },
  content: {
    flex:1,
    padding: 40,
  }, 
  list: {
    flex:1
  }
});
