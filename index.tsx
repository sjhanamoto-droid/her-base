import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CompanyPage from './components/CompanyPage';
import { COMPANY_PATH } from './constants';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

// 1ページ構成のLP＋会社概要ページのみのため、ルーターは使わずパスで出し分ける
// （vercel.json の rewrite で全パスが index.html に届く）
const isCompanyPage = window.location.pathname.replace(/\/+$/, '') === COMPANY_PATH;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {isCompanyPage ? <CompanyPage /> : <App />}
  </React.StrictMode>
);
