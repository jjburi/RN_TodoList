import {addTodo, toggleTodo, deleteTodo} from '../actions/index';

const initialState = [
  {
    id: 1,
    text: '예시',
    done: false,
  },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? {...todo, done: !todo.done} : todo,
      );
    case 'DELETE_TODO':
      const nextState = state.filter((todo) => todo.id !== action.id);
      return nextState;
    default:
      return state;
  }
}
