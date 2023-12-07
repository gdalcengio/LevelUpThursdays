import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { setupStore } from './state/store.ts';
import { CONFIG } from './state/config';
import { Provider } from 'react-redux';

let store: any;
store = setupStore(CONFIG);

import(/* webpackChunkName: "app_config" */ './state/config').then(({ CONFIG }) => {
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

<Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
)
}
)
