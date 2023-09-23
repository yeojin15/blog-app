import './App.css';
import { useEffect, useState } from 'react';
import { app } from 'FirebaseApp';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Router from './Components/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'Components/Loader';

function App() {
  const auth = getAuth(app);

  // auth 체크하기 전에는 로더를 띄워준다
  const [init, setInit] = useState<boolean>(false);

  // auth에 currentUser 있으면 isAuth로 변경
  const [isAuth, setIsAuth] = useState<boolean>(!!auth?.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      setInit(true);
    });
  }, [auth]);

  return (
    <>
      <ToastContainer />
      {init ? <Router isAuth={isAuth} /> : <Loader />}
    </>
  );
}

export default App;
