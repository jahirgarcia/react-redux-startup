import App from '@app/App';
import store from '@app/store';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
