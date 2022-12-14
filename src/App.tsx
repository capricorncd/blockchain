/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/06/07 23:02:43 (GMT+0900)
 */
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, RequireAuth } from './components/Auth';
import { Blockchain } from './components/Blockchain';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { LoginPage } from './components/Login';
import { ProtectedPage } from './components/Protected';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Blockchain />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/public" element={<Home />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
