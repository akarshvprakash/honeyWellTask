import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './App.css';
import Search from './Search';
import { githubMainReducer } from './store/reducer';

let store = createStore(githubMainReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
}

export default App;