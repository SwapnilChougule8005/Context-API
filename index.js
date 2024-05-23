import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App'
import "./index.css"
import ThemeProvider from './ThemeProvider';


const rootDiv = document.getElementById('root');
const root = createRoot(rootDiv);

root.render(
<ThemeProvider>
   <App/>
</ThemeProvider>
);
