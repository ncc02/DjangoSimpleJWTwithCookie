import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './routes/login';
import Register from './routes/register';
import Menu from './routes/menu';

import {ChakraProvider} from '@chakra-ui/react'
import PrivateRouter from './components/private_route';
import {AuthProvider} from './contexts/useAuth';
function App() {
  return (
    <ChakraProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<PrivateRouter> <Menu/></PrivateRouter>} />
          </Routes>
        </AuthProvider>
     </Router>
    </ChakraProvider>
  );
}

export default App;
