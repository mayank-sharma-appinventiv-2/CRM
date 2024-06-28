import RoutesManager from './routes';
import { Provider } from 'react-redux';
import store from '@redux/store';

function App() {
  return (
    <Provider store={store}>
      <RoutesManager />
    </Provider>
  );
}

export default App;
