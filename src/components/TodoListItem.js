import React from 'react';
import {useSelector, useDispatch, useCallback} from 'react-redux';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {deleteTodo, toggleTodo} from '../modules/todoList/actions';

const TodoListItem = ({id, text, done, onComplete}) => {
  //const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);
  const dispatch = useDispatch();
  const onRemove = (index) => dispatch(deleteTodo(index));

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circle} onPress={() => onComplete(id)}>
        <Text>완료</Text>
      </TouchableOpacity>
      <Text
        style={[styles.text, done ? styles.strikeText : styles.unstrikeText]}>
        {text}
      </Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => onRemove(id)}>
        <Text style={styles.buttonText}>삭제</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
  circle: {
    width: 30,
    height: 30,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#29323c',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default TodoListItem;
