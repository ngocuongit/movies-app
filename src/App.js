import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import config from './config';
import { useAuthListener } from './hooks';
import { Home, Browse, SignIn, SignUp } from './pages'
import { PublicRouters, PrivateRouters } from './routers';




function App() {
  const {user} = useAuthListener();
  console.log(user)
  return (
    <Router>
      <Routes>
        {/* {publicRouters.map((router, index) => (
          <Route key={index} path={router.path} element={<router.component/>} />
        ))} */}
        <Route path={config.routes.signin} element={
          <PublicRouters
            user={user}
            loggedInPath={config.routes.browse}>
            <SignIn />
        </PublicRouters>
        }
        />
        <Route path={config.routes.signup} element={
          <PublicRouters
            user={user}
            loggedInPath={config.routes.browse}>
            <SignUp />
          </PublicRouters>
        }
        />
        <Route path={config.routes.browse} element={
          <PrivateRouters
            user={user}>
            <Browse />
          </PrivateRouters>
        }
        />

        <Route path={config.routes.home} element={
          <PublicRouters
            user={user}
            loggedInPath={config.routes.browse}>
            <Home />
          </PublicRouters>
        }
        />

      </Routes>


    </Router>


  );
}

export default App;
