import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const reducer = (state = initialState, action) => {
  console.log('🚀 ~ file: store.js ~ line 12 ~ reducer ~ action', action);

  switch (action.type) {
    case 'contacts/Items':
      return state.contacts.items.push(action);

    case 'contacts/filter':
      return { filter: action };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
