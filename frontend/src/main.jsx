import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Import the Provider component from react-redux
import { store } from './redux/store';  // Import the Redux store
import './index.css';
import App from './App.jsx';

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Create a root using React 18's new root API
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* Wrap your App component with Redux Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
