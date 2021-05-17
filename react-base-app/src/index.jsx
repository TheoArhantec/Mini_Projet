import { hot } from 'react-hot-loader/root';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import './index.scss'

const EntryPointComponent = hot(() => (
  <main>
    <App />
  </main>
));

render(
  <EntryPointComponent />,
  document.getElementById('appMountPoint'),
);
