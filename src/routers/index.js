import config from '../config';
import { Home, Browse, SignIn, SignUp } from '../pages'
import { Routes, Route, Navigate } from 'react-router-dom'

export function PublicRouters({ user, loggedInPath, children, ...rest }) {

    if (!user) {
        return children

    }

    if (user) {
        return (
            <Navigate
                to={{
                    pathname: loggedInPath,
                }}
                replace
            />
        )
    }


}

export function PrivateRouters({ user, children, ...rest }) {
    
            if (user) {
                return children;

            }

            if (!user) {
                return (
                    <Navigate
                        to={{
                            pathname: config.routes.signin,
                        }}
                        replace
                    />
                )
            }

}

// [
//     { path:config.routes.home, component: Home },
//     { path:config.routes.browse, component: Browse },
//     { path:config.routes.signin, component: SignIn },
//     { path:config.routes.signup, component: SignUp }

// ]

// export default publicRouters;