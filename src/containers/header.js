import React from 'react';
import { Header } from '../components';
import routers from '../config';
import logo from '../logo.svg';

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={routers.routes.home} alt="Netflix" src={logo} />
                <Header.ButtonLink to={routers.routes.signin}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}
