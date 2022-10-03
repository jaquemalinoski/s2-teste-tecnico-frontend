import './styles/components/app.sass'
import { Dashboard } from './pages/dashboard'
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div id="app">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false}
        closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
      <ToastContainer />
      <Dashboard/>
    </div>
  );
}

export default App;
