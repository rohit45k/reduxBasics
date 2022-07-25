import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { authActions } from '../store/authSlice';

const Header = () => {

  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout())
  }

  const navBar = <nav>
  <ul>
    <li>
      <p>My Products</p>
    </li>
    <li>
      <p>My Sales</p>
    </li>
    <li>
      <button onClick={logoutHandler}>Logout</button>
    </li>
  </ul>
</nav>

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && navBar}    
    </header>
  );
};

export default Header;
