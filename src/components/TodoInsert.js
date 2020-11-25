import React, {useState, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {addTodo} from '../modules/todoList/actions/index';

const TodoInsert = () => {
  const todos = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  const onCreate = (text) => dispatch(addTodo(text));

  const [text, setText] = useState('');
  const todoInputHandler = (newTodo) => setText(newTodo);
  const addTodoHandler = (e) => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text);
    setText(''); // 인풋 초기화
    console.log('이게 두번째 투두스~~~~~~~', todos);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add an item!"
        placeholderTextColor={'#999'}
        onChangeText={todoInputHandler}
        value={text}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title={'ADD'} onPress={addTodoHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default TodoInsert;
