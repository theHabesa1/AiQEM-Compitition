import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { doneSlice } from '../slice/done';
import { inProgressSlice } from '../slice/inProgress';
import { todoSlice } from '../slice/todo';

// Load tasks from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save tasks to localStorage
const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState);
  } catch (err) {
    // Handle potential errors here
  }
};

const rootReducer = combineReducers({
  done: doneSlice.reducer,
  inProgress: inProgressSlice.reducer,
  todo: todoSlice.reducer,
});

const persistedState = loadState();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

// Subscribe to store changes and save tasks to localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
