import { createBrowserRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './components';
import { Home, Chat, Login, Register } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    children: [],
  },
  {
    path: '/chat',
    element: (
      <ProtectedRoute>
        <Chat />
      </ProtectedRoute>
    ),
  },
  {
    path: 'signin',
    element: (
      <AuthRoute>
        <Register />
      </AuthRoute>
    ),
  },
  {
    path: 'login',
    element: (
      <AuthRoute>
        <Login />
      </AuthRoute>
    ),
  },
]);
