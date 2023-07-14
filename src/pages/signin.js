import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from '../context/firebase'
import { Form } from '../components';
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import Routers from '../config/index'

export default function SigIn() {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext)
  const [emailAddress, setEmailAddres] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';
  const handleSignin = (event) => {
    event.preventDefault();

    // check firebase auth
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {

        //push to the browse page
        history.push(Routers.routes.browse)
      })

      .catch((error) => {

        setEmailAddres('');
        setPassword('');
        setError(error.message);
      })

  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sing in</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST" >
            <Form.Input
              required
              type="text"
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddres(target.value)}
            />
            <Form.Input
              required
              type="password"
              autoComplete="off"
              placeholder="PassWord"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submmit disable={isInvalid} type="submit" >
              Sing Up
            </Form.Submmit>
          </Form.Base>
          <Form.Text>
           Already a user? <Form.Link to="/signup">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
