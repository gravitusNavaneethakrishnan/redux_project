import './App.css';
import CustomerAdd from './components/CustomerAdd';

//redux
import { Provider } from 'react-redux';
import CustomerView from './components/CustomerView';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Redux Project</h1>
        <CustomerAdd />
        <CustomerView />
      </div>
    </Provider>
  );
}

export default App;
