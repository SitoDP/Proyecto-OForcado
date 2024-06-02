import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home';
import ContactForm from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Cafespg from './components/Cafespg';
import Infusionespg from './components/Infusionespg';
import Chocolatespg from './components/Chocolatespg';




function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/menu/cafespg"
        element={
          <Layout>
            <Cafespg />
          </Layout>
        }
      />
      <Route
        path="/menu/infusionespg"
        element={
          <Layout>
            <Infusionespg />
          </Layout>
        }
      />
      <Route
        path="/menu/chocolatespg"
        element={
          <Layout>
            <Chocolatespg />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <ContactForm />
          </Layout>
        }
      />

    </Routes>
  )
}

export default App
