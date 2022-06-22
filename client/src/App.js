import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Auth from './views/Auth';
import Dashboard from './views/Dashboard';
import About from './views/About';
import AuthContextProvider from './contexts/AuthContext';
import ProtectedRoute from './components/routing/ProtectedRoute';
import NavbarMenu from './components/layout/NavbarMenu';
import PostContextProvider from './contexts/PostContext';

function App() {
    return (
        <AuthContextProvider>
            <PostContextProvider>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Landing />} />
                        <Route
                            path="/login"
                            element={<Auth authRoute="login" />}
                        />
                        <Route
                            path="/register"
                            element={<Auth authRoute="register" />}
                        />
                        <Route
                            path="dashboard"
                            element={
                                <ProtectedRoute>
                                    <NavbarMenu />
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="about"
                            element={
                                <ProtectedRoute>
                                    <NavbarMenu />
                                    <About />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </Router>
            </PostContextProvider>
        </AuthContextProvider>
    );
}

export default App;
