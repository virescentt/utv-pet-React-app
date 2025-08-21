import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';
import cl from './Navbar.module.css'

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth');
  } 
  return (
    <div className="navbar">
      <MyButton className={[cl.btn__logout, isAuth ? null : cl.false].join(' ')} onClick={logout}>
        Выйти
      </MyButton>
      <div className="navbar__links">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
};

export default Navbar;