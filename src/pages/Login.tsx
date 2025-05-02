
import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/SEO';
import { CyberButton } from '../components/CyberButton';
import { useToast } from '../hooks/use-toast';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(username, password);
      if (success) {
        toast({
          title: 'Login successful',
          description: 'Welcome to the admin dashboard',
          variant: 'default',
        });
        navigate('/admin');
      } else {
        toast({
          title: 'Login failed',
          description: 'Invalid username or password',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/admin" />;
  }

  return (
    <>
      <SEO 
        title="Admin Login | CyberDev Portfolio" 
        description="Secure login for CyberDev Portfolio administration."
      />
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md bg-black/40 backdrop-blur-lg border border-cyan-500/30 rounded-lg shadow-lg p-8 space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-orbitron text-cyan-400 mb-6">Admin Access</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-6"></div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-rajdhani font-medium text-gray-200">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 focus:border-cyan-400 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-cyan-400"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-rajdhani font-medium text-gray-200">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 focus:border-cyan-400 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-cyan-400"
                required
              />
            </div>
            
            <div className="pt-2">
              <CyberButton disabled={isLoading} type="submit" className="w-full">
                {isLoading ? 'Authenticating...' : 'Login'}
              </CyberButton>
            </div>
          </form>
          
          <div className="text-center text-xs text-gray-400 mt-6">
            <p>Default credentials: admin / admin123</p>
            <p className="mt-2">For demonstration purposes only</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
