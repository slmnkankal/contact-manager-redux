import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import PeopleList from './components/PeopleList';
import AddPersonForm from './components/AddPersonForm';

const initialState = {
  contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"]
};

//Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PERSON':
      return {...state, contacts: [...state.contacts, action.data]}
    default:
      return state;
  }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <AddPersonForm />
    <PeopleList />
  </React.StrictMode>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
