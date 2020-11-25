import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
} from 'react-native';
import TodoInsert from './src/components/TodoInsert';
import TodoList from './src/components/TodoList';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/modules/todoList/reducers/index';

const store = createStore(rootReducer); // 스토어를 만듭니다.

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.appTitle}>Hello Todolist</Text>
        <View style={styles.card}>
          <TodoInsert />
          <TodoList />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});

export default App;
