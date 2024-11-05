import React from 'react';
import ReactDOM from 'react-dom/client.js';
import './index.css';
import App from './App';
// product provider
import ProductProvider from './ProductProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProductProvider>
        <React.Strictmode>
            <App/>
        </React.Strictmode>
    </ProductProvider>
)