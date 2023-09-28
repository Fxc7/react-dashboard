import './assets/index.css';

import ReactDOM from 'react-dom/client';

import { element } from './element.jsx';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(element);