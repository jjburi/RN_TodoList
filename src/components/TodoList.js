import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import TodoListItem from './TodoListItem';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTodo, toggleTodo} from '../modules/todoList/actions';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  //const onComplete = console.log('ㄴ토글~!!!!!!!1');
  const onComplete = (index) => dispatch(toggleTodo(index));

  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} onComplete={onComplete} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;
