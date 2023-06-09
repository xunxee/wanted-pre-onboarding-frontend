import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import SigninPage from './Signin/SigninPage';
import SignupPage from './Signup/SignupPage';
import TodoPage from './Todo/TodoPage';
import Listify from './components/Listify';

export default function App() {
  return (
    <>
      <Listify />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="signin" element={<SigninPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="todo" element={<TodoPage />} />
      </Routes>
    </>
  );
}
