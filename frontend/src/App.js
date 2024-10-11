import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './routes/login';
import Menu from './routes/menu';

import {ChakraProvider} from '@chakra-ui/react'

import {AuthProvider} from './contexts/useAuth';
function App() {
  return (
    <ChakraProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/menu' element={<Menu />} />
          </Routes>
        </AuthProvider>
     </Router>
    </ChakraProvider>
  );
}

export default App;
