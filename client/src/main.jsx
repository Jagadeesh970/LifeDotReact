import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import AuthStoreProvider from './Store/AuthStore.jsx';

createRoot(document.getElementById('root')).render(
  <AuthStoreProvider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </AuthStoreProvider>
)
