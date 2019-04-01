import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import App2 from './App2';

hydrate(<App />, document.querySelector('#app'));
render(<App2 />, document.querySelector('#main'));