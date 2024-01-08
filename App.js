import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import { StyleSheet, Text, View, FlatList } from 'react-native';
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
    setTodos(prev => {
      return [
        {
          text : text,
          key : prev.length+1
        },
        ...prev
      ]
    })
  }

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:38,
  },
  content: {
    padding: 40,
  }, 
});
