import App from '@app/App';
import store from '@app/store';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
