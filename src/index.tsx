import { createRoot } from 'react-dom/client';
import App from '@/components/App';
import { Provider } from 'react-redux';
import { store } from '@/store';

const container = document.getElementById('root');

if (!container) throw new Error('root not found');

createRoot(container).render(
  <Provider store={store}>
    <App />
  </Provider>
);
