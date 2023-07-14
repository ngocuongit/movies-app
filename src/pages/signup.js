import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from '../context/firebase'
import { Form } from '../components';
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import Routers from '../config/index'

export default function SignUp() {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext)
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddres] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || password === '' || emailAddress === '';
  const handleSignUp = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => 
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,

          })
          .then(() => {
            history.push(Routers.routes.browse)
          })
      )
    .catch ((error) => {
        setFirstName('')
        setEmailAddres('')
        setPassword('')
        setError(error.message)
    })
  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sing in</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST" >
            <Form.Input
              required
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
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
              Sing In
            </Form.Submmit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
