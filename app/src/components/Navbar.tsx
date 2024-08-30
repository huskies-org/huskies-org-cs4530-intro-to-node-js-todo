import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthProvider';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <nav className="bg-transparent p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link to="/" className="text-black text-2xl font-bold hover:text-blue-500">
              todo
            </Link>
          </div>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="text-black hover:text-blue-500">
              Logout
            </button>
          ) : (
            <div>
              <Link to="/login" className="text-black hover:text-blue-500">
                Login
              </Link>
              <Link to="/register" className="text-black ml-4 hover:text-blue-500">
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
