import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
// import ClassCounter from './components/ClassCounter';

import { useSelector } from "react-redux/es/exports"

function App() {

  const isAuth = useSelector(state => state.auth.isAuthenticated)
  
  return (
    <>
      <Header />
      { isAuth ? <UserProfile /> : <Auth />}
      <Counter />
      {/* <ClassCounter /> */}
    </>
  );
}

export default App;
